
// eslint-disable-next-line
function convertFilterBcToView(bcFilter, returnFilter = [], isRecursive = false) {
    for (const uiFilter of bcFilter) {
        let blockFilter = {};
        if (!uiFilter.filter && !isRecursive) return;
        if (isRecursive) {
            let internalOp = Object.keys(uiFilter);
            if (internalOp.length === 1) {
                [uiFilter.operator] = [...internalOp];
                uiFilter.criteria = uiFilter[internalOp[0]];
                delete uiFilter[internalOp[0]];
                if (uiFilter.criteria instanceof Array) {
                    convertFilterBcToView(uiFilter.criteria, returnFilter, true);
                }
            } else {
                continue;
            }
        } else {
            let mainFilter = Object.keys(uiFilter.filter);
            if (mainFilter.length === 1) {
                for (const operator of mainFilter) {
                    // eslint-disable-next-line
                    if (uiFilter.filter[operator] instanceof Array) {
                        blockFilter.operator = operator;
                        blockFilter.criteria = uiFilter.filter[operator];
                        // eslint-disable-next-line
                        if (blockFilter.criteria instanceof Array) {
                            convertFilterBcToView(blockFilter.criteria, returnFilter, true);
                        }
                    }
                }
            } else {
                blockFilter.operator = null;
                blockFilter.criteria = new Array(uiFilter.filter);
            }
        }
        if (Object.keys(blockFilter).length) {
            blockFilter.ui = uiFilter.ui;
            blockFilter.sources = uiFilter.sources;
            returnFilter.push(blockFilter);
        }
    }

    // eslint-disable-next-line
    return returnFilter;
}

function createdCriteriaByLevel(criteria, fatherAttr) {
    const attr = criteria.attr.replace(`${fatherAttr}.`, '');
    const idx = attr.indexOf('.');
    if (idx === -1) {
        return;
    }

    criteria.attr = attr.substr(0, idx);;
    if (!criteria.operator) {
        criteria.operator = 'and';
    }
    criteria.criteria = [{
        attr: attr.substr(idx + 1, criteria.attr.length),
        oper: criteria.oper,
        val: criteria.val
    }];
    delete criteria.oper;
    delete criteria.val;
}

// eslint-disable-next-line complexity
function bcNestedOperator(father, child) {
    if (!child.length) {
        if (child.attr.split('.').length > 1) {
            const idx = child.attr.indexOf('.');
            if (idx !== -1) {
                father.attr = child.attr.substr(0, idx);
                child.attr = child.attr.substr(idx + 1, child.attr.length);
            }
        }
    } else {
        for (const criteria of child) {
            const keys = Object.keys(criteria);
            if (keys.length > 2) {
                let attr = null;
                const idx = criteria.attr.indexOf('.');
                if (idx !== -1) {
                    attr = criteria.attr.substr(0, idx);
                }
                if (!attr) continue;
                if (father) {
                    // eslint-disable-next-line max-depth
                    if (father.attr) {
                        createdCriteriaByLevel(criteria, father.attr);
                    } else {
                        father.attr = attr;
                    }
                } else {
                    child.attr = attr;
                }
                criteria.attr = criteria.attr.substr(idx + 1, criteria.attr.length);
                if (criteria.attr.split('.').length > 1) {
                    bcNestedOperator(father, criteria);
                }
            } else {
                if (criteria.criteria instanceof Array) {
                    bcNestedOperator(criteria, criteria.criteria);
                }
            }
        }
    }
}

function otherUI(attr, criterios) {
    for (const criterio of criterios) {
        if (criterio.criteria) {
            if (attr !== criterio.attr) {
                criterio.attr = `${attr}.${criterio.attr}`;
            }
            otherUI(criterio.attr, criterio.criteria);
            delete criterio.attr;
            continue;
        }
        criterio.attr = `${attr}.${criterio.attr}`;
    }
}

export function bcFilterToView(bcFilter) {
    let response = convertFilterBcToView(bcFilter);
    if (!response) return null;
    for (const items of response) {
        bcNestedOperator(items, items.criteria);
    }

    return response;
}

// eslint-disable-next-line
export function viewToBcFilter(viewFilter, returnFilter = [], first = true) {
    for (const uiFilter of viewFilter) {
        let blockFilter = {};
        const {operator} = {...uiFilter};
        if (!operator && first) {
            if (uiFilter.attr) {
                otherUI(uiFilter.attr, uiFilter.criteria);
            }
            blockFilter.filter = uiFilter.criteria;
            blockFilter.ui = uiFilter.ui;
            blockFilter.sources = uiFilter.sources;
            returnFilter.push(blockFilter);
            break;
        } else {
            if (first) {
                if (uiFilter.attr) {
                    otherUI(uiFilter.attr, uiFilter.criteria);
                }
                blockFilter.filter = {};
                blockFilter.ui = uiFilter.ui;
                blockFilter.sources = uiFilter.sources;
                blockFilter.filter[operator] = uiFilter.criteria;
                if (blockFilter.filter[operator] instanceof Array) {
                    viewToBcFilter(blockFilter.filter[operator], returnFilter, false);
                }
            } else {
                if (uiFilter.criteria) {
                    // eslint-disable-next-line max-depth
                    if (operator) {
                        // eslint-disable-next-line max-depth
                        if (uiFilter.attr) {
                            otherUI(uiFilter.attr, uiFilter.criteria);
                        }
                        uiFilter[operator] = uiFilter.criteria;
                        delete uiFilter.criteria;
                        delete uiFilter.attr;
                        delete uiFilter.operator;
                    }
                }
                if (uiFilter[operator] instanceof Array) {
                    viewToBcFilter(uiFilter[operator], returnFilter, false);
                }
                continue;
            }

        }

        if (Object.keys(blockFilter).length && blockFilter.filter[operator]) {
            returnFilter.push(blockFilter);
        }
    }

    if (Object.keys(viewFilter).length) {
        return returnFilter;
    }
}

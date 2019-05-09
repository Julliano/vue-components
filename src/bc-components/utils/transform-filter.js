
// eslint-disable-next-line
function convertFilterBcToView(bcFilter, returnFilter = [], isRecursive = false) {
    for (const uiFilter of bcFilter) {
        let blockFilter = {};
        if (uiFilter.filter === null && uiFilter.ui) {
            blockFilter.ui = uiFilter.ui;
            blockFilter.sources = uiFilter.sources;
            blockFilter.criteria = [{}];
            returnFilter.push(blockFilter);
            return returnFilter;
        }
        // eslint-disable-next-line consistent-return
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
            if (uiFilter.filter && uiFilter.filter instanceof Array) {
                if (uiFilter.filter.length === 1) {
                    // eslint-disable-next-line prefer-destructuring
                    uiFilter.filter = uiFilter.filter[0];
                }
            }
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

function createCriteriaOtherUI(criteria, attr, fatherAttr) {
    criteria.attr = fatherAttr;
    if (!criteria.operator) {
        criteria.operator = 'AND';
    }
    criteria.criteria = [{
        attr,
        oper: criteria.oper,
        val: criteria.val
    }];
    delete criteria.oper;
    delete criteria.val;
}

function createdCriteriaByLevel(criteria, fatherAttr) {
    const attr = criteria.attr.replace(`${fatherAttr}.`, '');
    const idx = attr.indexOf('.');
    if (idx === -1) {
        let attrOtherLevel = criteria.attr.replace(`${fatherAttr}.`, '');
        let otherLevel = attr.indexOf('.');
        createCriteriaOtherUI(criteria, attrOtherLevel, fatherAttr);
        if (otherLevel !== -1) {
            createdCriteriaByLevel(criteria.criteria[0], attr.substr(0, idx));
        }
        return;
    }

    createCriteriaOtherUI(criteria, attr, fatherAttr);
}

function verifyOtherUIOrGroup(fatherCriteria, criterias, recursiveFather) {
    let attr = null;
    let fatherAttr = null;
    if (criterias instanceof Array) {
        for (let criteria of criterias) {
            if (criteria.attr) {
                // eslint-disable-next-line prefer-destructuring
                attr =  criteria.attr;
                let idx = attr.indexOf('.');
                if (idx !== -1) {
                    // eslint-disable-next-line max-depth
                    if (recursiveFather) {
                        fatherAttr = criteria.attr.substr(0, idx);
                        attr = criteria.attr.replace(`${fatherAttr}.`, '');
                        criteria.attr = attr;
                        idx = attr.indexOf('.');
                    }
                    attr = attr.substr(0, idx);
                    // eslint-disable-next-line max-depth
                    if (fatherCriteria.attr) {
                        // eslint-disable-next-line max-depth
                        if (fatherCriteria.attr === attr) {
                            criteria.attr = criteria.attr.replace(`${attr}.`, '');
                            continue;
                        } else {
                            return;
                        }
                    }

                    fatherCriteria.attr = attr;
                    criteria.attr = criteria.attr.replace(`${attr}.`, '');
                }
            } else {
                verifyOtherUIOrGroup(criteria, criteria.criteria, fatherCriteria);
            }
        }
        return;
    }
    // No futuro se não pode não ser um Array ai deve ser um grupo.
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
            let isListCriteria = criteria.criteria instanceof Array;
            if ((keys.length > 2 || !keys.includes('criteria')) && !isListCriteria) {
                let attr = null;
                const idx = criteria.attr.indexOf('.');
                if (idx !== -1) {
                    attr = criteria.attr.substr(0, idx);
                }
                if (!attr) continue;
                createdCriteriaByLevel(criteria, attr);
                if (criteria.attr.split('.').length > 1) {
                    bcNestedOperator(father, criteria);
                }
            } else {
                verifyOtherUIOrGroup(criteria, criteria.criteria);
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
        if (criterio.attr) {
            criterio.attr = `${attr}.${criterio.attr}`;
        }
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
function convertFilterViewToBC(viewFilter, first = true) {
    for (const uiFilter of viewFilter) {
        let blockFilter = {};
        const {operator} = {...uiFilter};
        if (!operator && first) {
            if (uiFilter.attr) {
                otherUI(uiFilter.attr, uiFilter.criteria);
            }
            if (uiFilter.ui) {
                blockFilter.filter = uiFilter.criteria;
                blockFilter.ui = uiFilter.ui;
                blockFilter.sources = uiFilter.sources;
                viewFilter.push(blockFilter);
            }
            break;
        } else {
            if (first) {
                if (uiFilter.attr) {
                    otherUI(uiFilter.attr, uiFilter.criteria);
                }
                if (uiFilter.criteria.length === 1) {
                    // eslint-disable-next-line max-depth
                    if (!Object.entries(uiFilter.criteria[0]).length) {
                        blockFilter.filter = null;
                        blockFilter.ui = uiFilter.ui;
                        blockFilter.sources = uiFilter.sources;
                        viewFilter.push(blockFilter);
                        continue;
                    }
                }
                blockFilter.filter = {};
                blockFilter.ui = uiFilter.ui;
                blockFilter.sources = uiFilter.sources;
                blockFilter.filter[operator] = uiFilter.criteria;
                if (blockFilter.filter[operator] instanceof Array) {
                    convertFilterViewToBC(blockFilter.filter[operator], false);
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
                    convertFilterViewToBC(uiFilter[operator], false);
                }
                continue;
            }

        }

        if (Object.keys(blockFilter).length && blockFilter.filter[operator]) {
            viewFilter.push(blockFilter);
        }
    }

    if (Object.keys(viewFilter).length) {
        return viewFilter;
    }
}

function reduce(criterios, fatherOperator) {
    for (let i = 0; i < criterios.length; i++) {
        delete criterios[i].hash;
        let keys = Object.keys(criterios[i]);
        if (keys.length === 0) {
            criterios.splice(i, 1);
            i--;
            continue;
        }
        if (keys.length === 1) {
            if (keys[0] === fatherOperator[0]) {
                let subCriterios = criterios[i][keys[0]];
                for (let y = 0; y < subCriterios.length; y++) {
                    criterios.splice(i + y, 0, subCriterios[y]);
                }
                criterios.splice(i + subCriterios.length, 1);
                i--;
            } else {
                reduce(criterios[i][keys], keys);
            }
        }
    }
}

function reduceFilter(bcFilter) {
    for (const uiFilter of bcFilter) {
        if (uiFilter.filter && Object.keys(uiFilter.filter).length === 1) {
            let firstOperator = Object.keys(uiFilter.filter);
            let criterios = uiFilter.filter[firstOperator];
            reduce(criterios, firstOperator);
        }
    }
    return bcFilter;
}

export function viewToBcFilter(viewFilter) {
    let bcFilter = convertFilterViewToBC(viewFilter);
    bcFilter = bcFilter.filter(each => {
        return 'filter' in each && each.filter !== undefined;
    });
    reduceFilter(bcFilter);
    return bcFilter;
}

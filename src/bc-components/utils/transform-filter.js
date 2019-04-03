class TransformFilter {

    constructor() {
        this.returnFilter = [];
        this.viewFilter = [];
    }

    // eslint-disable-next-line
    bcFilterToView(bcFilter, isRecursive = false) {

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
                        this.bcFilterToView(uiFilter.criteria, true);
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
                                this.bcFilterToView(blockFilter.criteria, true);
                            }
                        }
                    }
                } else {
                    blockFilter.operator = null;
                    blockFilter.criteria = uiFilter.filter;
                }
            }
            if (Object.keys(blockFilter).length) {
                blockFilter.ui = uiFilter.ui;
                blockFilter.sources = uiFilter.sources;
                this.returnFilter.push(blockFilter);
            }
        }

        // eslint-disable-next-line
        return this.returnFilter;
    }

    // eslint-disable-next-line
    viewToBcFilter(viewFilter, first = true) {
        for (const uiFilter of viewFilter) {
            let blockFilter = {};
            const {operator} = {...uiFilter};
            if (!operator && first) {
                blockFilter.filter = uiFilter.criteria;
                blockFilter.ui = uiFilter.ui;
                blockFilter.sources = uiFilter.sources;
                this.viewFilter.push(blockFilter);
                break;
            } else {
                if (first) {
                    blockFilter.filter = {};
                    blockFilter.ui = uiFilter.ui;
                    blockFilter.sources = uiFilter.sources;
                    blockFilter.filter[operator] = uiFilter.criteria;
                    if (blockFilter.filter[operator] instanceof Array) {
                        this.viewToBcFilter(blockFilter.filter[operator], false);
                    }
                } else {
                    if (uiFilter.criteria) {
                        uiFilter[operator] = uiFilter.criteria;
                        delete uiFilter.criteria;
                        delete uiFilter.operator;
                    }
                    if (blockFilter[operator] instanceof Array) {
                        this.viewToBcFilter(uiFilter[operator], false);
                    }
                    continue;
                }

            }

            if (Object.keys(blockFilter).length && blockFilter.filter[operator]) {
                this.viewFilter.push(blockFilter);
            }
        }

        if (Object.keys(this.viewFilter).length) {
            return this.viewFilter;
        }
    }

}

exports.bcFilterToView = TransformFilter.bcFilterToView;
exports.viewToBcFilter = TransformFilter.viewToBcFilter;

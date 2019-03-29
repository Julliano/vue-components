export default (oldProp, newProp, { [oldProp]: old, ...others }) => {
    return {
        [newProp]: old,
        ...others
    };
};

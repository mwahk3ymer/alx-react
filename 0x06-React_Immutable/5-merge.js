const { List, Map } = require('immutable');

function concatElements(page1, page2) {
    return List(page1.concat(page2));
}

function mergeElements(page1, page2) {
    const mergedValues = {};

    Object.entries(page1).forEach(([key, value]) => {
        mergedValues[key] = value;
    });

    Object.entries(page2).forEach(([key, value]) => {
        mergedValues[key] = value;
    });

    return List(Object.values(mergedValues));
}

module.exports = { concatElements, mergeElements };

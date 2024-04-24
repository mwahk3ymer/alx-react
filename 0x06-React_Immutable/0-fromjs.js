// Importing the Immutable.js library
const { Map, fromJS } = require('immutable');

/**
 * Converts a JavaScript object into an Immutable Map using fromJS.
 * @param {Object} object - The JavaScript object to convert.
 * @returns {Map} - The Immutable Map representation of the object.
 */
function getImmutableObjectFromJS(object) {
    // Using fromJS to convert the object to an Immutable Map
    const immutableMap = fromJS(object);
    return immutableMap;
}

/**
 * Converts a JavaScript object into an Immutable Map using Map constructor.
 * @param {Object} object - The JavaScript object to convert.
 * @returns {Map} - The Immutable Map representation of the object.
 */
function getImmutableObjectUsingMap(object) {
    // Using the Map constructor to create an Immutable Map from the object
    const immutableMap = Map(object);
    return immutableMap;
}

// Exporting the functions to make them accessible from other files
module.exports = {
    getImmutableObjectFromJS,
    getImmutableObjectUsingMap
};

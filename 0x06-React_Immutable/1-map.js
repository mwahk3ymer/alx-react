// Importing the Immutable.js library
const { Map } = require('immutable');

/**
 * Converts a JavaScript object into an Immutable Map.
 * @param {Object} object - The JavaScript object to convert.
 * @returns {Map} - The Immutable Map representation of the object.
 */
function getImmutableObject(object) {
    // Using the Map constructor to create an Immutable Map from the object
    const immutableMap = Map(object);
    return immutableMap;
}

// Exporting the function to make it accessible from other files
module.exports = getImmutableObject;

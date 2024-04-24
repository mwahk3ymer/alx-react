// Import the fromJS function from Immutable.js library
const { fromJS } = require('immutable');

// Define the function getImmutableObject
function getImmutableObject(object) {
    // Convert the object into an immutable Map using fromJS
    const immutableMap = fromJS(object);
    return immutableMap;
}

// Export the getImmutableObject function
module.exports = getImmutableObject;

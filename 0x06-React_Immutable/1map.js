// Importing the implemented function
const getImmutableObject = require('./1-map');

// Example object
const inputObject = {
    fear: true,
    smell: -1033575916.9145899,
    wall: false,
    thing: -914767132
};

// Calling the function to get the Immutable Map
const immutableMap = getImmutableObject(inputObject);

// Logging the Immutable Map to the console
console.log(immutableMap);

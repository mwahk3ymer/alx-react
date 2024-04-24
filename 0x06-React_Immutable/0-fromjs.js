const Immutable = require('immutable');

function getImmutableObject(object) {
    return Immutable.fromJS(object);
}

// Example usage
const obj = {
    fear: true,
    smell: -1033575916.9145899,
    wall: false,
    thing: -914767132
};

const immutableMap = getImmutableObject(obj);
console.log(immutableMap);

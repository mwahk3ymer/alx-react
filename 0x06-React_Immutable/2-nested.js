export default function accessImmutableObject(object, array) {
    // Initialize a variable to store the current value of the object
    let value = object;

    // Iterate through each key in the array
    for (const key of array) {
        // Check if the current value is a Map
        if (value instanceof Map) {
            // Attempt to get the value at the current key
            value = value.get(key);
        } else if (typeof value === 'object' && value !== null) {
            // If the current value is an object (plain JavaScript object)
            // Attempt to access the value at the current key
            value = value[key];
        } else {
            // If the current value is neither a Map nor an object, return undefined
            return undefined;
        }

        // If the value is undefined, return undefined
        if (value === undefined) {
            return undefined;
        }
    }

    // Return the final value
    return value;
}

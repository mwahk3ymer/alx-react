export default function accessImmutableObject(object, array) {
    // Initialize a variable to store the current value of the object
    let value = object;

    // Iterate through each key in the array
    for (const key of array) {
        // Check if the current value is defined and is an object
        if (value && typeof value === 'object' && !Array.isArray(value)) {
            // Attempt to access the value at the current key
            value = value[key];
        } else {
            // If the current value is not an object or the key doesn't exist, return undefined
            return undefined;
        }
    }

    // Return the final value
    return value;
}

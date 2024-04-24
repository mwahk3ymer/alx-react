import { List } from 'immutable';

/**
 * Converts an array into an immutable List.
 * @param {Array} array - The array to convert.
 * @returns {List} - The immutable List representation of the array.
 */
export function getListObject(array) {
    return List(array);
}

/**
 * Adds an element to an immutable List.
 * @param {List} list - The immutable List to which the element will be added.
 * @param {string} element - The element to append to the List.
 * @returns {List} - The updated immutable List.
 */
export function addElementToList(list, element) {
    // Use the 'push' method of List to append the element
    return list.push(element);
}

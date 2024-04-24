import { List } from 'immutable';

export function getListObject(array) {
    return List(array);
}


export function addElementToList(list, element) {
    // Use the 'push' method of List to append the element
    return list.push(element);
}

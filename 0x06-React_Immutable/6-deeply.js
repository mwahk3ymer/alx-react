import { Map } from 'immutable';

export function mergeDeeplyElements(page1, page2) {
    const mergedMap = Map(page1).mergeWith((oldVal, newVal) => {
        if (Map.isMap(oldVal) && Map.isMap(newVal)) {
            return mergeDeeplyElements(oldVal, newVal);
        } else if (List.isList(oldVal) && List.isList(newVal)) {
            return oldVal.concat(newVal);
        } else {
            return newVal;
        }
    }, page2);
    return List(mergedMap.values());
}

import { List, Map } from 'immutable';

export function concatElements(page1, page2) {
    return List([...page1, ...page2]);
}

export function mergeElements(page1, page2) {
    const mergedMap = Map(page1).mergeWith((oldVal, newVal) => newVal, page2);
    return List(mergedMap.values());
}

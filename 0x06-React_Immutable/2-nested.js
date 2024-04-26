mport { Map } from 'immutable';

export default function accessImmutableObject(object, array) {
  // Convert the plain object to an Immutable.js Map
  const immutableMap = Map(object);
  
  // Use the getIn method to access the nested values
  return immutableMap.getIn(array);
}

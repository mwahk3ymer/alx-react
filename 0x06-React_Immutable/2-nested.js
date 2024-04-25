export default function accessImmutableObject(object, array) {
  // Use Array.reduce to iterate over the array of keys and access the nested values
  return array.reduce((acc, key) => (acc && typeof acc === 'object' ? acc[key] : undefined), object);
}

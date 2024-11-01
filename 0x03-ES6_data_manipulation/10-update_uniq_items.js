export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new TypeError('the map should be an instance of Map');
  }
  map.forEach((value, key) => {
    if (value === 1) map.set(key, 100);
  });
  return new Map(map);
}

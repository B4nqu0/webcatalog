export function filterByCategory(list, category) {
  if (!category) {
    return list;
  }

  return list.filter(item => item.family === category);
}
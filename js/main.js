import { items } from "./data.js";

import {
  filterByCategory,
  filterByRange,
  search,
  sortBy,
  getCategories,
  countByCategory,
  findById,
  applyFilters,
  getStats,
  filterByStability
} from "./catalog.js";


console.log("Усі дистрибутиви:", items);

console.log("Фільтр за сімейством:", filterByCategory(items, "Debian"));

console.log("Фільтр за роком:", filterByRange(items, "release_year", 2000, 2010));

console.log("Пошук:", search(items, "linux"));

console.log("Сортування:", sortBy(items, "name"));

console.log("Сімейства:", getCategories(items));

console.log("Кількість за сімействами:", countByCategory(items));

console.log("Пошук за назвою:", findById(items, "Ubuntu"));

console.log("Комбіновані фільтри:", applyFilters(items, {
  family: "Debian",
  sort: "release_year",
  direction: "asc"
}));

console.log("Статистика:", getStats(items));

console.log("Фільтр за стабільністю:", filterByStability(items, "LTS"));
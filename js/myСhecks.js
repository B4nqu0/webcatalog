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


function test(name, result) {
  if (result) {
    console.log(name + ": пройдено");
  } else {
    console.log(name + ": провалено");
  }
}


test("Фільтр за сімейством", filterByCategory(items, "Debian").length === 2);

test("Фільтр за роком", filterByRange(items, "release_year", 2000, 2010).length === 5);

test("Пошук Ubuntu", search(items, "Ubuntu").length === 1);

test("Сортування за назвою", sortBy(items, "name")[0].name === "Arch Linux");

test("Отримання сімейств", getCategories(items).length === 5);

test("Підрахунок за сімействами", countByCategory(items).Debian === 2);

test("Пошук за назвою", findById(items, "Ubuntu").name === "Ubuntu");

test("Комбіновані фільтри", applyFilters(items, { family: "Debian" }).length === 2);

test("Отримання статистики", getStats(items).count === 6);

test("Фільтр за стабільністю", filterByStability(items, "LTS").length === 1);


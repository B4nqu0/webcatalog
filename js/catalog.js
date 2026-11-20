export function filterByCategory(list, category) {
  if (!category) {
    return list;
  }

  return list.filter(item => item.family === category);
}

export function filterByRange(list, field, min, max) {
  return list.filter(item => item[field] >= min && item[field] <= max);
}

export function search(list, query) {
  const normalQuery = query.trim().toLowerCase();

  if (!normalQuery) {
    return list;
  }

  return list.filter(item => {
    return (
      item.name.toLowerCase().includes(normalQuery) ||
      item.family.toLowerCase().includes(normalQuery)
    );
  });
}

export function sortBy(list, field, direction = "asc") {
  const result = [...list];

  result.sort((a, b) => {
    if (a[field] < b[field]) {
      return direction === "desc" ? 1 : -1;
    }

    if (a[field] > b[field]) {
      return direction === "desc" ? -1 : 1;
    }

    return 0;
  });

  return result;
}

export function getCategories(list) {
  return [...new Set(list.map(item => item.family))].sort();
}

export function countByCategory(list) {
  const counts = {};

  list.forEach(item => {
    if (counts[item.family] === undefined) {
      counts[item.family] = 1;
    } else {
      counts[item.family]++;
    }
  });

  return counts;
}

export function findById(list, name) {
  return list.find(item => item.name === name);
}

export function applyFilters(list, options) {
  let result = list;

  if (options.family) {
    result = filterByCategory(result, options.family);
  }

  if (options.minYear !== undefined && options.maxYear !== undefined) {
    result = filterByRange(result, "release_year", options.minYear, options.maxYear);
  }

  if (options.query) {
    result = search(result, options.query);
  }

  if (options.sort) {
    result = sortBy(result, options.sort, options.direction);
  }

  return result;
}

export function getStats(list) {
  if (list.length === 0) {
    return null;
  }

  const years = list.map(item => item.release_year);

  let total = 0;

  years.forEach(year => {
    total += year;
  });

  return {
    count: list.length,
    oldestYear: Math.min(...years),
    newestYear: Math.max(...years),
    averageYear: Math.round(total / years.length)
  };
}

export function filterByStability(list, stability) {
  if (!stability) {
    return list;
  }

  return list.filter(item => item.stability.includes(stability));
}

// Завдання підвищеної складності
export function sortByMultiple(list) {
  const result = [...list];

  result.sort((a, b) => {
    if (a.family < b.family) return -1;
    if (a.family > b.family) return 1;

    return a.release_year - b.release_year;
  });

  return result;
}

export function validateItem(item) {
  const requiredFields = [
    "name",
    "family",
    "package_manager",
    "release_year",
    "desktop",
    "stability"
  ];

  const problems = [];

  requiredFields.forEach(field => {
    if (item[field] === undefined) {
      problems.push("Відсутнє поле: " + field);
    } else {
      if (item[field] === "") {
        problems.push("Відсутнє поле: " + field);
      }
    }
  });

  return problems;
}
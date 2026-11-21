export function createCard(item) {
  const article = document.createElement("article");
  article.dataset.id = item.name;

  const title = document.createElement("h3");
  title.textContent = item.name;

  const details = document.createElement("dl");

  const dt1 = document.createElement("dt");
  dt1.textContent = "Сімейство";

  const dd1 = document.createElement("dd");
  dd1.textContent = item.family;

  const dt2 = document.createElement("dt");
  dt2.textContent = "Пакетний менеджер";

  const dd2 = document.createElement("dd");
  dd2.textContent = item.package_manager;

  const dt3 = document.createElement("dt");
  dt3.textContent = "Перший випуск";

  const dd3 = document.createElement("dd");
  dd3.textContent = item.release_year;

  const dt4 = document.createElement("dt");
  dt4.textContent = "Робоче середовище";

  const dd4 = document.createElement("dd");
  dd4.textContent = item.desktop;

  details.append(dt1, dd1, dt2, dd2, dt3, dd3, dt4, dd4);

  const list = document.createElement("ul");

  const item1 = document.createElement("li");
  item1.textContent = item.stability;

  list.append(item1);

  const favoriteButton = document.createElement("button");
  favoriteButton.type = "button";
  favoriteButton.className = "favorite-button";
  favoriteButton.textContent = "Додати в обране";
  favoriteButton.setAttribute("aria-pressed", "false");

  const link = document.createElement("a");
  link.href = "item.html";
  link.textContent = "Переглянути інформацію про " + item.name;

  const linkContainer = document.createElement("p");
  linkContainer.append(link);

  article.append(title, details, list, favoriteButton, linkContainer);

  return article;
}

export function renderCards(list, container) {
  container.replaceChildren();

  list.forEach(item => {
    const card = createCard(item);
    container.append(card);
  });
}

export function renderEmpty(container, message) {
  container.replaceChildren();

  const text = document.createElement("p");
  text.textContent = message;

  container.append(text);
}

export function renderEmpty(container, message) {
  container.replaceChildren();

  const text = document.createElement("p");
  text.textContent = message;

  container.append(text);
}
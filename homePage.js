document.querySelectorAll("#sidebarToggle").forEach((btn) =>
  btn.addEventListener("click", () => {
    document.getElementById("sidebar").classList.toggle("active");
  })
);

document
  .getElementById("profileToggle")
  .addEventListener("click", function (e) {
    e.stopPropagation();
    document.getElementById("profileMenu").classList.toggle("active");
  });

document.getElementById("sortToggle").addEventListener("click", function (e) {
  e.stopPropagation();
  document.getElementById("sortMenu").classList.toggle("active");
  this.classList.toggle("open");
});

document.addEventListener("click", function () {
  document.getElementById("profileMenu").classList.remove("active");
  document.getElementById("sortMenu").classList.remove("active");
  document.getElementById("sortToggle").classList.remove("open");
});

function selectSortOption(optionText) {
  const sortMenu = document.getElementById("sortMenu");
  const sortToggle = document.getElementById("sortToggle");
  const sortLabel = document.getElementById("sortLabel");

  sortLabel.innerHTML =
    optionText +
    ' <span class="arrow">&#9650;</span> <i class="fas fa-filter"></i>';
  sortMenu.classList.remove("active");
  sortToggle.classList.remove("open");

  if (optionText === "Sort ascending") {
    sortCourses(true);
  } else if (optionText === "Sort descending") {
    sortCourses(false);
  }
}

function sortCourses(ascending = true) {
  const courseBox = document.querySelector(".courses-box");
  const courseCards = Array.from(document.querySelectorAll(".course-card"));

  courseCards.sort((a, b) => {
    const nameA = a.dataset.name.toLowerCase();
    const nameB = b.dataset.name.toLowerCase();

    if (nameA < nameB) return ascending ? -1 : 1;
    if (nameA > nameB) return ascending ? 1 : -1;
    return 0;
  });

  const searchBar = document.querySelector(".search-bar");
  courseCards.forEach((card) => {
    courseBox.appendChild(card); // Перемещает карточку в нужный порядок
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // Загрузить избранное из localStorage
  const savedFavorites = JSON.parse(
    localStorage.getItem("favoriteCourses") || "[]"
  );

  // Отметить избранные звезды
  document.querySelectorAll(".course-card").forEach((card) => {
    const courseName = card.querySelector("strong").textContent;
    const icon = card.querySelector(".star i");

    if (savedFavorites.includes(courseName)) {
      icon.classList.remove("far");
      icon.classList.add("fas");
    }
  });

  // Отсортировать курсы при загрузке
  sortFavoritesFirst();
});

function toggleFavorite(element) {
  const card = element.closest(".course-card");
  const icon = element.querySelector("i");
  const courseName = card.querySelector("strong").textContent;

  let favorites = JSON.parse(localStorage.getItem("favoriteCourses") || "[]");

  if (icon.classList.contains("far")) {
    icon.classList.remove("far");
    icon.classList.add("fas");
    favorites.push(courseName);
  } else {
    icon.classList.remove("fas");
    icon.classList.add("far");
    favorites = favorites.filter((name) => name !== courseName);
  }

  localStorage.setItem("favoriteCourses", JSON.stringify(favorites));
  sortFavoritesFirst();
}

function sortFavoritesFirst() {
  const favorites = JSON.parse(localStorage.getItem("favoriteCourses") || "[]");
  const container = document.querySelector(".courses-box");

  const cards = Array.from(container.querySelectorAll(".course-card"));

  cards.sort((a, b) => {
    const aName = a.querySelector("strong").textContent;
    const bName = b.querySelector("strong").textContent;

    const aFav = favorites.includes(aName) ? 1 : 0;
    const bFav = favorites.includes(bName) ? 1 : 0;

    return bFav - aFav; // избранные вверх
  });

  cards.forEach((card) => container.appendChild(card));
}

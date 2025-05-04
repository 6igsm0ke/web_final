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

  document
    .getElementById("sortToggle")
    .addEventListener("click", function (e) {
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
  }

  
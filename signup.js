document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // отменяет стандартное поведение

    const email = form.querySelector('input[type="email"]').value.trim();
    const password = form.querySelector('input[type="password"]').value.trim();

    if (email === "" || password === "") {
      alert("Please fill in both fields.");
      return;
    }

    window.location.href = "homePage.html";
  });
});

window.addEventListener("load", () => {
  const elements = document.querySelectorAll(".hidden");
  elements.forEach((el, i) => {
    setTimeout(() => {
      el.classList.add("show");
    }, i * 100); // небольшая задержка между логотипом и формой
  });
});

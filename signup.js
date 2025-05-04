document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
      event.preventDefault(); // отменяет стандартное поведение

      const email = form.querySelector('input[type="email"]').value.trim();
      const password = form.querySelector('input[type="password"]').value.trim();

      if (email === '' || password === '') {
        alert('Please fill in both fields.');
        return;
      }

      window.location.href = 'homePage.html';
    });
  });
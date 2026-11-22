const form = document.querySelector('.form');
const notice = document.querySelector('.notice');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  notice.textContent = form.dataset.notice;
});
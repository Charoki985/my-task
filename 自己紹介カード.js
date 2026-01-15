const button = document.getElementById('btn');
const message = document.querySelector('.message');

button.addEventListener('click', () => {
  message.textContent = 'よろしくお願いします！';
});
document.querySelector('.apply-button').addEventListener('click', (event) => {
  event.currentTarget.textContent = 'Apply queued';
  event.currentTarget.disabled = true;
});

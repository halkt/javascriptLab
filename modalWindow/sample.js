window.addEventListener('load', () => {
  const btn = document.querySelector('#btn');
  const modal = document.querySelector('#modal');
  const closeBtn = document.querySelector('#closeBtn');

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  })
  btn.addEventListener('click', () => {
    modal.style.display = 'block';
  })
});


document.getElementById('skills').addEventListener('mouseenter', function () {
  this.style.backgroundColor = '#e8f5e9';
});

document.getElementById('skills').addEventListener('mouseleave', function () {
  this.style.backgroundColor = 'transparent';
});

window.addEventListener('scroll', function () {
  let scrollButton = document.getElementById('scrollTop');
  if (window.scrollY > 300) {
      scrollButton.style.display = 'block';
  } else {
      scrollButton.style.display = 'none';
  }
});

document.getElementById('scrollTop')?.addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
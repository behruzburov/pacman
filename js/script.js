document.addEventListener('DOMContentLoaded', function() {
  const burgerMenu = document.querySelector('.burger');
  
  if (burgerMenu) {
    burgerMenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.classList.toggle('active');
    });
  }
});


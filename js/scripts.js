document.addEventListener('DOMContentLoaded', function() {
  const elements = document.querySelectorAll('.fade-in-left, .fade-in-up, .fade-in-right, .fade-in-down');

  function checkInView() {
      elements.forEach(element => {
          const rect = element.getBoundingClientRect();
          const isVisible = (rect.top <= window.innerHeight) && (rect.bottom >= 0);

          if (isVisible) {
              element.classList.add('visible');
          }
      });
  }

  // Initial check
  checkInView();

  // Listen for scroll events
  window.addEventListener('scroll', checkInView);
});
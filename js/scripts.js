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

// Check for dark mode
function checkDarkMode() {
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.querySelector('#website-logo').src = "images/directdiv-design-logo-light.svg";
    console.log('Dark mode is enabled.');
    } else {
    document.querySelector('#website-logo').src = "images/directdiv-design-logo-dark.svg";
    console.log('Dark mode is disabled.');
    }
}

// Run it once the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
checkDarkMode();

// Listen for changes in color scheme
    if (window.matchMedia) {
        const colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
        colorSchemeQuery.addEventListener('change', checkDarkMode);
    }
});

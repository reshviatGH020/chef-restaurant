const toggleBtn = document.getElementById('menuToggle');
const sidePanel = document.querySelector('.side-panel'); // renamed this properly

// Toggle panel open/close
toggleBtn.addEventListener('click', () => {
  sidePanel.classList.toggle('open');
});

// Close panel when clicking outside
document.addEventListener('click', (event) => {
  const isClickInside = sidePanel.contains(event.target) || toggleBtn.contains(event.target);
  if (!isClickInside) {
    sidePanel.classList.remove('open');
  }
});

sidePanel.addEventListener('click', (e) => {
  e.stopPropagation();
});



function toggleMenu(id) {
  const allMenus = document.querySelectorAll('.meal-table-container');

  allMenus.forEach(menu => {
    if (menu.id === id) {
      menu.classList.toggle('hidden'); // Only toggle the clicked one
    } else {
      menu.classList.add('hidden'); // Hide all others
    }
  });
}

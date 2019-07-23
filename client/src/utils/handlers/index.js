export const openDropdownMenu = () => (
  document.querySelector('.hamburgermenu').classList.add('open')
);

export const closeDropdownMenu = () => (
  document.querySelector('.hamburgermenu').classList.remove('open')
);

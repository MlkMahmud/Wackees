export const openDropdownMenu = () => (
  document.querySelector('.hamburgermenu').classList.add('open')
);

export const closeDropdownMenu = (e) => {
  const { tagName } = e.target;
  if (tagName === 'BUTTON' || tagName === 'A' || tagName === 'svg' || tagName === 'path') {
    document.querySelector('.hamburgermenu').classList.remove('open');
  }
};

export const changeHeaderBG = () => {
  const header = document.querySelector('.header');
  window.onscroll = () => {
    if (window.pageYOffset >= window.innerHeight * 0.20) {
      header.style.backgroundColor = '#fff';
      header.style.borderBottom = '2px solid black';
    } else {
      header.style.backgroundColor = 'transparent';
      header.style.borderBottom = 'none';
    }
  };
};

export const openShoppingCart = () => {
  document.querySelector('.cart').style.display = 'block';
};

export const closeShoppingCart = (e) => {
  const { tagName } = e.target;
  if (tagName === 'BUTTON' || tagName === 'svg' || tagName === 'path') {
    document.querySelector('.cart').style.display = 'none';
  }
};

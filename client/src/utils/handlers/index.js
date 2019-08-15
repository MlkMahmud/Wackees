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

export const closeCheckOutForm = () => {
  document.querySelector('.modal_bg').style.display = 'none';
  document.querySelector('.checkout_form').style.display = 'none';
};

export const openCheckOutForm = () => {
  document.querySelector('.modal_bg').style.display = 'block';
  document.querySelector('.checkout_form').style.display = 'block';
  document.querySelector('.cart').style.display = 'none';
};

export const closeMealForms = () => {
  document.querySelector('.modal_bg').style.display = 'none';
  document.querySelector('.new_meal_form').style.display = 'none';
  document.querySelector('.edit_meal_form').style.display = 'none';
};

export const openNewMealForm = () => {
  document.querySelector('.modal_bg').style.display = 'block';
  document.querySelector('.new_meal_form').style.display = 'block';
};

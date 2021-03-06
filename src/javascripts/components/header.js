import utils from '../helpers/utils';

const header = document.getElementById('header');

const sticky = header.offsetTop;

const makeStick = () => {
  if (window.pageYOffset > sticky) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
};

const createTitle = () => {
  const domString = '<h1>Nashville Black-Owned Restaurants</h1>';
  utils.printToDom('#title', domString);
};

const createHeader = () => {
  createTitle();
  makeStick();
  // app.toggleBtnState();
  window.onscroll = () => { makeStick(); };
};

export default { createHeader };

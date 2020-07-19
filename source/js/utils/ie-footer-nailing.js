const main = document.querySelector('main');
const header = document.querySelector('.header');
const footer = document.querySelector('.footer');

let headerH;
let footerH;
let mainHMin;

const ieFooterNailing = () => {
  if (!main || !(!!window.MSInputMethodContext && !!document.documentMode)) {
    return;
  }

  const mainHeight = () => {
    // eslint-disable-next-line no-unused-expressions
    header ? headerH = header.getBoundingClientRect().height : headerH = 0;
    // eslint-disable-next-line no-unused-expressions
    footer ? footerH = footer.getBoundingClientRect().height : footerH = 0;
    mainHMin = window.innerHeight;

    main.style.minHeight = mainHMin - (headerH + footerH) + 'px';
  };

  document.addEventListener('loadDOMContentLoaded', mainHeight());
  window.addEventListener('resize', mainHeight);
};

export {ieFooterNailing};

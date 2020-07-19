import {setupModal} from '../utils/modal';

const modalFeedback = document.querySelector('.modal--feedback');
const modalFeedbackBtn = document.querySelectorAll('[data-modal="feedback"]');
const modalSuccess = document.querySelector('.modal--success');
const modalSuccessBtns = document.querySelectorAll('[data-modal="success"]');

// аргументы setupModal(modal, closeCallback, modalBtns, openCallback, noPrevDefault)
// возможна инициализация только с первыми аргументом,
// если вам нужно открывать модалку в другом месте под какими-нибудь условиями
const initModals = () => {
  if (modalFeedback && modalFeedbackBtn.length) {
    setupModal(modalFeedback, false, modalFeedbackBtn, false, false);
  }
  if (modalSuccess && modalSuccessBtns.length) {
    setupModal(modalSuccess, false, modalSuccessBtns);
  }
};

export {initModals};

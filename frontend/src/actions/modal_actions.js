export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = (modal, algoId) => {
  console.log(modal);
  console.log(algoId);
  return {
    type: OPEN_MODAL,
    modalObj: {
      modal,
      algoId
    }
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};

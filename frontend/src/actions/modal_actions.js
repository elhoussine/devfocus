export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = (modal, algoId) => {
  return {
    type: OPEN_MODAL,
    modalObj: {
      modal,
      algoId
    }
  };
};

export const openContactModal = (modal, contactId) => {
  return {
    type: OPEN_MODAL,
    modalObj: {
      modal,
      contactId
    }
  }
}

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};

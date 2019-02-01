const popup = {
  namespaced: true,
  state: {
      showPopup: false,
      popupMessage: ''
  },
  mutations: {
    popupShow: (state, message) => {
      state.showPopup = true;
      state.popupMessage = message;
    },
    hidePopup: (state) => state.showPopup = false
  }
};

export default popup;
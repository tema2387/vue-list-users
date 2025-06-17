export default {
  namespaced: true,
  state: {
    popupUserAddOpen: false
  },
  mutations: {
    togglePopupUserAdd(state) {
      state.popupUserAddOpen = !state.popupUserAddOpen
    },
    closePopupUserAdd(state) {
      state.popupUserAddOpen = false
    }
  }
}

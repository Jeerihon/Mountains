const works = {
  namespaced: true,
  state: {
    works: [],
    existedWork: [],
    editMode: false,
    editItem: null,
    showPopup: false,
    popupMessage: ''
  },
  mutations: {
    addNewWork: (state, work) => state.works.push(work),
    fillUpWorks: (state, works) => state.works = works,
    setExistedWork: (state, work) => state.existedWork = work,
    toogleMode: (state) => state.editMode = !state.editMode,
    resetEditItem: (state) => state.editItem = null,
    setEditItem: (state, work) => state.editItem = work,
    editWork: (state, editedWork) =>
      (state.works = state.works.map(work => {
        return work.id === editedWork.id ? editedWork : work
      })),
    removeWork: (state, workToRemoveId) =>
      (state.works = state.works.filter(
        work => work.id !== workToRemoveId
      )),
    popupShow: (state, message) => {
      state.showPopup = true;
      state.popupMessage = message;
    },
    hidePopup: (state) => state.showPopup = false
  },
  actions: {
    fetch({commit}) {
      this.$axios.get('/works/91').then(response => {
        commit('fillUpWorks', response.data)
      })
    },
    add({commit}, work) {
      const formData = new FormData();

      Object.keys(work).forEach(key => {
        const value = work[key];
        formData.append(key, value);
      });

      this.$axios.post('/works', formData).then(response => {
        commit('addNewWork', response.data);
        commit('popupShow', response.data.message);
      })
    },
    edit({commit}, work) {
      const formData = new FormData();

      Object.keys(work).forEach(key => {
        const value = work[key];
        formData.append(key, value);
      });

      this.$axios.post(`/works/${work.id}`, formData).then(response => {
        commit('editWork', response.data.work);
        commit('popupShow', response.data.message);
          return response
        }
      ).catch(error => {
        throw error
      });
    },
    getExistedWork({commit}, work) {
      commit('setExistedWork', work)
    },
    tooglingMode({commit}) {
      commit('toogleMode')
    },
    resetEditItem({commit}) {
      commit('resetEditItem')
    },
    setEditItem({commit}, work) {
      commit('setEditItem', work)
    },
    remove({ commit }, workId) {
      this.$axios.delete(`/works/${workId}`).then(response => {
        commit('removeWork', workId);
        commit('popupShow', response.data.message);
      })
    }
  }
};

export default works;
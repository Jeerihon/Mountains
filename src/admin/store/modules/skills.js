const skills = {
  namespaced: true,
  actions: {
    add(store, payload) {
      this.$axios.post('/skills', payload).then(
        response => {
          console.log(response);
        },
        error => {
          console.error(error);
        }
      );
    }
  }
};

export default skills;
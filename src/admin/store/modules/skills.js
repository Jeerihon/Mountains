const skills = {
  namespaced: true,
  state: {
    skills: []
  },
  mutations: {
    fillUpSkills: (state, skills) => state.skills = skills,
    addNewSkill: (state, newSkill) => state.skills.push(newSkill)
  },
  data () {
    return {
      userId: ''
    }
  },
  actions: {
    fetch({commit}) {
      this.$axios.get('/skills/91').then(response => {
        commit('fillUpSkills', response.data)
      })
    },
    add({ commit }, payload) {
      this.$axios.post('/skills', payload).then(
        response => {
          commit('addNewSkill', response.data)
        },
        error => {
          console.error(error);
        }
      );
    }
  }
};

export default skills;
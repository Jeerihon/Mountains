const skills = {
  namespaced: true,
  state: {
    skills: []
  },
  mutations: {
    fillUpSkills: (state, skills) => state.skills = skills,
    addNewSkill: (state, newSkill) => state.skills.push(newSkill),
    removeSkill: (state, skillToRemoveId) =>
      (state.skills = state.skills.filter(
        skill => skill.id !== skillToRemoveId
      ))
  },
  data () {
    return {
      userId: ''
    }
  },
  actions: {
    fetch({ commit }, user_id) {
      this.$axios.get(`/skills/${user_id}`).then(response => {
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
    },
    remove({ commit }, skillId) {
      this.$axios.delete(`/skills/${skillId}`).then(response => {
        commit('removeSkill', skillId)
      })
    }
  }
};

export default skills;
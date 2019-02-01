const skills = {
  namespaced: true,
  state: {
    skills: [],
    showPopup: false,
    popupMessage: ''
  },
  mutations: {
    fillUpSkills: (state, skills) => state.skills = skills,
    addNewSkill: (state, newSkill) => state.skills.push(newSkill),
    removeSkill: (state, skillToRemoveId) =>
      (state.skills = state.skills.filter(
        skill => skill.id !== skillToRemoveId
      )),
    editSkill: (state, editedSkill) =>
      (state.skills = state.skills.map(skill => {
        return skill.id === editedSkill.id ? editedSkill : skill
      })),
    popupShow: (state, message) => {
      state.showPopup = true;
      state.popupMessage = message;
    },
    hidePopup: (state) => state.showPopup = false
  },
  data() {
    return {
      userId: ''
    }
  },
  actions: {
    fetch({commit}) {
      this.$axios.get(`/skills/91`).then(response => {
        commit('fillUpSkills', response.data)
      })
    },
    add({commit}, payload) {
      return this.$axios.post('/skills', payload).then(
        response => {
          commit('addNewSkill', response.data);
          commit('popupShow', "Запись добавлена");
          return response
        }
      ).catch(error => {
        commit('popupShow', "Что-то пошло не так");
        throw error
      });
    },
    edit({commit}, skill) {
      const formData = new FormData();

      Object.keys(skill).forEach(key => {
        const value = skill[key];
        formData.append(key, value);
      });

      this.$axios.post(`/skills/${skill.id}`, formData).then(response => {
          commit('editSkill', response.data.skill);
          commit('popupShow', response.data.message);
          return response
        }
      ).catch(error => {
        throw error
      });
    },
    remove({commit}, skillId) {
      this.$axios.delete(`/skills/${skillId}`).then(response => {
        commit('removeSkill', skillId);
        commit('popupShow', response.data.message);
      })
    },
    hide({commit}) {
      commit('hidePopup')
    }
  }
};

export default skills;
const posts = {
  namespaced: true,
  state: {
    posts: [],
    existedPost: [],
    editMode: false,
    editItem: null
  },
  mutations: {
    addNewPost: (state, post) => state.posts.push(post),
    fillUpPosts: (state, posts) => state.posts = posts,
    setExistedPost: (state, post) => state.existedpost = post,
    toogleMode: (state) => state.editMode = !state.editMode,
    resetEditItem: (state) => state.editItem = null,
    setEditItem: (state, post) => state.editItem = post,
    editPost: (state, editedPost) =>
      (state.posts = state.posts.map(post => {
        return post.id === editedPost.id ? editedPost : post
      })),
    removePost: (state, postToRemoveId) =>
      (state.posts = state.posts.filter(
        post => post.id !== postToRemoveId
      ))
  },
  actions: {
    add({commit}, post) {
      const formData = new FormData();

      Object.keys(post).forEach(key => {
        const value = post[key];
        formData.append(key, value);
      });

      this.$axios.post('/posts', formData).then(response => {
        commit('addNewPost', response.data)
      })
    },
    fetch({commit}) {
      this.$axios.get('/posts/91').then(response => {
        commit('fillUpPosts', response.data)
      })
    },
    edit({commit}, post) {
      const formData = new FormData();

      Object.keys(post).forEach(key => {
        const value = post[key];
        formData.append(key, value);
      });

      this.$axios.post(`/posts/${post.id}`, formData).then(response => {
          commit('editPost', response.data.post);
          return response
        }
      ).catch(error => {
        throw error
      });
    },
    getExistedPost({commit}, post) {
      commit('setExistedPost', post)
    },
    tooglingMode({commit}) {
      commit('toogleMode')
    },
    resetEditItem({commit}) {
      commit('resetEditItem')
    },
    setEditItem({commit}, post) {
      commit('setEditItem', post)
    },
    remove({ commit }, postId) {
      this.$axios.delete(`/posts/${postId}`).then(response => {
        commit('removePost', postId)
      })
    }
  }
};

export default posts;
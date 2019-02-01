const posts = {
  namespaced: true,
  state: {
    posts: [],
    existedPost: [],
    editMode: false,
    editItem: null,
    postDate: '',
    showPopup: false,
    popupMessage: ''
  },
  mutations: {
    addNewPost: (state, post) => state.posts.push(post),
    fillUpPosts: (state, posts) => state.posts = posts,
    setExistedPost: (state, post) => state.existedPost = post,
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
      )),
    setPostDate: (state, date) => state.postDate = date,
    popupShow: (state, message) => {
      state.showPopup = true;
      state.popupMessage = message;
    },
    hidePopup: (state) => state.showPopup = false
  },
  actions: {
    fetch({commit}) {
      this.$axios.get('/posts/91').then(response => {
        commit('fillUpPosts', response.data)
      })
    },
    add({commit}, post) {
      const formData = new FormData();

      formData.append("id", post.id);
      formData.append("title", post.title);
      formData.append("content", post.content);

      //Конвертируем дату
      let date = new Date(post.date);
      let year = date.getFullYear();
      let month = ("0" + (date.getMonth() + 1)).slice(-2);
      let day = ("0" + date.getDate()).slice(-2);

      const editedDate = `${day}/${month}/${year}`;

      formData.append("date", editedDate);

      this.$axios.post('/posts', formData).then(response => {
        commit('addNewPost', response.data);
        commit('popupShow', response.data.message);
      })
    },
    edit({commit}, post) {
      const formData = new FormData();

      formData.append("id", post.id);
      formData.append("title", post.title);
      formData.append("content", post.content);

      //Конвертируем дату
      let date = new Date(post.date);
      let year = date.getFullYear();
      let month = ("0" + (date.getMonth() + 1)).slice(-2);
      let day = ("0" + date.getDate()).slice(-2);

      const editedDate = `${day}/${month}/${year}`;

      formData.append("date", editedDate);


      this.$axios.post(`/posts/${post.id}`, formData).then(response => {
          commit('editPost', response.data.post);
          commit('setEditItem', response.data.post);
          commit('popupShow', response.data.message);
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
    remove({commit}, postId) {
      this.$axios.delete(`/posts/${postId}`).then(response => {
        commit('removePost', postId);
        commit('popupShow', response.data.message);
      })
    }
  }
};

export default posts;
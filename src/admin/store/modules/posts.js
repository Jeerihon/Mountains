const posts = {
  namespaced: true,
  state: {
    posts: [],
    existedPost: [],
    editMode: false,
    editItem: null,
    postDate: ''
  },
  mutations: {
    addNewPost: (state, post) => state.posts.push(post),
    fillUpPosts: (state, posts) => state.posts = posts,
    setExistedPost: (state, post) => state.existedPost = post,
    toogleMode: (state) => state.editMode = !state.editMode,
    resetEditItem: (state) => state.editItem = null,
    setEditItem: (state, post) => state.editItem = post.date,
    editPost: (state, editedPost) =>
      (state.posts = state.posts.map(post => {
        return post.id === editedPost.id ? editedPost : post
      })),
    removePost: (state, postToRemoveId) =>
      (state.posts = state.posts.filter(
        post => post.id !== postToRemoveId
      )),
    setPostDate: (state, date) => state.postDate = date
  },
  actions: {
    add({commit}, post) {
      const formData = new FormData();

      formData.append("id", post.id);
      formData.append("title", post.title);
      formData.append("content", post.content);

          //Конвертируем дату
      let d = new Date(post.date);
      let dd = d.getDate();
      let mm = d.getMonth();
      mm++;
      let yy = d.getFullYear();

      if (dd < 10 ) {
        dd = "0" + dd
      }
      if (mm < 10) {
        mm = '0' + mm;
      }

      const editedData = `${dd}/${mm}/${yy}`;

      formData.append("date", editedData);

      //     let parseDate = new Date(post.date * 1000);
      //     let year = parseDate.getFullYear();
      //     let month = parseDate.getMonth() + 1;
      //     let day = parseDate.getDate();
      //     month = month < 10 ? `0${month}` : month;
      //     console.log(`${month}/${day}/${year}`);
      //
      //     const value = `${month}/${day}/${year}`;
      //
      // formData.append("date", value);


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
          commit('setEditItem', response.data.post);
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
        commit('removePost', postId)
      })
    }
  }
};

export default posts;
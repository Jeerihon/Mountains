const user = {
  state: {
    isAuth: false
  },
  mutation: {
    authorize: (state) => state.isAuth = false,
    unAuthorize: (state) => state.isAuth = true
  }
};

export default user;
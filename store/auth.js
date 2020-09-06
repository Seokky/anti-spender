const state = () => ({
  user: {},
  isAuthenticated: false
})

const actions = {
  login(context) {
    const provider = new this.$fireAuthObj.GoogleAuthProvider();

    this.$fireAuthObj().signInWithPopup(provider)
      .then((result) => {
        const user = {
          uid: result.user.uid,
          email: result.user.email,
          name: result.user.displayName,
          picture: result.user.photoURL,
          accessToken: result.credential.accessToken,
          refreshToken: result.user.refreshToken
        }
        context.commit('setUser', user)
        context.commit('setIsAuthenticated', true)
      })
      .catch(function(error) {
        console.log(error)
      });
  },
  logout(context) {
    context.commit('setUser', {})
    context.commit('setIsAuthenticated', false)
  }
}

const mutations = {
  setUser(state, payload) {
    Object.assign(state.user, payload)
  },
  setIsAuthenticated(state, payload) {
    state.isAuthenticated = payload
  }
}

export { state, actions, mutations }
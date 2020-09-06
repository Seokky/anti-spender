export default {
  verifyToken: async (apiProvider) => {
    const token = localStorage.getItem('auth._token.google').split(' ')[1]
    const res = await apiProvider.$get(`/api/verify/${token}`)

    return res
  }
}
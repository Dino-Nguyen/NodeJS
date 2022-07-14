const checkLogin = () => {
    return false
}
const authMdw = (req, res, next) => {
      const auth = true
      if (auth) {
        next();
      }
}
module.exports = authMdw 
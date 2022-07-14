const checkLogin = () => {
    return false
}
const authMdw = (req, res, next) => {
      const auth = false
      if (auth) {
        next();
      }
      else {
        res.send('plz login')
      }
}
module.exports = authMdw 
const checkLogin = () => {
    return false
}
const authMdw = (req, res, next) => {
      // const auth = true
      const authUser = {username: "E"}
      if (authUser) {
        req.authUser = authUser
        next();
      }
      else {
        res.send('plz login')
      }
}
module.exports = authMdw 
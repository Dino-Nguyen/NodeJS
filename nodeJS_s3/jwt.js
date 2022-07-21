const jwt = require("jsonwebtoken")
const authMdw = (req, res , next) => {
 const token = req.header.authorization
 const jwtStr = token.split(" ")[1]
 jwt.verify(jwtStr, "KEY", (err, decoded) => {
    if(err) {
  res.status(401).send(err.message)
    } else {
        req.username = decoded.username
        next()
    }
 })
}

module.exports = authMdw
const express = require("express")
const jwt = require("jsonwebtoken")
const router = express.Router()

const teachers = [
    {
        name: 'A',
    },
    {
        name: 'B',
    },
    {
        name: 'C',
    },
]

router.get("/", (req, res) =>{
  const token = req.header.authorization
  const jwtStr = token.split(" ")[1]
 jwt.verify(jwtStr, "KEY", (err, decoded) => {
  if (!err) {
    console.log(decoded)
    res.json(teachers)
  } else {
    console.log(err)
    res.status(401).send(err.message)
  }
 })
   
})

module.exports = router
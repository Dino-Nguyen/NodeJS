const express = require("express")
const jwt = require("jsonwebtoken")
const router = express.Router()
const authMdw = require("./auth")
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

router.get("/",authMdw, (req, res) =>{
  res.json(teachers)
   
})

router.post('/',(req, res)=> {

})

module.exports = router
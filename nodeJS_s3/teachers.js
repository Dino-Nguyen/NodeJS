const express = require("express")
const jwt = require("jsonwebtoken")
const router = express.Router()
const authMdw = require("./auth")
const teachers = [
    {
        name: 'A',
        username: 'A'
    },
    {
        name: 'B',
        username: 'B'
    },
    {
        name: 'C',
        username: 'C'
    },
]

router.get("/",authMdw, (req, res) =>{
  res.json(teachers)
   
})

router.get('./:username', authMdw, (req, res)=>{
    if(req.params.username != req.username) {
    res.status(403).send('denied')
    } else {
        res.send(teachers.find((t) => t.username === t.params.username))
    }
})

router.post('/',(req, res)=> {

})

module.exports = router
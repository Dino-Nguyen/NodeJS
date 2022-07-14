const express = require("express")
const router = express.Router();
// const logging = require('./logger')
const authMdw = require('./auth')
const students = [
    {id: 1, name:"A", classID: 'a'},
    {id: 2, name:"B", classID: 'a'},
    {id: 4, name:"D", classID: 'b'},
]
router.get('/', authMdw, (req, res) => {
    // logging()
    // if (checkLogin()) {

        res.json(students.filter((s) => {
            if (req.query.classID && s.classID !== req.query.classID) {
                return false
            }
            if (req.query.id && s.id !== +req.query.id) {
                    return false
            }
            return true
           }
    
  
   ))
// }
//    else {
//     res.send('plz login')
//    }
})
router.get('/:id', (req, res) => {
console.log(req.params)

const student = students.find((s) => s.id === +req.params.id)
res.json(student)
})
router.post('/', (req, res) => {
    students.push({
        id :3, 
        name: "C"
    })
    res.send('ok')
})
router.delete("/:id", (req, res) => {
    students.splice(2, 1)
    res.send('delete 2')
})

module.exports = router
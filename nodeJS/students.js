const express = require("express")
const router = express.Router();
const students = [
    {id: 1, name:"A", classID: 'a'},
    {id: 2, name:"B", classID: 'a'},
    {id: 4, name:"D", classID: 'b'},
]
router.get('/', (req, res) => {
   res.json(students.filter((s) => s.classID === req.query.classID))
})
router.get('/:id/:classID', (req, res) => {

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
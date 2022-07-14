const express = require("express")
const router = express.Router();
const students = [
    {id: 1, name:"A"},
    {id: 2, name:"B"},
]
router.get('/', (req, res) => {
   res.json(students)
})
router.post('/add', (req, res) => {
    students.push({
        id :3, 
        name: "C"
    })
    res.send('ok')
})
router.delete("/", (req, res) => {
    students.splice(2, 1)
    res.send('delete 2')
})

module.exports = router
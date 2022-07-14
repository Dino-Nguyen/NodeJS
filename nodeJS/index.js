console.log('hello')
const express = require("express")
const studentsRouter = require("./students")
const teachersRouter = require("./teachers")
const app = express()

app.get("/", (req, res) => {
      res.send("hello 2")
})

app.use("/students", studentsRouter)
app.use("/teachers", teachersRouter)
// app.get('/students', (req, res) => {
//     res.json(students)
// })
// app.get("/students/add", (req, res) => {
//    students.push({
//     id: 3,
//     name: "C",
//    })
//    res.send("ok")
// })

app.listen(5001, () => {
    console.log('app is running at 5001')
})

const express = require("express")
const studentsRouter = require("./students")
const teachersRouter = require("./teachers")
const loggerMdw = require('./logger')
const authMdw = require("./auth")
const app = express()

app.use(loggerMdw)

app.get("/", (req, res) => {
    // logging();
      res.send("hello s2")
})

app.use("/students",authMdw, studentsRouter)
app.use("/teachers",authMdw, teachersRouter)
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
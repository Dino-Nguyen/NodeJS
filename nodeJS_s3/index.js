
const express = require("express")
const authRouter = require("./auth")
const teacherRouter = require("./teachers")


const app = express()

app.use(express.json())

app.get("/hello", (req, res)=> {
       res.send("chao")
})

app.use("/auth", authRouter)
app.use("/teachers", teacherRouter)

app.listen(5001, () => {
    console.log('app is running at 5001')
})
const express = require("express")
const {connectToDb} = require("./db")
const studentRouter = require("./student")

const app = express()
connectToDb()
app.use(express.json())
app.use("/student", studentRouter)


app.listen(5001,()=>{
 console.log ("app is running")
})
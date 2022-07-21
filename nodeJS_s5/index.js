const express = require("express")
const {connectToDb} = require("./db")

const app = express()
connectToDb()



app.listen(5001,()=>{
 console.log ("app is running")
})
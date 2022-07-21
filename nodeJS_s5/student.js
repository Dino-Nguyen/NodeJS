const express = require("express")
const studentRouter = express.Router()
const {db} = require('./db')

studentRouter.get("/", (req, res) => {})
studentRouter.get("/:id", (req, res) => {})
studentRouter.post("/", (req, res) => {
    const student ={
        name: req.body.name,
        gender : req.body.gender,
        dob : new Date(req.body.dob),
    }
    db.student.insertOne(student)
    
})
studentRouter.put("/:id", (req, res) => {})
studentRouter.delete("/:id", (req, res) => {})

module.exports = studentRouter
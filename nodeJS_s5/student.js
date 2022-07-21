const express = require("express")
const {ObjectId} = require("mongodb")
const studentRouter = express.Router()
const {db} = require('./db')

studentRouter.get("/", async(req, res) => {
    const student = await db.student.find().toArray()
    res.json(student)
})
studentRouter.get("/:id", async (req, res) => {
    const id = req.params.id
    const student =await db.student.findOne({
        _id: ObjectId(id),
    })
    //.toArray()
    res.json(student)
})
studentRouter.post("/", async (req, res) => {
    const student ={
        name: req.body.name,
        gender : req.body.gender,
        dob : new Date(req.body.dob),
    }
  const result = await db.student.insertOne(student)
    console.log(result)
    res.json({
        _id : result.insertedId,
        student : student
    })
})
studentRouter.put("/:id", (req, res) => {})
studentRouter.delete("/:id", (req, res) => {})

module.exports = studentRouter
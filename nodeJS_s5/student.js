const express = require("express")
const {ObjectId} = require("mongodb")
const studentRouter = express.Router()
const {db} = require('./db')

studentRouter.get("/", async(req, res) => {
    const filter = {}
    if (req.query.gender) {
           filter.gender = req.query.gender
    }
    const student = await db.student
    .find(filter)
    .skip(Number(req.query.skip))
    .limit(Number(req.query.limit))
    .toArray()
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
studentRouter.put("/:id", async (req, res) => {
    const id = req.params.id
    const result = await db.student.updateOne({
        _id: ObjectId(id)
    },{
        $set: {
            name: req.body.name,
            gender: req.body.gender,
            dob: new Date(req.body.dob)
        },
        // $push : {
        //    tag : "red"
        // },
        $pull: {
            tag : "red"
        },
        $currentDate: {
            lastModified: true,
        }
    })
    res.json(result)
})
studentRouter.delete("/:id", async(req, res) => {
 const id = req.params.id
 const result = await db.student.deleteOne({
    _id: ObjectId(id)
 })
 res.json({
    deletedId : id,
 })
})

module.exports = studentRouter
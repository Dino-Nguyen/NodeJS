const {MongoClient} = require("mongodb")

const db ={}
const connectToDb = () => {
  const client = new MongoClient("mongodb://localhost:27017")
  client.connect( () => {
    console.log("db connected")
    const database = client.db("mindx")
    db.student = database.collection("stu")
    db.teacher = database.collection("teacher")
  })
}

module.exports = {connectToDb, db}
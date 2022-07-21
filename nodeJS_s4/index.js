const express = require("express")
const {MongoClient} = require("mongodb")
const url = "mongodb://localhost:27017"
const dbClient = new MongoClient(url)
dbClient.connect(async() => {
    console.log("DB connected")
    const db = dbClient.db('mindx')
    // db.collection("mindx").insertOne({
    //     name: 'A',
    //     age:20,
    //     address: "SG"
    // })
    // db.collection("mindx").insertMany([
    //     {
    //         name: 'A',
    //         age:20,
    //         address: "SG"
    //     },
    //     {
    //         name: 'A',
    //         age:20,
    //         address: "SG"
    //     },
    //     {
    //         name: 'A',
    //         age:20,
    //         address: "SG"
    //     }
    // ])

   const items = await db.collection("mindx").find({
    age : {$gt : 21}
   }).toArray()
   console.log(items)
})
const app = express()

app.listen(5001, () => {
    console.log("app is running")
})
const express = require("express")
const {MongoClient} = require("mongodb")
const url = "mongodb://localhost:27017"
const dbClient = new MongoClient(url)
dbClient.connect(() => {
    console.log("DB connected")
})

const app = express()

app.listen(5001, () => {
    console.log("app is running")
})
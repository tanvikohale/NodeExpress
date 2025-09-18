import express from "express"
import data from "./script.js"
import {data1, data2} from "./script3.js"
import num1 from "./script2.js"



let port = 3001;
let server = express()

console.log(data)
console.log(data1 , data2)
console.log(num1)

server.get("/", (req,res) => {
    res.send("Server is runnig out")
})

server.listen(port, () => {
    console.log("Express server running of http://localhost:3001")
})
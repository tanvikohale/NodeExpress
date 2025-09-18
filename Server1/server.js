import express from "express";

let server = express();
let port = 3000;

server.get("/",(req , res) => {
    res.send("Hello from express server !")
})

server.listen(3000, () => {
    console.log("Express server running of http://localhost:3000")
})
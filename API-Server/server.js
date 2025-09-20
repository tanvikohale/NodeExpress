import express, { urlencoded } from "express"
import dotenv from "dotenv"
import {router} from "./Router/router.js"


dotenv.config({path: "./config.env"})
let server = express()
let port = process.env.PORT

server.use(express.urlencoded({extended: true}))

server.use(express.static("public"))
 server.use(router)
server.use("/api", router)

server.use((req, res) =>{
    console.log("Someone is trying to access a 404 route !")
    res.status(404).json({message: "content not found !"})
})

server.listen(port , () =>{
     console.log(`server is running on port ${port} || http://localhost:${port}`)
})
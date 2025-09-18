import express from "express"
import dotenv from "dotenv"
import ejs from "ejs"
import router from "./Routers/router.js"

dotenv.config({path: "./config.env"})
let server = express()
let port = process.env.PORT

server.use(express.static("Public"))

server.set("view engine", "ejs")

server.use(router)

server.listen(port ,() => {
    console.log(`server is running on port ${port} || http://localhost:${port}`)
})
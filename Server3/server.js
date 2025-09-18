import express from "express"
import dotenv from "dotenv"
import router from "./Routers/router.js"

dotenv.config({path: "./config.env"})
let server = express()
let port = process.env.PORT || 3002

server.use(router)

server.listen(port, () => {
    console.log(`Express server running of http://localhost:${port}`)
})
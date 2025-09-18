import express from "express";
import { GetAnotherRoute, GetHome } from "../Controllers/controllers.js";

let router = express.Router()

router.get("/", GetHome)

router.get("/another route", GetAnotherRoute)

export default router
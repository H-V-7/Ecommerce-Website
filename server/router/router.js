import express from "express"


//importign router controller

import { userSignUp } from "../controller/userController.js";

const router = express.Router();

router.post("/signup",userSignUp);

export default router;


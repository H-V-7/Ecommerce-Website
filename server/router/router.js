import express from "express"


//importign router controller

import { userSignUp,userLogin } from "../controller/userController.js";
import { getProductById, getProducts } from "../controller/productController.js";
const router = express.Router();

router.post("/login",userLogin)
router.post("/signup",userSignUp);

router.get("/products",getProducts)
router.get("/product/:id",getProductById)
export default router;


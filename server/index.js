import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import { Connection } from "./database/db.js";
import { defaultData } from "./default.js";

//importing routes

import router from "./router/router.js"; 

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


dotenv.config()


app.use(cors());


const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;



app.use("/",router);

app.listen(3001,() => {
    console.log("Server Started On 3001");
})

await Connection(USERNAME,PASSWORD);


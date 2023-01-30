import express from "express";
import dotenv from "dotenv";
import { Connection } from "./database/db.js";
import { deaultData } from "./default.js";

const app = express();
dotenv.config()

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;




app.listen(3001,() => {
    console.log("Server Started On 3001");
})

await Connection(USERNAME,PASSWORD);

deaultData();
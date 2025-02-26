import express from "express";
import cors from "cors";
import "dotenv/config";

//define the port
const port = process.env.PORT ?? 5050;

//create an express "instance"
const app = express();

//enable CORS
app.use(cors());


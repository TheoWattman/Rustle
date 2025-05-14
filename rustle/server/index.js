import { config } from "./config.js";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors);
app.use(express.json());

app.listen(config.port, () => {
    console.log("Running on port: " + config.port);
})
import { config } from "./config.js";
import express from "express";
import cors from "cors";

import validateGuessRoute from "./routes/validateGuess.js";
import itemsRoute from "./routes/items.js";

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use("/validateGuess", validateGuessRoute);
app.use("/items", itemsRoute);

app.listen(config.port, () => {
    console.log("Running on port: " + config.port);
})
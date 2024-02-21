import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 9291;
import router from "./routes.js";
import databaseConnection from "./src/helper/databaseConnection.js";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
router(app);
// databaseConnection

app.listen(PORT, () => {
  console.log("Server runninng on port", PORT);
});

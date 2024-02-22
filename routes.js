import express from "express";
import authenticateApiHandler from "./src/controllers/authentications/apiHandler.js";

const router = (app) => {
  app.use(express.json());
  app.use("/api/account", authenticateApiHandler);
};

export default router;

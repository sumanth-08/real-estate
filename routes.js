import express from "express";
import authenticateApiHandler from "./src/controllers/authentications/apiHandler.js";
import adminApiHandler from './src/controllers/Admin/apiHandler.js'

const router = (app) => {
  app.use(express.json());
  app.use("/api/account", authenticateApiHandler);
  app.use("/api/admin", adminApiHandler);
};

export default router;

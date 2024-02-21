import express from "express";

const router = (app) => {
  app.use(express.json());
};

export default router;
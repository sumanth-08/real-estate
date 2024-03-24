import { Router } from "express";
import bookMyProperty from "./bookMyProperties.js";
const router = Router();

router.use("/bookings/add", bookMyProperty);

export default router;

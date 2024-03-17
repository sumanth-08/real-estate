import { Router } from "express";
import postProperties from "./postProperties.js";
const router = Router();

router.use("/manage/post", postProperties);

export default router;

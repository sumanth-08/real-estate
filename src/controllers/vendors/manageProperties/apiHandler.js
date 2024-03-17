import { Router } from "express";
import postProperties from "./postProperties.js";
import myProperties from "./listProperties.js";
const router = Router();

router.use("/manage/post", postProperties);
router.use("/my/properties", myProperties);

export default router;

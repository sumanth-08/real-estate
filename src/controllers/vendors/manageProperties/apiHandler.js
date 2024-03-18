import { Router } from "express";
import postProperties from "./postProperties.js";
import myProperties from "./listProperties.js";
import deleteProperties from "./deleteProperties.js";
const router = Router();

router.use("/manage/post", postProperties);
router.use("/my/properties", myProperties);
router.use("/manage/delete", deleteProperties);

export default router;

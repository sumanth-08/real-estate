import { Router } from "express";
import postProperties from "./postProperties.js";
import myProperties from "./listProperties.js";
import deleteProperties from "./deleteProperties.js";
import particularProperty from "./particularProperty.js";
const router = Router();

router.use("/manage/post", postProperties);
router.use("/manage/list", myProperties);
router.use("/manage/delete", deleteProperties);
router.use("/manage/list/particular", particularProperty);

export default router;

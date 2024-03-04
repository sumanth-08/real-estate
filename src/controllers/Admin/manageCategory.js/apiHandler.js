import { Router } from "express";
import addCat from "./addCategories.js";
import listCat from "./listCategories.js";
const router = Router();

router.use("/manage/add", addCat);
router.use("/manage/list", listCat);

export default router;
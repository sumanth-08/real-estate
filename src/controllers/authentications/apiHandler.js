import { Router } from "express";
import signUp from "./signUp.js";
import signin from "./signin.js";
const router = Router();

router.use("/signup", signUp);
router.use("/signin", signin);

export default router;

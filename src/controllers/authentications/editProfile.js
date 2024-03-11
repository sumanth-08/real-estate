import { Router } from "express";
import { send, setErrorResponseMsg } from "../../helper/responseHelper.js";
import RESPONSE from "../../configs/global.js";
import accountsModel from "../../models/accountsModel.js";
import bcrypt from "bcrypt";
import constants from "../../configs/constants.js";
import jwtTokenCreation from "../../middlewares/jwtTokenCreation.js";
import authenticate from "../../middlewares/authenticate.js";
const router = Router();

router.put("/", authenticate, async (req, res) => {
  try {
    // console.log(req.user.id);
    const { name, email, phone } = req.body;
    const updates = {};

    if (name || name != "") updates.name = name;
    if (email || email != "") updates.email = email;
    if (phone || phone != "") updates.phone = phone;

    return send(res, RESPONSE.SUCCESS);
  } catch (err) {
    console.log(err.message);
    return send(res, RESPONSE.UNKNOWN_ERROR);
  }
});

export default router;

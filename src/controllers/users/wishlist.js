import { Router } from "express";
import RESPONSE from "../../configs/global.js";
import { send, setErrorResponseMsg } from "../../helper/responseHelper.js";
import authenticate from "../../middlewares/authenticate.js";
import wishlist from "../../models/wishlistModel.js";
import constants from "../../configs/constants.js";
const router = Router();

router.post("/", authenticate, async (req, res) => {
  try {
    if (req.user.role != constants.ROLE.CUSTOMER) {
      return send(res, RESPONSE.NO_ACCESS);
    }
    const { property_id } = req.body;

    if (!property_id || property_id == "") {
      const updatedResponse = setErrorResponseMsg(
        RESPONSE.REQUIRED_PARAMS,
        "Property id"
      );
      return send(res, updatedResponse);
    }

    await wishlist.create({
      user_id: req.user.id,
      property_id: property_id,
    });

    return send(res, RESPONSE.SUCCESS);
  } catch (err) {
    return send(res, RESPONSE.UNKNOWN_ERROR);
  }
});

export default router;

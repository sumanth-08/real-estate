import { Router } from "express";
import { send, setErrorResponseMsg } from "../../helper/responseHelper.js";
import RESPONSE from "../../configs/global.js";
import authenticate from "../../middlewares/authenticate.js";
import constants from "../../configs/constants.js";
import propertyModel from "../../models/propertyModel.js";
import moments from "moment";
const router = Router();

router.put("/:id", authenticate, async (req, res) => {
  try {
    if (req.user.role != constants.ROLE.VENDOR) {
      return send(res, RESPONSE.NO_ACCESS);
    }
    const prop_status = parseInt(req.body.prop_status);

    const updates = {};
    const id = req.params.id;

    // if (prop_status || prop_status < 5) updates.prop_status = prop_status;
    if (typeof prop_status !== "undefined" && !isNaN(parseInt(prop_status)))
      updates.prop_status = prop_status;

    await propertyModel.updateOne({ _id: id }, [{ $set: updates }]);

    return send(res, RESPONSE.SUCCESS);
  } catch (err) {
    console.log(err.message);
    return send(res, RESPONSE.UNKNOWN_ERROR);
  }
});

export default router;

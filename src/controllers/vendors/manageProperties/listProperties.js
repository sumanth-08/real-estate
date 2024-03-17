import { Router } from "express";
import { send, setErrorResponseMsg } from "../../../helper/responseHelper.js";
import RESPONSE from "../../../configs/global.js";
import authenticate from "../../../middlewares/authenticate.js";
import constants from "../../../configs/constants.js";
import propertyModel from "../../../models/propertyModel.js";
const router = Router();

router.get("/", async (req, res) => {
  try {
    let data = await propertyModel.aggregate([
      {
        $match: { isactive: constants.CONTENT_STATE.IS_ACTIVE },
      },
    ]);

    data = data.map((itm) => {
      return {
        images: itm.images.map((img) => {
          return process.env.AWS_URL + img;
        }),
      };
    });

    return send(res, RESPONSE.SUCCESS, data);
  } catch (err) {
    return send(res, RESPONSE.UNKNOWN_ERROR);
  }
});

export default router;

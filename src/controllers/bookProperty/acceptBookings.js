import { Router } from "express";
import RESPONSE from "../../configs/global.js";
import { send, setErrorResponseMsg } from "../../helper/responseHelper.js";
import authenticate from "../../middlewares/authenticate.js";
import bookings from "../../models/bookings.js";
import constants from "../../configs/constants.js";
const router = Router();

router.put("/:id", authenticate, async (req, res) => {
  try {
    if (req.user.role != constants.ROLE.VENDOR) {
      return send(res, RESPONSE.NO_ACCESS);
    }
    const id = req.params.id;

     await bookings.updateMany({ _id: id }, [
      { $set: { isaccepted: constants.BOOKING_STATUS.ACCEPTED } },
    ]);

    return send(res, RESPONSE.SUCCESS);
  } catch (err) {
    console.log(err.message);
    return send(res, RESPONSE.UNKNOWN_ERROR);
  }
});

export default router;

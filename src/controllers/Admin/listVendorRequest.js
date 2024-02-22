import { Router } from "express";
import { send } from "../../helper/responseHelper.js";
import RESPONSE from "../../configs/global.js";
import accountsModel from "../../models/accountsModel.js";
import { CONTENT_STATE, ROLE } from "../../configs/constants.js";
const router = Router();

router.get("/", async (req, res) => {
  try {
    let query = {};
    let filter = req.query.status;
    query.isactive = CONTENT_STATE.IS_ACTIVE;
    query.role = ROLE.VENDOR;
    if (filter) query.verify_status = filter;

    let data = await accountsModel.find(query);

    data = data.map((itm) => ({
      vendor_id: itm._id,
      name: itm.name,
      role: itm.role,
      email: itm.email,
      phone: itm.phone,
      verify_status: itm.verify_status,
    }));
    return send(res, RESPONSE.SUCCESS, data);
  } catch (err) {
    return send(res, RESPONSE.UNKNOWN_ERROR);
  }
});

export default router;

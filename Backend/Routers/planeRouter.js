import Express from "express";
import { getAircrafts } from "../Controllers/planeController.js";

const router = Express.Router()

router.route('/getPlanes/:latitude&:longitude&:radius&:velocity').get(getAircrafts);

export default router;
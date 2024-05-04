import Express from "express";
import { getAircrafts } from "../Controllers/planeController.js";

const router = Express.Router()

router.route('/getPlanes/:latitude&:longitude&:radius').get(getAircrafts);

export default router;
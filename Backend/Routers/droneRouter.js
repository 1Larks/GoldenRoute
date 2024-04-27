import Express from "express";
import { testHandler, testNumHandler, fetchCoords } from "../Controllers/droneController.js";


const router = Express.Router();

router.route("/test").get(testHandler);
router.route("/coords/:coords1&:coords2").get(fetchCoords)

export default router;
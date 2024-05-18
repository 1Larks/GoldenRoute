import express from "express";
const operationsController = require("../controllers/operationsController.js");

const router = express.Router();

// Route to get the last 10 operations
router.route('/operations/:amount').get(operationsController.getLast10Operations);

export default router;
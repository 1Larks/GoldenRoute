const express = require("express");
const {saveOperation, getOperation, getLast10OperationsController} = require("../Controllers/operationController.js");

const router = express.Router();

// Route to get the last 10 operations
router.post('/save', function(req, res){
    saveOperation(req, res);
});
router.get('/getDisplayInfo/:amount', function(req, res){
    getLast10OperationsController(req, res);
});


module.exports = {router};
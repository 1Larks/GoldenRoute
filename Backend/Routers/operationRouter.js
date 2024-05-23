const express = require("express");
const {saveOperationController, getOperationsController} = require("../Controllers/operationController.js");

const router = express.Router();

router.post('/save', function(req, res){
    saveOperationController(req, res);
});
router.get('', function(req, res){
    getOperationsController(req, res)
});


module.exports = {router};
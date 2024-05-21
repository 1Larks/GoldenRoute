const Express = require("express");
const { getAircraftsController } = require("../Controllers/planeController.js");

const router = Express.Router();

router.get('/getPlanes/:latitude&:longitude&:radius&:velocity', function(req, res){
    getAircraftsController(req, res);
});

module.exports = {router};
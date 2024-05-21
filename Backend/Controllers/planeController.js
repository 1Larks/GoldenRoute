const { getAircraftsService } = require("../Services/planeService.js");

const getAircraftsController = async (req, res) => {
    const aircrafts = await getAircraftsService(req.params.latitude, req.params.longitude, 
        req.params.radius, req.params.velocity);
    return res.json(aircrafts);
}

module.exports = {getAircraftsController}
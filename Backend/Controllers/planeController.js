import { get_formatted_aircrafts } from "../Services/planeService.js";

const getAircrafts = async (req, res) => {
    const aircrafts = await get_formatted_aircrafts(req.params.latitude, req.params.longitude, 
        req.params.radius, req.params.velocity);
    return res.json(aircrafts);
}

export {getAircrafts}
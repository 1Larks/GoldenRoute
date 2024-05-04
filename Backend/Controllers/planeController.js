import { get_formatted_aircrafts } from "../Services/planeService.js";

const getAircrafts = async (req, res) => {
    const aircrafts = await get_formatted_aircrafts(req.params.latitude, req.params.longitude, req.params.radius);
    return res.json(aircrafts);
}

export {getAircrafts}
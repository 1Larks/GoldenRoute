import { getAircraftsFromAPI } from "../Repositories/planeRepository.js"

function create_plane (plane){
    const aircraft = {
        squawk: plane.squawk,
        description: plane.desc,
        longitude: plane.lon,
        latitude: plane.lat,
        air_speed_in_knots: plane.tas,
        true_track: plane.track,
        category: plane.category
    };

    return aircraft;
}

const getAircrafts = async (latitude, longitude, radius) => {
    const aircrafts_unformatted = await getAircraftsFromAPI(latitude, longitude, radius);
    const aircrafts = []
    aircrafts_unformatted.ac.forEach(function(plane) {
        aircrafts.push(create_plane(plane));
    })
    return aircrafts;
}

export {getAircrafts as get_formatted_aircrafts};
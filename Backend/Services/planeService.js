const { getAircraftsRepo } = require("../Repositories/planeRepository.js")
const { calculateDistance }  = require("../coords_calculations.js");

function create_plane (plane, d, t){
    const aircraft = {
        squawk: plane.squawk,
        description: plane.desc,
        longitude: plane.lon,
        latitude: plane.lat,
        air_speed_in_knots: plane.tas,
        true_track: plane.track,
        category: plane.category,
        distance: d,
        time: t
    };

    return aircraft;
}

const getAircraftsService = async (latitude, longitude, radius, velocity) => {
    const radius_in_NM = parseFloat(radius) *  0.539956803
    const aircrafts_unformatted = await getAircraftsRepo(latitude, longitude, radius_in_NM);
    const aircrafts = []
    aircrafts_unformatted.ac.forEach(function(plane) {
        const lat = plane.lat
        const lon = plane.lon
        if (lat != null && lon != null){
            const distance = calculateDistance(latitude, longitude, lat, lon) / 1000;
            const time = (distance/velocity) * 60;

            aircrafts.push(create_plane(plane, distance.toFixed(3), time.toFixed(3)));

        }
    })
    return aircrafts;
}

module.exports = { getAircraftsService };
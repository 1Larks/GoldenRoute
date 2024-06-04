const { getAircraftsRepo } = require("../Repositories/planeRepository.js")
const { calculateDistance, KmToNM }  = require("../coords_calculations.js");

// A function to format an aircraft
function format_aircraft (plane, d, t){
    const aircraft = {
        squawk: plane.squawk, // The Squawk of an aircraft is a discrete transponder code that is assigned by the 
                              // Air traffic control to identify each aircraft uniquely, 
                              // That info is usefull since with the squawk code the desicion maker can possibly make contact
                              // With the aircraft's traffic controllers and notify them of the upcoming danger.

        description: plane.desc, // The description of the aircraft, Which in this case is the aircraft's model, Useful for identifying.

        longitude: plane.lon,
        latitude: plane.lat, // The aircraft's latitude & longitude.

        air_speed_in_knots: plane.tas, // The aircraft's speed, Knots is the standard measurement for aircrafts in aviation.

        true_track: plane.track, // The direction which the aircraft is heading.

        category: plane.category, // The plane's category, For example- A3: Large (75000 to 300000 lbs), 
                                  // May be useful for the desicion maker and the air traffic controllers to make the right desicions 
                                  // And maybe even for identification purposes.

        distance: d, // The distance from the aircraft to the hostile plane in Kilometers.
        
        time: t, // The time it will take for the hostile plane to arrive to this aircraft. 

        closest: 'false' // If an aircraft is the closest to the danger, Tt should be marked.
    };

    return aircraft;
}

// Get the aircrafts from the repository, Format the info & Add the time and distance from the hostile plane.
const getAircraftsService = async (latitude, longitude, radius, velocity) => {
    // The API I chose to use uses NM (Nautical Miles), So we convert the user's radius input (Km) to NM so it'll fit the API.
    const radius_in_NM = KmToNM(radius);
    // The raw aircraft info we get from the API, It has alot of useless information so we hold it here and format each plane.
    const aircrafts_unformatted = await getAircraftsRepo(latitude, longitude, radius_in_NM);
    // The array that will hold the formatted aircraft's info, This is the array that we are going to return.
    const aircrafts = []
    // These variables will be used to determine the closest aircraft to the hostile plane.
    var shortest_distance = radius;
    var shortest_distance_index = -1;
    // Iterating and formatting each of the planes that have returned by the API, we're going through just the plane info (aircrafts_unformatted.ac).
    aircrafts_unformatted.ac.forEach(function(plane, index) {
        const plane_latitude = plane.lat
        const plane_longitude = plane.lon
        // Check if the plane's lat&lon values are specified, The plane info is useless without it,
        // This is just a precautionary statement for the possibility that the values are not specified (although pretty impossible, but just in case ;) )
        if (plane_latitude != null && plane_longitude != null){
            // Calculate the distance between the two coordinates, Documentation in coords_calculation.js
            const distance = calculateDistance(latitude, longitude, plane_latitude, plane_longitude) / 1000;
            if (distance<shortest_distance){
                shortest_distance = distance;
                shortest_distance_index = index;
            }
            //Calculate arrival time (basic T=S/V formula).
            const time = (distance/velocity) * 60;
            // Add the formatted aircraft info to the aircraft array.
            aircrafts.push(format_aircraft(plane, distance.toFixed(3), time.toFixed(3)));
        }
    })
    if (aircrafts.length > 0) {
        aircrafts[shortest_distance_index].closest = 'true';
    }
    return aircrafts;
}

module.exports = { getAircraftsService };


// The website which I used to get the formula from is mentioned in the bibliography section in my github repository.

// To calculate the distance between two given sets of lat&lon coordinates [(lat1, lon1), (lat2, lon2)] we will use the "Haversine" formula,
// This is the Harvestine formula:
//
//          a = sin²(Δφ/2) + cos φ1 ⋅ cos φ2 ⋅ sin²(Δλ/2)
//          c = 2 ⋅ atan2( √a, √(1−a) )
//          d = R ⋅ c
//
// Phi = Latitude, Gamma = Longitude, R is earth’s radius And of course Delta represents the change in a variable (The remainder).

// The explenation of the formula can be found in the given website, It's pretty interesting even though im not exactly a math person, I have to admit it's pretty awesome.

function calculateDistance(lat1, lon1, lat2, lon2){
    const R = 6371e3; // Earth's radius in meters.
    const phi1 = lat1 * Math.PI/180; 
    const phi2 = lat2 * Math.PI/180; // Convert to radians.
    const deltaPhi = (lat2-lat1) * Math.PI/180;
    const deltaGamma = (lon2-lon1) * Math.PI/180; // Delta of both values converted to radians.

    const a = Math.sin(deltaPhi/2) * Math.sin(deltaPhi/2) +
            Math.cos(phi1) * Math.cos(phi2) *
            Math.sin(deltaGamma/2) * Math.sin(deltaGamma/2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    const distanceMeters = R * c; // Distance in meters.
    
    return distanceMeters;
}

// Convert Kilometers to Nautical Miles.
function KmToNM(km){
    return parseFloat(km) *  0.539956803
}

module.exports = { calculateDistance, KmToNM }

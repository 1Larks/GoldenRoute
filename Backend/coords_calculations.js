

//  To get all the friendly aircrafts in a circle, centered around given {latitude} and {longitude} and with the radius of {radius} kilometers,
//  We need to firstly convert the radius from kilometers to meters, afterwards we will convert the latitude (the center of our circle),
// from degrees to radians (I will explain exactly why later), then get the radius 

function calculateDistance(lat1, lon1, lat2, lon2){
    const R = 6371e3; // Earth's radius in metres
    const phi1 = lat1 * Math.PI/180; // Convert to radians
    const phi2 = lat2 * Math.PI/180;
    const deltaPhi = (lat2-lat1) * Math.PI/180;
    const deltaGamma = (lon2-lon1) * Math.PI/180;

    const a = Math.sin(deltaPhi/2) * Math.sin(deltaPhi/2) +
            Math.cos(phi1) * Math.cos(phi2) *
            Math.sin(deltaGamma/2) * Math.sin(deltaGamma/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    return R * c; // in metres
}

module.exports = { calculateDistance }

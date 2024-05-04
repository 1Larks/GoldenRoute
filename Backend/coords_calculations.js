

//  To get all the friendly aircrafts in a circle, centered around given {latitude} and {longitude} and with the radius of {radius} kilometers,
//  We need to firstly convert the radius from kilometers to meters, afterwards we will convert the latitude (the center of our circle),
// from degrees to radians (I will explain exactly why later), then get the radius 

function getBoundingBox(latitude, longitude, radius) {
    // Earth's radius in kilometers
    const earthRadius = 6371;

    // Convert latitude and longitude from degrees to radians
    const latInRadians = latitude * Math.PI / 180;
    const lonInRadians = longitude * Math.PI / 180;

    // Calculate the angular distance covered by the radius
    const angularDistance = radius / earthRadius;

    // Calculate the minimum and maximum latitude and longitude
    const minLat = latInRadians - angularDistance;
    const maxLat = latInRadians + angularDistance;
    const minLon = lonInRadians - angularDistance / Math.cos(latInRadians);
    const maxLon = lonInRadians + angularDistance / Math.cos(latInRadians);

    // Convert back from radians to degrees
    const laMin = minLat * 180 / Math.PI;
    const laMax = maxLat * 180 / Math.PI;
    const loMin = minLon * 180 / Math.PI;
    const loMax = maxLon * 180 / Math.PI;

    // Return the bounding box as an array
    return [laMin, loMin, laMax, loMax];
}

export {getBoundingBox}

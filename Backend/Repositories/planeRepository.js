
// The API i used to get the aircraft's info in a specific radius.
const URL = 'http://api.airplanes.live/v2/point';

const getAircraftsRepo = async (latitude, longitude, radius) => {

    const requestURL = `${URL}/${latitude}/${longitude}/${radius}`;
    
    const request = await fetch(requestURL);
    const response = await request.json();
    
    return response;
    
}

module.exports = {getAircraftsRepo}
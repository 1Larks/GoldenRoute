const URL = 'http://api.airplanes.live/v2/point';

// ?lamin=45.8389&lomin=5.9962&lamax=47.8229&lomax=10.5226


const getAircraftsRepo = async (latitude, longitude, radius) => {

    const requestURL = `${URL}/${latitude}/${longitude}/${radius}`;
    
    const request = await fetch(requestURL);
    const response = await request.json();
    
    return response;
    
}

module.exports = {getAircraftsRepo}
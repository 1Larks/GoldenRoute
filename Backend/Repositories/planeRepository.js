const URL = `https://opensky-network.org/api/states/all`;

// ?lamin=45.8389&lomin=5.9962&lamax=47.8229&lomax=10.5226


const getAircraftsFromAPI = async (latitude, longitude, radius) => {

    // const WGS84_params = getBoundingBox(latitude, longitude, radius);
    // const requestURL = `${URL}?lamin=${WGS84_params[0]}&lomin=${WGS84_params[1]}&lamax=${WGS84_params[2]}&lomax=${WGS84_params[3]}`;
    
    const requestURL = `http://api.airplanes.live/v2/point/${latitude}/${longitude}/${radius}`;
    
    const request = await fetch(requestURL);
    const response = await request.json();
    
    return response;
    
}

export {getAircraftsFromAPI}
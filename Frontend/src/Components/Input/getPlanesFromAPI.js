
const getPlanesFromAPI = async (URL, hostileInfo, setPlaneData, setHostileBackup, setPlaneBackup, setIsPlane, setExpandedIndex) => {
    try{
      const requestURL = `${URL}/plane/getPlanes/${hostileInfo['Latitude']}&${hostileInfo['Longitude']}&${hostileInfo['Radius']}&${hostileInfo['Speed']}`;
      const request = await fetch(requestURL);
      if (request.ok){
        setIsPlane(false);
        setExpandedIndex(-1);
        const response = await request.json();
        setPlaneData(response);
        setPlaneBackup(response);
        setHostileBackup(hostileInfo);
        setIsPlane(true);
      }else{
        alert('Error in recieving planes info.');
      }
    }
    catch(error) {
      console.error('Error:', error);
      alert('Error in reviecing the planes info, Check the console for more info.')
    }
  };

export default getPlanesFromAPI; 
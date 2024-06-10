import "leaflet/dist/leaflet.css";

import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";

import "leaflet-defaulticon-compatibility";

import { MapContainer, Marker, Popup, TileLayer, Circle } from "react-leaflet";
import "leaflet-rotatedmarker";

import { redIcon, greenIcon, purpleIcon, yellowIcon, blueIcon } from "./Icons";

export default ({hostileInfo, friendlyInfo, expanded_index, setExpandedIndex, setScroll}) => {
    // When clicked on a plane we set the expanded index to it's index and scroll to it.
    function onClick(e, index){
        if (expanded_index == index){
            setExpandedIndex(-1);
        }
        else{
            setExpandedIndex(index);
            setScroll(true);
        }
    }

    return (
      <MapContainer
        preferCanvas={true}
        center={[hostileInfo.Latitude, hostileInfo.Longitude]}
        zoom={9}
        scrollWheelZoom={false}
        style={{ height: "450px", width: "700px"}}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* When clicking on the hostile plane we want to show the info about it. */}
        <Marker position={[hostileInfo.Latitude, hostileInfo.Longitude]} icon={redIcon}>
          <Popup>
            כטב"ם <br/> :קורדינאטות <br/>
            {hostileInfo.Latitude} :קו רוחב <br/> {hostileInfo.Longitude} :קו אורך<br/>
            {hostileInfo.Radius} :רדיוס מקסימלי<br/>
            {hostileInfo.Speed} :מהירות
          </Popup> 
        </Marker>
        {/* If the current plane is the closest plane to the danger we want to display him in a special color, also, for every type of plane (closest or not the closest) has different colors
        for when it is either normal or expanded. */}
        {friendlyInfo.map((plane, index) => (
              (plane.closest == 'true')?
              (<Marker key={index} position={[plane.latitude, plane.longitude]} icon={(index == expanded_index) ? blueIcon : yellowIcon} eventHandlers={
                {click: (e) => {
                    onClick(e, index);
                }}
            } rotationAngle={plane.true_track}>
            </Marker>)
            :
              (<Marker key={index} position={[plane.latitude, plane.longitude]} icon={(index == expanded_index) ? purpleIcon : greenIcon} eventHandlers={
                  {click: (e) => {
                      onClick(e, index);
                  }}
              } rotationAngle={plane.true_track}>
              </Marker>)
         ))}

        <Circle center={[hostileInfo.Latitude, hostileInfo.Longitude]} radius={hostileInfo.Radius * 1000} color="#ff0000" />
      </MapContainer>


  );
}
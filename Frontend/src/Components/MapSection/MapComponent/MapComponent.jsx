import "leaflet/dist/leaflet.css";

import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";

import "leaflet-defaulticon-compatibility";

import { MapContainer, Marker, Popup, TileLayer, Circle } from "react-leaflet";
import "leaflet-rotatedmarker";

import { redIcon, greenIcon, purpleIcon, yellowIcon, blueIcon } from "./Icons";

export default ({hostileInfo, friendlyInfo, expanded_index, setExpandedIndex, setScroll}) => {
    
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
        <Marker position={[hostileInfo.Latitude, hostileInfo.Longitude]} icon={redIcon}>
          <Popup>
            Hostile Unmanned Aerial Vehicle. <br/>
            coords: Latitude: {hostileInfo.Latitude} <br/>Longitude: {hostileInfo.Longitude} <br/>
            Maximum Radius: {hostileInfo.Radius} <br/>
            Velocity: {hostileInfo.Speed} 
          </Popup> 
        </Marker>

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
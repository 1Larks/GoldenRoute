import React, { useState } from 'react';

import './App.css';

import Logo from "./Logo.js"
import InputBox from './TextInput';
import Map from './MapComponent.js';
import RadiusBox from './radiusBox.js';
import {DB_Actions } from './db_actions.js';
import DB_Modal from './db_modal.js';

URL = "http://localhost:7878/"

const App = () => {

  const [planeData, setPlaneData] = useState([]);
  const [isPlane, setIsPlane] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(-1);
  const [scroll, setScroll] = useState(false);
  const [hostileInfo, setHostileInfo] = useState({
    Latitude: '',
    Longitude: '',
    Radius: '',
    Speed: ''
  });
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  }
  const closeModal = () => {
    setShowModal(false);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHostileInfo(prevState => ({
        ...prevState,
        [name]: value
    }));
  };

  const handleClick = async () => {
    setIsPlane(false);
    setExpandedIndex(-1);
    const requestURL = `${URL}plane/getPlanes/${hostileInfo['Latitude']}&${hostileInfo['Longitude']}&${hostileInfo['Radius']}&${hostileInfo['Speed']}`;
    const request = await fetch(requestURL);
    const response = await request.json();
    setPlaneData(response);
    setIsPlane(true);
    console.log(response);
  };

  return (
    <div className='App'>

      <Logo />

      <div className='InputSection'>
        <InputBox InputName={"Latitude"} DisplayName={"קו רוחב"} Data={handleChange} />
        <InputBox InputName={"Longitude"} DisplayName={"קו אורך"} Data={handleChange} />
        <InputBox InputName={"Radius"} DisplayName={"רדיוס טיסה"} Data={handleChange} />
        <InputBox InputName={"Speed"} DisplayName={"מהירות"} Data={handleChange} /> 
        <button onClick={handleClick}>שלח מידע</button>
      </div>

      <div className='mapContainer'>
        {isPlane && (
          <RadiusBox planes={planeData} expandedIndex = {expandedIndex} setExpandedIndex={setExpandedIndex}
          scroll={scroll} setScroll={setScroll}/>
        )}
        {isPlane && (
        <Map hostileInfo={hostileInfo} friendlyInfo={planeData} expanded_index={expandedIndex}
         setExpandedIndex={setExpandedIndex} setScroll={setScroll}/>)}
      </div>

      <div className='DB_Section'>
        {isPlane && (<DB_Actions URL={URL} hostileInfo={hostileInfo} friendlyInfo={planeData} openModal={openModal} />)}
        <DB_Modal showModal={showModal} onCloseModal={closeModal} />
      </div>

    </div>
  );

}
export default App;

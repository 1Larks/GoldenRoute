import React, { useState } from 'react';

import './App.css';

import Logo from "./Components/Logo/Logo.jsx"

import MapSection from './Components/MapSection/MapSection.jsx';
import DB_Actions from './Components/DB/db_actions.jsx';
import Modal from './Components/DB/Modal.jsx';

import InputSection from './Components/Input/InputSection.jsx';

URL = "http://localhost:1337"

const App = () => {
  
  // planeData is the information about the planes that the program has recieved from the API
  const [planeData, setPlaneData] = useState([]);
  // isPlane is a boolean that tells us if there is any available plane information, this is used to prevent loading some components before they have the required information to be rendered like the map.
  const [isPlane, setIsPlane] = useState(false);
  // expandedIndex is the index of the plane that is currently viewed, it could be set by either clicking the plane's icon on the map or by expanding the info about him in the infoBox.
  const [expandedIndex, setExpandedIndex] = useState(-1);
  // scroll is a boolean that tells the infoBox if it should scroll, when true the infoBox scrolls to the plane with the expanded index and thus show the information about a plane when he was clicked on inside the map.
  const [scroll, setScroll] = useState(false);
  // hostileInfo is the information about the hostile plane that will be sent to the server
  const [hostileInfo, setHostileInfo] = useState({
    Latitude: '',
    Longitude: '',
    Radius: '',
    Speed: ''
  });
  // showInput is a boolean that changes the visibility of the inputSection, we want the inputSection to be invisible when we are importing an operation to prevent user confusion.
  const [showInput, setShowInput] = useState(true);
  // showModal is a boolean that states if we should display the import operation modal, it will set to be true and activate the modal when we click on the import operation button.
  const [showModal, setShowModal] = useState(false);
  // The saved variable indicates if the current operation we are viewing has been saved on the database before, It prevents duplicate saving of the same operation and is flexible with the operation importing state.
  const [saved, setSaved] = useState(false);

  // All the backup variables are designed to hold the current state of the app for when an operation is being imported, we want the user to be able to import an operaion and go back to the original operation he was handeling.
  const [hostileBackup, setHostileBackup] = useState({});
  const [planeBackup, setPlaneBackup] = useState([])
  const [savedBackup, setSavedBackup] = useState(false);

  const openModal = () => {
    setShowModal(true);
  }
  const closeModal = () => {
    setShowModal(false);
  }
  

  return (
    <div className='App'>

      <Logo />

      {/* If the showInput variable is set to true, display the input section. */}
      {showInput && (<InputSection URL={URL} setIsPlane={setIsPlane} setExpandedIndex={setExpandedIndex} 
      setHostileInfo={setHostileInfo} hostileInfo={hostileInfo} setPlaneData={setPlaneData} 
      setHostileBackup={setHostileBackup} setPlaneBackup={setPlaneBackup}
      />)}
      
      {/* If the user sent the data to the API, after the API responds isPlane is set to true and we can display the map without errors, check ./Components/Input/getPlanesFromAPI lines 7-13. */}
      {isPlane && (
        <MapSection planeData={planeData} hostileInfo={hostileInfo} expandedIndex={expandedIndex} setExpandedIndex={setExpandedIndex} scroll={scroll} setScroll={setScroll} />
      )}

      {/* Same concept as the MapSection, but with a different div just for the DB actions. */}
      <div className='DB_Section'>
        {isPlane && (<DB_Actions URL={URL} hostileInfo={hostileInfo} friendlyInfo={planeData} 
        openModal={openModal} saved = {saved} setSaved={setSaved} setSavedBackup={setSavedBackup}/>)}
        {/* The modal will activate if the showModal is true */}
        <Modal isOpen={showModal} onClose={closeModal} URL={URL} setShowInput={setShowInput} 
        setHostileInfo={setHostileInfo} setPlaneData={setPlaneData} setIsPlane={setIsPlane}
        setSaved = {setSaved}/>
        {/* Couldnt fix the awful margin sorry :( */}
        {/* If showInput is false, it means that an operation has been imported, I made it this way to prevent confusion so we havet his return button that revert things to the previous state. */}
        {!showInput && (<button onClick={() => {
          setIsPlane(false);
          setExpandedIndex(-1);
          setPlaneData(planeBackup);
          setHostileInfo(hostileBackup);
          setIsPlane(true);
          setSaved(savedBackup);
          setShowInput(true);
        }} style={{marginLeft: 200, width: 'fit-content'}} >חזור</button>)}
      </div>
      
    </div>
  );

}
export default App;

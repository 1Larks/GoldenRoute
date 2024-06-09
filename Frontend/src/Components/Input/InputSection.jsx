import getPlanesFromAPI from './getPlanesFromAPI.js'
import InputBox from './TextInput.jsx';
import './Input.css'
import { useState } from 'react';

const InputSection = ({URL, setIsPlane, setExpandedIndex,setHostileInfo, hostileInfo, setPlaneData, setHostileBackup, setPlaneBackup }) => {
  
  // The hostileInputHolder variable is a middle man between the text input boxes and the actual hostile plane's data.
  const [hostileInfoHolder, setHostileInfoHolder] = useState({
    Latitude: '',
    Longitude: '',
    Radius: '',
    Speed: ''
  });

  const updateHostileInfo = () => {
    setHostileInfo(hostileInfoHolder);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHostileInfoHolder(prevState => ({
          ...prevState,
          [name]: value
        }));
  };

  const handleKeyPress = (e) => {
    const allowedKeys = /^[0-9.]$/;
    if (!allowedKeys.test(e.key)) {
      e.preventDefault();
    }
  };

  return(

    <div className='InputSection'>
      <InputBox InputName={"Latitude"} DisplayName={"קו רוחב"} onChange={handleChange} onKey={handleKeyPress}/>
      <InputBox InputName={"Longitude"} DisplayName={"קו אורך"} onChange={handleChange} onKey={handleKeyPress}/>
      <InputBox InputName={"Radius"} DisplayName={"רדיוס טיסה"} onChange={handleChange} onKey={handleKeyPress}/>
      <InputBox InputName={"Speed"} DisplayName={"מהירות"} onChange={handleChange} onKey={handleKeyPress}/>
      <button onClick={() => {
        // The reason why we pass setIsPlane and setExpandedIndex is for the case that an error would accour so we dont want the app to crash.
        updateHostileInfo()
        getPlanesFromAPI(URL, hostileInfoHolder, setPlaneData, setHostileBackup, setPlaneBackup, setIsPlane, setExpandedIndex);
      }}>שלח מידע</button>
    </div>);
  }

export default InputSection
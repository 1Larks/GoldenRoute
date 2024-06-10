import getPlanesFromAPI from './getPlanesFromAPI.js'
import InputBox from './TextInput.jsx';
import './Input.css'
import { useState } from 'react';

const InputSection = ({URL, setIsPlane, setExpandedIndex,setHostileInfo, hostileInfo, setPlaneData, setHostileBackup, setPlaneBackup }) => {
  
  // The hostileInputHolder variable is a middle man between the text input boxes and the actual hostile plane's data. This is used to sync between the real final data that has been entered
  // To whatever the user enters in the meantime.
  const [hostileInfoHolder, setHostileInfoHolder] = useState({
    Latitude: '',
    Longitude: '',
    Radius: '',
    Speed: ''
  });

  const updateHostileInfo = () => {
    setHostileInfo(hostileInfoHolder);
  }

  // We change the HIH's values to what the user enters in the appropriate fields.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setHostileInfoHolder(prevState => ({
          ...prevState,
          [name]: value
        }));
  };

  // We wanna let the user insert only digits and a decimal point.
  const handleKeyPress = (e) => {
    const allowedKeys = /^[0-9.]$/;
    if (!allowedKeys.test(e.key)) {
      e.preventDefault();
    }
  };
  // We want to let the user insert a - sign at the beggining.
  const handleKeyPressCoords = (e) => {
    const allowedKeys = /^-?\d*\.?\d*$/;
    if (!allowedKeys.test(e.key)) {
      e.preventDefault();
    }
  };

  // Check if the coordinates are in a valid format.
  const validate_coords = (value, min, max) => {
    const regex = /^-?\d*\.?\d*$/;
    if (!regex.test(value)) return false;
    const numberValue = parseFloat(value);
    return numberValue >= min && numberValue <= max;
  }


  return(

    <div className='InputSection'>
      <InputBox InputName={"Latitude"} DisplayName={"קו רוחב"} onChange={handleChange} onKey={handleKeyPressCoords}/>
      <InputBox InputName={"Longitude"} DisplayName={"קו אורך"} onChange={handleChange} onKey={handleKeyPressCoords}/>
      <InputBox InputName={"Radius"} DisplayName={"רדיוס טיסה"} onChange={handleChange} onKey={handleKeyPress}/>
      <InputBox InputName={"Speed"} DisplayName={"מהירות"} onChange={handleChange} onKey={handleKeyPress}/>
      <button onClick={() => {
        if (!validate_coords(hostileInfoHolder['Latitude'], -90, 90)) {
          alert('ערך קו הרוחב לא תקין, אנא  הכנס ערך בין -90 ל90');
        }
        else if (!validate_coords(hostileInfoHolder['Longitude'], -180, 180)) {
          alert('ערך קו האורך לא תקין, אנא הכנס ערך בין -180 ל180');
        }
        // Check if the radius and speed are in the right format, which is- Number (optional:) . Number
        else if (!/^\d*\.?\d*$/.test(hostileInfoHolder['Radius']) || !/^\d*\.?\d*$/.test(hostileInfoHolder['Speed'])) {
          alert(`אחד מהערכים שהוכנס אינו תקין, אנא בדוק את תיבות הקלט`);
        }
        else{
          updateHostileInfo();
          // The reason why we pass setIsPlane and setExpandedIndex is for the case that an error would accour so we dont want the app to crash.
          getPlanesFromAPI(URL, hostileInfoHolder, setPlaneData, setHostileBackup, setPlaneBackup, setIsPlane, setExpandedIndex);
        }
        
      }}>שלח מידע</button>
    </div>);
  }

export default InputSection
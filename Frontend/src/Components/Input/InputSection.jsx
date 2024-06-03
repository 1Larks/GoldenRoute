import getPlanesFromAPI from './getPlanesFromAPI.js'
import InputBox from './TextInput.jsx';
import './Input.css'

const InputSection = ({URL, handleChange, setIsPlane, setExpandedIndex,  hostileInfo, setPlaneData, setHostileBackup, setPlaneBackup }) => {
    return(
    <div className='InputSection'>
      <InputBox InputName={"Latitude"} DisplayName={"קו רוחב"} onChange={handleChange} />,
      <InputBox InputName={"Longitude"} DisplayName={"קו אורך"} onChange={handleChange} />,
      <InputBox InputName={"Radius"} DisplayName={"רדיוס טיסה"} onChange={handleChange} />,
      <InputBox InputName={"Speed"} DisplayName={"מהירות"} onChange={handleChange} />,
      <button onClick={() => {
        // The reason why we pass setIsPlane and setExpandedIndex is for the case that an error would accour so we dont want the app to crash.
        getPlanesFromAPI(URL, hostileInfo, setPlaneData, setHostileBackup, setPlaneBackup, setIsPlane, setExpandedIndex);
      }}>שלח מידע</button>
    </div>);
  }

export default InputSection
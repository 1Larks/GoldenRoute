import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import Logo from "./Logo.js"
import InputBox from './TextInput';

URL = "http://localhost:7878/"

const App = () => {

  const [[data], setData] = useState([])

  const [info, setInfo] = useState({
    Latitude: '',
    Longitude: '',
    Radius: '',
    Speed: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo(prevState => ({
        ...prevState,
        [name]: value
    }));
  };

  const handleClick = async () => {
    const requestURL = `${URL}plane/getPlanes/${info['Latitude']}&${info['Longitude']}&${info['Radius']}`;
    const request = await fetch(requestURL);
    const response = await request.json();
    console.log(response)
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

      <div>
        <h1> {data} </h1>
      </div>

    </div>
  );

}
export default App;

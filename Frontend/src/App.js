import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import Logo from "./Logo.js"
import InputBox from './TextInput';

URL = "http://localhost:7878/drone/coords/1&2"

const App = () => {

  // const [data, setData] = useState(null)

  // useEffect( () => {
  //   testAPI()
  // }, [] );

  // const testAPI = async() => {
  //   const response = await fetch(URL);
  //   const retrieve = await response.text();

  //   console.log(retrieve);
  //   setData(retrieve);
  // };

  const [info, setInfo] = useState({
    Longitude: '',
    Latitude: '',
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

  const handleClick = () => {
    // Do something with the gathered information
    console.log(info);
    // You can also pass 'info' to another function or perform any other operation here
  };

  return (
    <div className='App'>

      <Logo />

      <div className='InputSection'>
        <button onClick={handleClick}>שלח מידע</button>
        <InputBox InputName={"Latitude"} DisplayName={"קו אורך"} Data={handleChange} />
        <InputBox InputName={"Longitude"} DisplayName={"קו רוחב"} Data={handleChange} />
        <InputBox InputName={"Radius"} DisplayName={"רדיוס טיסה"} Data={handleChange} />
        <InputBox InputName={"Speed"} DisplayName={"מהירות"} Data={handleChange} /> 
      </div>

    </div>
  );

}
export default App;

import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import Logo from "./Logo.js"
import TextInput from './TextInput';

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

  return (
    <div className='App'>

      <Logo />

      <TextInput />

    </div>
  );

}
export default App;

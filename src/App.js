import logo from './logo.svg';
import './App.css';
import Card from "./components/Card/Card"
import Map from "./components/Map/Map"
import React, {useState, useEffect} from "react";


function App() {
const [ipAddress, setIpAddress] = useState(" ");
const [lat, setLat] = useState("51.505 ");
const [lng, setLong] = useState("-0.09 ");
const [isLoading, setIsLoading] = useState(true);
//const APIkey = process.env.REACT_APP_IPFY_API_KEY;


useEffect(() => {
  const getIp = async () => {
    try {
      const response = await fetch(`https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_IPFY_API_KEY}`);
      if(response.ok)
        {  
          const jsonResponse = await response.json();
          setIpAddress(jsonResponse.ip);
          setLat(jsonResponse.location.lat)
          setLong(jsonResponse.location.lng)
          console.log(jsonResponse);
          setIsLoading(false);
          return;
        }
    }
    catch (error){
      console.log(error);
    }
  }
  getIp();
},[]);

  return (
    <div className="App">
        <Card ipAddress={ipAddress} isLoading={isLoading}/>
        <Map lat={lat} lng={lng}/>

    </div>
  );
}

export default App;

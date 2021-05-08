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
const [country, setCountry] = useState("sy");
const [city, setCity] = useState("Aleppo");



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
          setCountry(jsonResponse.location.country)
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

useEffect(() => {
  const getInfo = async () => {
    try {
      const response = await fetch(`https://restcountries.eu/rest/v2/alpha/${country}`);
      if(response.ok)
        {  
          const jsonResponse = await response.json();
          console.log(jsonResponse)
          setCountry(jsonResponse.name)
          setCity(jsonResponse.flag)
          return;
        }
    }
    catch (error){
      console.log(error);
    }
  }
  getInfo();
},[country]);

return (
  <div className="App">
    <main>
    {isLoading ? (
      <div>
      <p>Loading IP address...</p>
      <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
      </div>
    ) : (
      <div>
      <Card ipAddress={ipAddress} country={country} city={city}/>
      <Map lat={lat} lng={lng}  />
      </div>
    )
    }
    </main>
  </div>
);
}


export default App;

import './App.css';
import Card from "./components/Card/Card"
import Map from "./components/Map/Map"
import React, {useState, useEffect} from "react";


function App() {
const [ipAddress, setIpAddress] = useState(" ");
const [lat, setLat] = useState("51.505 ");
const [lng, setLong] = useState("-0.09 ");
const [isLoading, setIsLoading] = useState(true);
const [country, setCountry] = useState("");
const [flag, setFlag] = useState(" ");
const [city, setCity] = useState(" ")



//const APIkey = process.env.REACT_APP_IPFY_API_KEY;


useEffect(() => {
  const getIp = async () => {
    try {
      const response = await fetch(`https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_IPFY_API_KEY}`);
      if(response.ok)
        {  
          const jsonResponse = await response.json();
          console.log(`from first API ${jsonResponse}`);
          setIpAddress(jsonResponse.ip);
          setLat(jsonResponse.location.lat)
          setLong(jsonResponse.location.lng)
          setCountry(jsonResponse.location.country)
          setCity(jsonResponse.location.city)
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
      if(country === "") return;
      const response = await fetch(`https://restcountries.eu/rest/v2/alpha/${country}`);
      if(response.ok)
        {  
          const jsonResponse = await response.json();
          console.log(jsonResponse)
          setCountry(jsonResponse.name)
          setFlag(jsonResponse.flag)
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
    <h1 className="header__style">What is my IP?</h1>
    {isLoading ? (
      <div>
      <p>Loading IP address...</p>
      <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
      </div>
    ) : (
      <div>
      <Card ipAddress={ipAddress} country={country} flag={flag} city={city}/>
      <Map lat={lat} lng={lng}  />
      </div>
    )
    }
    </main>
  </div>
);
}


export default App;

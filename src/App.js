import logo from './logo.svg';
import './App.css';
import Card from "./components/Card/Card"
import React, {useState, useEffect} from "react";

function App() {
const [ipAddress, setIpAddress] = useState(" ");
const [isLoading, setIsLoading] = useState(true);
const APIkey = process.env.REACT_APP_IPFY_API_KEY;


useEffect(() => {
  const getIp = async () => {
    try {
      console.log("keyyyyyyyyy is", APIkey);
      const response = await fetch(`https://geo.ipify.org/api/v1?apiKey=${APIkey}`);
      if(response.ok)
        {  
          const jsonResponse = await response.json();
          setIpAddress(jsonResponse.ip)
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
    </div>
  );
}

export default App;

import './App.css';
import Card from "./components/Card/Card"
import Map from "./components/Map/Map"
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import React, {useState, useEffect} from "react";


function App() {
const [ipAddress, setIpAddress] = useState(" ");
const [lat, setLat] = useState("51.505 ");
const [lng, setLong] = useState("-0.09 ");
const [isLoading, setIsLoading] = useState(true);
const [country, setCountry] = useState("");
const [code, setCode] = useState("");
const [flag, setFlag] = useState(" ");
const [city, setCity] = useState(" ")
const [anchorEl, setAnchorEl] = React.useState(null);

const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
};

const handleClose = () => {
  setAnchorEl(null);
};

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
          setCode(jsonResponse.location.country)
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
      if(code === "") return;
      const response = await fetch(`https://restcountries.eu/rest/v2/alpha/${code}`);
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
},[code]);

return (
  <div className="App">
    <main>
    <h1 className="header__style"><i className="fa fa-map-marker"></i>  What is my IP? </h1>
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
    <footer className="footer">
    <div>
          <Button variant="contained" aria-controls="simple-menu" aria-haspopup="true" className="button__style" onClick={handleClick}>
            change language   <i className="fa fa-language"></i>
          </Button>
            <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            >
            <MenuItem onClick={handleClose}>Arabic</MenuItem>
            <MenuItem onClick={handleClose}>English</MenuItem>
            <MenuItem onClick={handleClose}>German</MenuItem>
            </Menu>
        </div>
    </footer>
  </div>
);
}


export default App;

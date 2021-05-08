import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "./Map.css"

export default function Map({lat, lng}){
    return(
    <MapContainer className="MapContainer" center={[lat, lng]} zoom={5} scrollWheelZoom={false}>
        <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        /> 
        <Marker position={[lat, lng]}>
            <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
        </Marker>
    </MapContainer>

    );

}
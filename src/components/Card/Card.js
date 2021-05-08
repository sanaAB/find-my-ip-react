import React from "react";

export default function Card({ipAddress, isLoading}){
    return (
        isLoading ? (
            <div className= "content">
             <h3> Loading news ...</h3><i className= "fa fa-spinner fa-pulse fa-3x fa-fw"></i>
            </div>) : (
    <h1>{ipAddress}</h1>)
    )
}
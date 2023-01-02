import React from "react";
import rcb from './rcb.png';
import csk from './csk.png';
import './superleague.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'


export default function Superleague()
{
    return(
        <>
        <div className="container-fluid text-center ">
            
            <div className="c1 ">
            <h1 className="text-center c2 ">Super Over League</h1>
            <img src={rcb} className="pt-5"/>
            <img src={csk} className="pt-5"/>

            </div>
        </div>
        
        </>
    );
}
import React from "react";
import './memberlogin.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import Lap2 from './lap.jpg.jpg'


export default function Memberlogin()
{
    return(
        <>
        <div className="container-fluid cont pt-5 ">
    <div className="container cont1">
        <div className="row">
            <div className="col-lg-6 ">
            <img src={Lap2} height="400px" width="400px"/>
                
            </div>
            
            <div className="col-lg-6 ">
            <h1>Member Login</h1>
            <FontAwesomeIcon icon={faEnvelope} />
            <input type="text" id="email" value="" placeholder="Email" className="mt-5 one"/><br/>
            <FontAwesomeIcon icon={faLock} />
            <input type="text" id="pass" value="" className="mt-5 two" /><br/>
            
            <button className="mt-3 but">login</button>
            <h3>Forgot <span>username/password?</span></h3>
            <p><span>create your account</span></p>
            
            </div>
            
        </div>

    </div>

</div>


        
        
        
        </>



    );
}
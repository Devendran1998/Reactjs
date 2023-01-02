import React from "react";
import './notification.css';
import'../node_modules/bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { faBell, faCheckCircle } from "@fortawesome/free-regular-svg-icons";





export default function Notification()
{
    return(
        <>
         <div className="container">
            <h1 className="text-center">Nodification</h1>
             <div className="row head">

                      <div className="col-12 bg-primary m-3 p-3">
                         <FontAwesomeIcon icon={faCircleCheck}/>
                         Information Message
                      </div>
                          <div className="col-12 bg-success m-3 p-3 ">
                          <FontAwesomeIcon icon={faCheckCircle}/> 
                           Success Message
                          </div>
                        <div className="col-12 bg-warning m-3 p-3 ">
                        <FontAwesomeIcon icon={faBell}/>
                          Warning Message
                        </div>
                        <div className="col-12 bg-danger m-3 p-3">
                        <FontAwesomeIcon icon={faExclamationCircle}/>
                        Error Message
                        </div>
              </div>

        </div>
    

        
        
        </>


    );
}
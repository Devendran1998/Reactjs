import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { Link } from "react-router-dom";

export default function Reusable()
{
    return(

        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">React project</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
      <Link to='/card' className="btn">Card</Link>
      </li>
      <li class="nav-item">
      <Link to='/congratscard' className="btn">Congratscard</Link>
      </li>
     
      <li class="nav-item">
    
      <Link to='/memberlogin' className="btn">Memberlogin</Link>
      </li>
      <li class="nav-item">
      <Link to='/notification' className="btn">Notification</Link>
    </li>
    <li class="nav-item">
    
    <Link to='/button' className="btn">buttons</Link>
    </li>
    <li class="nav-item">
    
    <Link to='/superleague' className="btn">Superleague</Link>
    </li>
    <li class="nav-item">
    
    <Link to='/technologycards' className="btn">Technologycards</Link>
    </li>
    </ul>
  
  </div>
</nav>





      


































        {/* <div>
        <Link to='/congratscard' className="ml-3">Congratscard</Link>
        <Link to='/memberlogin' className="ml-3">Memberlogin</Link>
        <Link to='/notification' className="ml-3">Notification</Link>
        <Link to='/button' className="ml-3">buttons</Link>
        <Link to='/superleague' className="ml-3">Superleague</Link>
        <Link to='/technologycards' className="ml-3">Technologycards</Link>
        <Link to='/card' className="ml-3">Card</Link>
        </div>
         */}
        
        </> 



    );
}
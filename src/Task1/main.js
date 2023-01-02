import React from "react";
import { Link } from "react-router-dom";
import'../../node_modules/bootstrap/dist/css/bootstrap.css';



export default function Main(){


    return(
<>

<nav class="navbar navbar-expand-lg navbar-light bg-warning">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent1">
    <ul class="navbar-nav mr-auto">
     
      <li class="nav-item">
         <Link to='/home' className="btn bg-white ">home</Link>
      </li>
     
      <li class="nav-item">
      <Link to='/works' className="btn bg-white ">works</Link>
      </li>
      <li class="nav-item">
      <Link to='/organic' className="btn bg-white ">organic</Link>
      </li>
      <li class="nav-item">
      <Link to='/ourfarm' className="btn bg-white ">ourfram</Link>
      </li>
      <li class="nav-item">
      <Link to='/about' className="btn bg-white ">about</Link>
      </li>
      <li class="nav-item">
      <Link to='/product' className="btn bg-white ">product</Link>
      </li>
      <li class="nav-item">
      <Link to='/testmonial' className="btn bg-white ">testmonial</Link>
      </li>
    </ul>
    
  </div>
</nav>
























</>






    );
}



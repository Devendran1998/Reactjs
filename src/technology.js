import React from "react";
import './technology.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'

import img1 from './tech1.png';
import img2 from './tech2.png';
import img3 from './tech3.png';
import img4 from './tech5.png';
export default function Tech(){
    return(
    
      <div className="container-fluid bg-primary">
        <div className="row">
            <div className="col-lg-12 text-center">
                <h1>learn 4.0 technologies</h1>
            </div>
            <div className="col-lg-10 text-center ml-5">
                <p>What is technology Technology is the application of scientific knowledge to the practical aims of human life or, as it is sometimes phrased, to the change and manipulation of the human environment.</p>
                </div>
            <div className="col-lg-12">
            <div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Data scientific</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
         <img className="techimg" src={img1}/>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Dot developver</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <img className="techimg" src={img2}/>
      </div>
    </div>
  </div>
</div>

            </div>
            <div className="col-lg-12 mt-3">
            <div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">VR developver</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <img className="techimg" src={img3}/>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">ML engineer</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <img className="techimg" src={img4}/>
      </div>
    </div>
  </div>
</div>
            </div>
          
          
           

        </div>

      </div>

        
    );
}
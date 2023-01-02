import React from "react";
import '../Task1/organic.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import orimg from '../Task1/organic1.jpg';


export default function Organic(){

    return(
       <>
  
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-7 bg-white mt-5">
                    <h3 className="orhead text-center">organic farm</h3>
                    <h1 className="orhead1">of organic foods</h1>
                    <p>Produce can be called organic if it's certified to have grown on soil that had no prohibited substances applied for three years prior to harvest. Prohibited substances include most synthetic fertilizers and pesticidesProduce can be called organic if it's certified to have grown on soil that had no prohibited substances applied for three years prior to harvest. Prohibited substances include most synthetic fertilizers and pesticides</p>
                    <input type="button" value="leran more" className="btn4 bg-danger"/>

                </div>
                       <div className="col-lg-5 mt-5">
                        <img src={orimg} className="orimg1"/>

                       </div>

            </div>

        </div>
         
       
       
       
       
       





       </>




    );
}
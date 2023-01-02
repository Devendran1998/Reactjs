import React from "react";
import'../../node_modules/bootstrap/dist/css/bootstrap.css';
import'../Task1/home.css'
import home1 from './home.jpg';




export default function Home(){

    return(
    <>
    <div className="container-fluid bg-image pt-5">
          <div className="row">
                <div className="col-lg-6 mt-5">
                    <h1 className="head11">
                        fresh foods
                    </h1>
                    <h3 className="head12">organic </h3>
                    <p>The word "organic" means the way farmers grow and process farming (agricultural) products. These products include fruits, vegetables, grains, dairy products such as milk and cheese, and meat. Organic farming practices are designed to meet the following goals: Improve soil and water quality</p>
                    <input type="button" value="leran more" className="btn bg-primary"/>

                </div>


          </div>




    </div>
           
 




    </>








    );
}
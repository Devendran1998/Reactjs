import React from "react";
import '../Task1/ourfarm.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import our1 from '../Task1/work1.jpg';


export default function Ourfarm(){
    return(
        <>
      
        <div className="container_fluid">
            <div className="row">
                <div className="col-lg-12 bg-white">
                    <div className="row">
                        <div className="col-lg-6 mt-5"> 
                            <img src={our1} className="img12"/>
                        </div>
                        <div className="col-lg-6 mt-5 bg-white ">
                            <h1 className="head12 text-center ">organic farm</h1>
                            <h3 className="head13">our promise</h3>
                            <p className="para14 text-center ">Fresh fruits and vegetables are an important part of a healthy diet. They contain essential vitamins, minerals, fiber and other nutrients that are essential for good health. In fact, research has shown that a healthy </p>
                            <input type="button" value="learn more" className="btn1 bg-danger"/>

                        </div>

                    </div>

                </div>

            </div>
          
        </div>
        </>

    );
}
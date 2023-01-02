import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../Task1/about.css';
import img12 from '../Task1/organic1.jpg';
// import img13 from '../Task1/about2.jpg';
// import img14 from '../Task1/about3.jpg';
// import img15 from '../Task1/about4.jpg';



export default function About(){
    return(
        <>
      
       <div className="container-fluid picture">
        <div className="row">
            <div className="col-lg-12">
                <h1 className="text-center">about  our farm</h1>
                <p className="text-center">Fresh fruits and vegetables are an important part of a healthy diet. They contain essential vitamins, minerals, fiber and other nutrients that are essential for good health. In fact, research has shown that</p>

            </div>
            <div className="col-lg-2 bg-white m-5 text-center">
                 <h3>vegetables</h3>
                 <p>They contain essential vitamins, mineralsfiber and other nutrients</p>
                 </div>
            <div className="col-lg-2 bg-white m-5">
                <h3>how its works</h3>
                <p>nutrients that are essential for good health. In fact, research has shown that</p>

            </div>
            <div className="col-lg-2 bg-white m-5">
                <h3>Flexibitiy</h3>
                <p> fiber and other nutrients that are essential for good health. In fact, research has shown that</p>
            </div>
            <div className="col-lg-2 bg-white m-5">
                <h3>fram products</h3>
                <p>Fresh fruits and vegetables are an important part of a healthy diet. They contain essential vitamins</p>

            </div>
          
          

        </div>
       

       </div>
           <div className="container_fluid">
            <div className="row">
                <div className="col-lg-2 m-5">
                    <img src={img12} className="pic"/>

                </div>
                <div className="col-lg-2 m-5">
                    <img src={img12} className="pic"/>

                </div>
                <div className="col-lg-2 m-5">
                    <img src={img12} className="pic"/>

                </div>
                <div className="col-lg-2 m-5">
                    <img src={img12} className="pic"/>

                </div>

            </div>

           </div>

       </>

    );
}
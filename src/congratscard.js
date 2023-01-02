import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './congratscard.css';
import Img1 from './photo1.png';
import Img2 from './photo2.png';

export default function Congratscard()
{
    return(
        <>
        <div className="container-fluid ">
           
            <div className="b1">
                 <div className="row justify-content-center ">
                      <h1 className="text-center">congradulation</h1>
                <div className="col-lg-12 b2 text-center p-5">
                        <img src={Img1}/>
                        <h1 className="text-center">Kiran</h1>
                        <p className="text-center"> vishnu instute of computer education and technology<br></br>
                                      coimbatore.</p>
                         <img src={Img2}/>
                </div>
                
                        

                    
                    
            
                 </div>

            </div>










        </div>
        </>
    );
}





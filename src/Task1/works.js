import React from "react";
import '../Task1/works.css';
import work1 from '../Task1/work1.jpg';


export default function Works()
{
    return(
        <>
        <div className="container-fluid bg-img" >
           <div className="row">
            <div className="col-lg-12 text-center">
                <h1 className="work-head">how is works</h1>
                <p className="work-para">The word "organic" means the way farmers grow and process farming (agricultural) products. These products include fruits, vegetables, grains, dairy products such as milk and cheese, and meat. Organic farming practices are designed to meet the following goals: Improve soil and water quality</p>
                </div>
                
              

                <div className="col-lg-4 ">
               
                    <img src={work1} height="200px" width="350px" className="col-lg-12"/>
                    </div>
                    <div className="col-lg-3 text-center">
                    <div className="card " width="15rem" >
                         <h4>organic farming</h4>
                         <p> These products include fruits, vegetables, grains, dairy products such as milk and cheese, and meat. Organic farming practices are designed to meet the following goals: Improve soil and water qualityOrganic farming practices are designed to meet the following goals: Improve soil and water quality</p>

                        </div>

                    </div>
                    
                <div className="col-lg-4 ">
             
             <img src={work1} height="200px" width="350px" className="col-lg-12"/>
             
             </div>
             <div className="col-lg-3 mt-5">
             <div className="card " width="15rem" >
                         <h4>organic farming</h4>
                         <p> These products include fruits, vegetables, grains, dairy products such as milk and cheese, and meat. Organic farming practices are designed to meet the following goals: Improve soil and water qualityOrganic farming practices are designed to meet the following goals: Improve soil and water quality</p>

                        </div>
             </div>
                     <div className="col-lg-4 mt-5">
                     <img src={work1} height="200px" width="350px" className="col-lg-12"/>
                     </div>

                     <div className="col-lg-3 mt-5">
                     <div className="card " width="15rem" >
                         <h4>organic farming</h4>
                         <p> These products include fruits, vegetables, grains, dairy products such as milk and cheese, and meat. Organic farming practices are designed to meet the following goals: Improve soil and water qualityOrganic farming practices are designed to meet the following goals: Improve soil and water quality</p>

                        </div>
                     </div>
                       





             </div>
                  
   



             
           

           </div>
  
      
        
        
        </>



    );
}

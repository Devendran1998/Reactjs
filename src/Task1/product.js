import React from "react";
import '../Task1/product.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
// import product from './product1.jpg';
// import product1 from './product2.jpg';
// import product2 from './product3.jpg';


export default function Prod(){
    return(
        <>
      
          <div className="container-fluid first">
           <div className="row">
            <div className="col-lg-4 text-center mt-5">
                  <div className="card">
                    {/* <img src={product} className="prod"/> */}
                    <h3>fresh fruits</h3>
                    <p>Produce can be called organic if it's certified to have grown on soil that had no prohibited substances applied for three years prior to harvest</p>
                  {/* <input type="button" value="learn more" className="btn "/> */}

                  </div>

            </div>
            <div className="col-lg-4 text-center mt-5">
                  <div className="card">
                    {/* <img src={product1} className="prod"/> */}
                    <h3>vegetables</h3>
                    <p>Produce can be called organic if it's certified to have grown on soil that had no prohibited substances applied for three years prior to harvest</p>
                     {/* <input type="button" value="learn more" className="btn "/> */}

                  </div>

            </div> 
            <div className="col-lg-4 text-center mt-5">
                  <div className="card">
                    {/* <img src={product2} className="prod"/> */}
                    <h3>salad leaves</h3>
                    <p>Produce can be called organic if it's certified to have grown on soil that had no prohibited substances applied for three years prior to harvest</p>
                     {/* <input type="button" value="learn more" className="btn "/> */}

                  </div>

            </div>

           </div>
          </div>
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        </>
    );
}
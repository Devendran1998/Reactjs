import React from 'react';
import './button.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'

function Button(){
    return(
        <div className="logo">
            <h1 className='headbtn'>social buttons</h1>

         <div className='btn11'>
            <button className='button-btn1 buttonsocial'>LIKE</button>
            <button className='btn2 buttonsocial'>comment</button>
            <button className='btn3 buttonsocial'>share</button>
         </div>
        
         
     
       
        </div> 
    );

}
export default Button;
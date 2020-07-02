import React from 'react';
import {Link} from 'react-router-dom';

export default function Dashboard()
{
    return(
        <div>
       < Link to = "/Registration">
        <button type="Register"
        className="btn btn-primary" > <span>Register</span> 
       </button> 
       <div className="row col-12 d-flex justify-content-center text-white"></div>
       </ Link>
       < Link to = "/Login"> 
       <button type= "Login"
        className="btn btn-primary"> <span>Login</span>
         </button>
        <div className="row col-12 d-flex justify-content-center text-white"></div>
         </ Link> 
         </div>  
    );
}
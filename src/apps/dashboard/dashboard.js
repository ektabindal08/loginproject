import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../../components/Header/Header';

export default function Dashboard()
{
    return(<div className="dashboard-Section">
        <Header title= {"My Dashboard"}/>
        <div className="dashboard-buttons">
       < Link to = "/Registration">
        <button type="Register"
        className="btn btn-primary" > <span>Register</span> 
       </button> 
       </ Link>
       < Link to = "/Login"> 
       <button type= "Login"
        className="btn btn-primary"> <span>Login</span>
         </button>
         </ Link> 
         </div> 
         </div> 
    );
}
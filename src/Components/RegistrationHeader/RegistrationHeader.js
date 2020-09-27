import React from 'react';
import logo from '../../Logo.png';
import './RegistrationHeader.css'

import { Link } from 'react-router-dom';
const RegistrationHeader = () => {
    return (
        <div>
            <div className="header">
                <img src={logo} alt="" />
               <div className="search__nav">
               <div className="box1">
                 
                    
                </div>
                <ul className="ul">
                    <li>News</li>
                    <li>Destination</li>
                    <li>Blog</li>
                    <li>Contact</li>

                </ul>
                <Link to="/userPhase">
                   <button>Login</button>
               </Link>
               </div>
              
            </div>
        </div>
    );
};

export default RegistrationHeader;
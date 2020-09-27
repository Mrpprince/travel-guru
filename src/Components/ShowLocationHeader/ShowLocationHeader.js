import React from 'react';
import logo3 from '../../Logo.png'
import './ShowLocationHeader.css'

const ShowLocationHeader = () => {
    return (
        <div>
            <div className="showLocationHeader">
        <div className="header">
            <img src={logo3} alt="" />
           <div className="search__nav">
           <div className="box1">
             
                
            </div>
            <ul className="ul">
                <li>News</li>
                <li>Destination</li>
                <li>Blog</li>
                <li>Contact</li>

            </ul>
            
           </div>
          
        </div>
        
    </div>
        </div>
    );
};

export default ShowLocationHeader;
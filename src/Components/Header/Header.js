import React from 'react';
import logo from '../../Logo1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className="header">
                <img src={logo} alt="" />
               <div className="search__nav">
               <div className="box">
                    <FontAwesomeIcon style={{fontSize:"20px"}} icon={faSearch} />
                    <input type="text"  />
                </div>
                <ul>
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

export default Header;
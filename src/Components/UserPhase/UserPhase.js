import React, { useState } from 'react';
import Registration from '../Registration/Registration';
;




const UserPhase = () => {
   
 
  
    const [isLogIn, setIsLogIn] = useState(false);
    const handleLogin = () => {
        setIsLogIn(!isLogIn);
    }
   
    return (
        <div>
            <div>
                
                    <Registration isLogIn={isLogIn}  handleLogin={handleLogin}></Registration>
                
            </div>
            
        </div>

    );
};

export default UserPhase;
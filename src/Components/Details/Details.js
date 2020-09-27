import React from 'react';
import './Details.css';


const Details = (props) => {
    const { title, details } = props.details
    return (
        <div className="text-white">
            <h1>{title}</h1>
            <p>{details}</p>
            <div className="btn">
           {
               props.showPicture && <button onClick={()=>props.handleShowPicture()} className="booking">Booking </button>
           }
        </div>
        </div>
        
    );
};

export default Details;
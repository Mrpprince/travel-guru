import React, { useContext } from 'react';
import ShowLocationHeader from '../ShowLocationHeader/ShowLocationHeader';
import room1 from '../../room1.png';
import room2 from '../../room2.png';
import room3 from '../../room3.png';
import './ShowLocation.css'
import { UserContext } from '../../App';
import star from '../../star.png'

const ShowLocation = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser);

    return (
        <div className="container">

            <ShowLocationHeader></ShowLocationHeader>
            <p>
                <small>
                    252 Stays Apr 13-17-3 guests
            </small>
            </p>
            <h3>Stay in Cox's Bazar </h3>
            <div className="row">
                <div className="col-md-8">
                    <div className="row ShoWLocation">
                        <div className='col-md-6'>
                            <img src={room1} alt="" />
                        </div>
                        <div className='col-md-6'>
                            <h4>Light bright airy stylish apt & safe peaceful stay</h4>
                            <p style={{ color: "gray" }}>4 guests 2 bedrooms 2 beds 2 baths wif Air condition kitchen cancellation fexibility available</p>
                            <small>
                                <img className="star" src={star} alt="" />
                            </small>
                            <span>
                                <small style={{ fontWeight: "700" }}> 4.9(20)</small> <small style={{ fontWeight: "700" }}>$34</small><small>/night</small>
                            </span>
                        </div>
                    </div>
                    <div className="row ShoWLocation">
                        <div className="col-md-6">
                            <img src={room2} alt="" />

                        </div>
                        <div className='col-md-6'>
                           <div style={{}}>
                           <h4>Apartment in Lost Panorama</h4>
                            <p style={{ color: "gray" }}>4 guests 2 bedrooms 2 beds 2 baths wif Air condition kitchen cancellation fexibility available</p>
                           </div>
                            <div>
                            <small>
                                <img className="star" src={star} alt="" />
                            </small>
                            <span>
                                <small style={{ fontWeight: "700" }}> 4.9(20)</small> <small style={{ fontWeight: "700" }}>$34</small><small>/night</small>
                            </span>
                            </div>
                        </div>
                    </div>
                    <div className="row ShoWLocation">
                        <div className="col-md-6">
                            <img src={room3} alt="" />
                        </div>
                        <div className='col-md-6'>
                            <h4>AR Lounge & Pool (r&r + b&b)</h4>
                            <p style={{ color: "gray" }}>4 guests 2 bedrooms 2 beds 2 baths wif Air condition kitchen cancellation fexibility available</p>
                            <small>
                                <img className="star" src={star} alt="" />
                            </small>
                            <span>
                                <small style={{ fontWeight: "700" }}> 4.9(20)</small> <small style={{ fontWeight: "700" }}>$34</small><small>/night</small>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">

                </div>
            </div>
        </div>
    );
};

export default ShowLocation;
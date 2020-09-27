import React, { useState, useContext } from 'react';
import fakeData from '../../fakeData/fakeData'
import Details from '../Details/Details';
import { Row, Col } from 'react-bootstrap';
import Picture from '../Picture/Picture';
import Booking from '../Booking/Booking';
import './MainBody.css'
import Header from '../Header/Header';
import { UserContext } from '../../App';
const MainBody = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const data = fakeData;
    const [details, setDetails] = useState({
        title: "Sajek",
        details: "The native people of Sajek valley are ethnic minorities. Among them Chakma, Marma, Tripura, Pankua, Kaibarta, Lushai, other indigenous Assamese communities, and Sagma are mentionable."
    })
    const handleDetails = (id) => {
        setLoggedInUser(id)
        console.log(loggedInUser);
        const placeData = fakeData.find(data => data.id === id);

        setDetails(placeData);
    }

    const [showPicture, setShowPicture] = useState(true);

    const handleShowPicture = () => {
        setShowPicture(!showPicture);

    }
    return (
        <div className="  background-img">
            <Header></Header>
            <div className="container">
                <Row>
                    <Col xs={4}>
                        <Details
                            handleShowPicture={handleShowPicture}
                            details={details}
                            showPicture={showPicture}>
                        </Details>

                    </Col>
                    <Col>
                        <Row >

                            {showPicture ? data.map(data => <Picture handleDetails={handleDetails} data={data}></Picture>) : <Booking details={details}></Booking>}

                        </Row>
                    </Col>
                </Row>
            </div>
        </div>

    );
};

export default MainBody;
import React, { useState, useContext } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import { Link, useHistory } from 'react-router-dom';
import './Booking.css'
import { UserContext } from '../../App';
import calenderIcon from '../../calender_icon.png'


const Booking = (props) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { title } = props.details;
    const history = useHistory();
   const handleBooking=()=>{
       history.push('/showLocation');
   }

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    return (
        <div style={{ margin: "0 auto" }}>
            <Card style={{ width: '30rem' }}>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">Origin</Card.Subtitle>
                    <h3 className="backgroundStyle mb-3">Dhaka</h3>
                    <Card.Subtitle className="mb-2 text-muted">Destination</Card.Subtitle>
                    <h3 className="backgroundStyle mb-3"> {title} </h3>
                    <Row>
                        <Col>
                            <Card.Subtitle className="mb-2 text-muted">Form</Card.Subtitle>
                            <Row className="mb-3">
                                <Col xs={8}>
                                    <DatePicker className="inputStyle"
                                        selected={startDate}
                                        onChange={date => setStartDate(date)}
                                        minDate={new Date()}
                                        showYearDropdown
                                        scrollableMonthYearDropdown
                                        dateFormat='dd/MM/yyyy'
                                    />
                                </Col>
                                <Col>
                                    <img className="iconStyle" src={calenderIcon} alt="" />
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Card.Subtitle className="mb-2 text-muted">To</Card.Subtitle>
                            <Row className="mb-3">
                                <Col xs={8}>
                                    <DatePicker className="inputStyle"
                                        selected={endDate}
                                        onChange={date => setEndDate(date)}
                                        minDate={new Date()}
                                        showYearDropdown
                                        scrollableMonthYearDropdown
                                        dateFormat='dd/MM/yyyy'
                                    />
                                </Col>
                                <Col>
                                    <img className="iconStyle" src={calenderIcon} alt="" />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Card.Body>
                <Row className="mb-3">
                    <Col>
                        <div className="buttonStyle">
                            <button onClick={handleBooking} className="button"> Start Booking</button>
                        </div>
                    </Col>
                </Row>
            </Card>
        </div>
    );
};

export default Booking;
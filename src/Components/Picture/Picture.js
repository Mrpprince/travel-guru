import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Picture = (props) => {
    const { image,id } = props.data;


    return (
        <Col xs={4}>
            <Card style={{ cursor:"pointer" ,marginTop:"50px",height:"300px"}}>
            <Card.Img style={{height:"300px"}} onClick={()=>props.handleDetails(id)} variant="top" src={image} />
            
        </Card>
        </Col>
    );
};

export default Picture;
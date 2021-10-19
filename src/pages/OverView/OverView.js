import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Overview = () => {
    return (
        <div className="mx-auto mt-5 mb-4">
            <h1 className="text-gray-800 mb-5 text-4xl extrabold">Overview</h1>
            <Row xs={2} md={2} lg={4} className="mx-auto">
                <Col>
                    <Col><h1><i style={{ fontSize: '80px' }} className="fab fa-codepen text-primary"></i></h1></Col>
                    <Col xs className="text-2xl"><h3>20</h3></Col>
                    <Col xs className="text-xl"><h3>Years of Experience</h3></Col>
                </Col>
                <Col>
                    <Col><h1><i style={{ fontSize: '80px' }} className="fas fa-hospital-user text-primary"></i></h1></Col>
                    <Col xs className="text-2xl"><h3>70000+</h3></Col>
                    <Col xs className="text-xl"><h3>Happy Patients</h3></Col>
                </Col>
                <Col>
                    <Col><h1><i style={{ fontSize: '80px' }} className="far fa-clone text-primary"></i></h1></Col>
                    <Col xs className="text-2xl"><h3>120</h3></Col>
                    <Col xs className="text-xl"><h3>Certificates</h3></Col>
                </Col>
                <Col>
                    <Col><h1><i style={{ fontSize: '80px' }} className="fas fa-user-md text-primary"></i></h1></Col>
                    <Col xs className="text-2xl"><h3>40+</h3></Col>
                    <Col xs className="text-xl"><h3>Doctors</h3></Col>
                </Col>
            </Row>
        </div>
    );
};

export default Overview;
import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Overview = () => {
    return (
        <div className="mx-auto mt-5 mb-4 container">
            <h1 className="text-gray-800 mb-5 text-4xl extrabold">Overview</h1>
            <div className="mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Col className="bg-green-100 p-3 rounded-md">
                    <Col><h1><i style={{ fontSize: '80px' }} className="fab fa-codepen text-primary"></i></h1></Col>
                    <Col xs className="text-2xl font-bold py-1"><h3>20</h3></Col>
                    <Col xs className="text-sm"><h3>Years of Experience</h3></Col>
                </Col>
                <Col className="bg-green-100 p-3 rounded-md">
                    <Col><h1><i style={{ fontSize: '80px' }} className="fas fa-hospital-user text-primary"></i></h1></Col>
                    <Col xs className="text-2xl font-bold py-1"><h3>70000+</h3></Col>
                    <Col xs className="text-sm"><h3>Happy Patients</h3></Col>
                </Col>
                <Col className="bg-green-100 p-3 rounded-md">
                    <Col><h1><i style={{ fontSize: '80px' }} className="far fa-clone text-primary"></i></h1></Col>
                    <Col xs className="text-2xl font-bold py-1"><h3>120</h3></Col>
                    <Col xs className="text-sm"><h3>Certificates</h3></Col>
                </Col>
                <Col className="bg-green-100 p-3 rounded-md">
                    <Col><h1><i style={{ fontSize: '80px' }} className="fas fa-user-md text-primary"></i></h1></Col>
                    <Col xs className="text-2xl font-bold py-1"><h3>40+</h3></Col>
                    <Col xs className="text-sm"><h3>Doctors</h3></Col>
                </Col>
            </div>
        </div>
    );
};

export default Overview;
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const HorizontalScrollContainer = () => {
    return (
        <Container className="horizontal-scroll">
            <Row>
                <Col xs={2}>Item 1</Col>
                <Col xs={2}>Item 2</Col>
                <Col xs={2}>Item 3</Col>
                <Col xs={2}>Item 1</Col>
                <Col xs={2}>Item 2</Col>
                <Col xs={2}>Item 3</Col>
                <Col xs={2}>Item 1</Col>
                <Col xs={2}>Item 2</Col>
                <Col xs={2}>Item 3</Col>
                <Col xs={2}>Item 1</Col>
                <Col xs={2}>Item 2</Col>
                <Col xs={2}>Item 3</Col>
            </Row>
            <Row>
                <Col xs={2}>Item 1</Col>
                <Col xs={2}>Item 2</Col>
                <Col xs={2}>Item 3</Col>
                <Col xs={2}>Item 1</Col>
                <Col xs={2}>Item 2</Col>
                <Col xs={2}>Item 3</Col>
                <Col xs={2}>Item 1</Col>
                <Col xs={2}>Item 2</Col>
                <Col xs={2}>Item 3</Col>
                <Col xs={2}>Item 1</Col>
                <Col xs={2}>Item 2</Col>
                <Col xs={2}>Item 3</Col>
            </Row>
        </Container>
    );
};

export default HorizontalScrollContainer;

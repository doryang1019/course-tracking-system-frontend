import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import {Link} from 'react-router-dom';
const LoginPage = () => {
    return(
        <Container className="d-flex justify-content-center align-items-center my-container">
            <Card className="text-center my-card">
                <Card.Body className="my-card-body">
                    <Card.Title className="mb-3">Sign in your account</Card.Title>
                    <Form>
                        <Form.Group as={Row} className="my-3">
                            <Form.Label as={Col} sm={2}>Email</Form.Label>
                            <Col>
                                <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                                    <Form.Control type="email" placeholder="Email"/>
                                </FloatingLabel>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="my-3"controlId="formPlaintextPassword">
                            <Form.Label as={Col} sm={2}>
                            Password
                            </Form.Label>
                            <Col>
                                <FloatingLabel controlId="floatingPassword" label="Password">
                                    <Form.Control type="password" placeholder="Password" />
                                </FloatingLabel>
                            </Col>
                        </Form.Group>

                        <Row>
                            <Col><Button variant="link" as={Link} to="/forget">Forget Password?</Button></Col>
                        </Row>
                        <Row className="align-content-right">
                            <Col className="align-item-right" sm={3}><Button variant="warning" as={Link} to="/signup">Sign Up</Button></Col>
                            <Col className="align-item-right" sm={3}><Button variant="success" as={Link} >Login</Button></Col>
                        </Row>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default LoginPage;
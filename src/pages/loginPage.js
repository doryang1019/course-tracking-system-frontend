import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import { useState } from 'react'

const LoginPage = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(username)
        console.log(password)
    }
    return (
        <Container className="d-flex justify-content-center align-items-center my-container">
            <Card className="text-center my-card">
                <Card.Body className="my-card-body">
                    <Card.Title className="mb-3">Sign in your account</Card.Title>
                    <Form onSubmit={handleLogin}>
                        <Form.Group as={Row} className="my-3">
                            <Form.Label as={Col} sm={2}>Email</Form.Label>
                            <Col>
                                <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                                    <Form.Control
                                        type="email"
                                        name='username'
                                        value={username}
                                        placeholder="Email"
                                        onChange={e => setUsername(e.target.value)} />
                                </FloatingLabel>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="my-3" controlId="formPlaintextPassword">
                            <Form.Label as={Col} sm={2}>
                                Password
                            </Form.Label>
                            <Col>
                                <FloatingLabel controlId="floatingPassword" label="Password">
                                    <Form.Control
                                        type="password"
                                        name='password'
                                        value={password}
                                        placeholder="Password"
                                        onChange={ e => setPassword(e.target.value)} />
                                </FloatingLabel>
                            </Col>
                        </Form.Group>

                        <Row style={{width: "100%"}}>
                            <Col className='d-flex justify-content-end'><Button variant="link" as={Link} to="/forget">Forget Password?</Button></Col>
                        </Row>
                        <Row style={{width:"100%"}}>
                            <Col className="d-flex justify-content-end" sm={3} style={{width: "100%"}}>
                            <Button className="m-1" variant="warning" as={Link} to="/signup">Sign Up</Button>
                            <Button className="m-1" variant="success" type='submit' >Login</Button>
                            </Col>
                        </Row>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default LoginPage;
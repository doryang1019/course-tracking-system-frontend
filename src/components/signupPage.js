import { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {
    const [signupData, setSignupData] = useState({
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        setSignupData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };

    const validate = () => {
        const errors = {};
        if (!signupData.email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(signupData.email)) {
            errors.email = 'Email is invalid';
        }
        if (!signupData.password) {
            errors.password = 'Password is required';
        } else if (signupData.password.length < 8) {
            errors.password = 'Password must be at least 8 characters long';
        }
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            console.log(signupData);
            navigate('/login');
        }
    }

    return (
        <Container className="d-flex justify-content-center align-items-center my-container">
            <Card className="text-center my-card">
                <Card.Body className="my-card-body">
                    <Card.Title className="mb-0">Create an Account</Card.Title>
                    <Card.Text><small>Enter your email to sign up</small></Card.Text>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group as={Row} className="my-3">
                            <Col><Form.Control
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                value={signupData.email}
                                onChange={handleChange}
                                isInvalid={!!errors.email}
                            />
                                <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="my-3">
                            <Col><Form.Control
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                value={signupData.password}
                                onChange={handleChange}
                                isInvalid={!!errors.password}
                            />
                                <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                            </Col>
                        </Form.Group>
                        <Row className="mb-0 my-3"><Col><Button variant="primary" type="submit">Sign up with Email</Button></Col></Row>
                        <Row className="mb-3"><Col><small>or continue with</small></Col></Row>
                        <Row className="mt-3"><Col><Button variant="secondary" as={Link} to="/api/google">Google</Button></Col></Row>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}
export default Signup;
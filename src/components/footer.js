import {SITENAME} from '../constants';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Footer = () => {
    return(
        <footer>
            <hr></hr>
            <Container>
                <Row>
                    <Col>{SITENAME}</Col>
                    <Col>About Us</Col>
                    <Col>Contact Us</Col>
                    <Col>Learn More</Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col>sample@student.douglascollege.ca</Col>
                </Row>
                <small>copyright @{new Date().getFullYear()}</small>
            </Container>
        </footer>
    );
}
export default Footer;
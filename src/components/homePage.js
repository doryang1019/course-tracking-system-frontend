import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const HomePage = ({siteName}) => {
    return (
        <>
            <Card className="bg-dark text-white">
            <Card.Img src="banner.jpeg" alt="banner image" />
            <Card.ImgOverlay>
                <Card.Title>Welcome to {siteName}</Card.Title>
                <Card.Text>
                Plan ahead for academic success.
                </Card.Text>
                <Button variant="warning">Explore Course</Button>
            </Card.ImgOverlay>
            </Card>

            <FeatureCards />
        </>
    );
}

const FeatureCards = () => {
    return(
        <Card style={{width: 520}}>
            <Card.Img src="logo512.png" alt="Explore Programs"></Card.Img>
            <Card.Body>
                <Card.Title>Explore Programs</Card.Title>
                <Card.Text>Find a program to boost your career</Card.Text>
            </Card.Body>
        </Card>
    );
}



export default HomePage;
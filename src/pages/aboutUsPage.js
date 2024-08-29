import Container from "react-bootstrap/Container"

const AboutUs = () => {
    return (
        <>
            <h1 className="mb-4">About Us</h1>
            <Container style={{width: "40rem"}}>
                <p className="about-us">
                    Welcome to our website, a project crafted with dedication by students from Douglas College majoring in Computer Studies and Information Systems. Our team is passionate about leveraging technology to create solutions that make academic planning more intuitive and accessible.
                </p>
                <p className="about-us">
                    The primary purpose of our website is to assist students in effectively managing their course planning. We understand that navigating through course information, understanding requirements and prerequisites, and checking available offer terms can be overwhelming. Our platform is designed to streamline this process, making it easier for you to find all the information you need in one place.
                </p>
                <p className="about-us">
                    Our website also helps you keep track of your academic progress, allowing you to view your qualifications and monitor your program requirements for the upcoming semester. By offering a comprehensive overview of your academic journey, we aim to make your educational experience more organized and less stressful.
                </p>
                <p className="about-us">
                    Additionally, we provide a visual representation of your course roadmap. This feature simplifies the complex task of tracking your progress, making it easier to understand where you stand and what steps you need to take to achieve your academic goals. Whether you’re planning your next semester or reviewing your achievements, our tools are here to support you every step of the way.
                </p>
                <p className="about-us">
                    We hope it becomes a valuable resource in your academic journey.
                </p>
            </Container>
        </>
    );
}

export default AboutUs;
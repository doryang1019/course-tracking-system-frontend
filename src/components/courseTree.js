import { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Modal from 'react-bootstrap/Modal'
import '../card.css'

const CourseTree = ({ id, courseTreeById }) => {
    const getCourseById = (id) => {
        for (const departmentCourses of courseTreeById) {
            const course = departmentCourses.find(course => course.id === id);
            if (course) return course;
        }
        return null; // or handle the case where no course is found
    };

    const course = getCourseById(id);
    const childIds = course.childIds;
    const [open, setOpen] = useState(false);

    return (
        <>
            <Col className="d-flex justify-content-center align-items-center mb-4">
                <Card className='circle-card' border='secondary' onClick={() => setOpen(!open)}>
                    <Card.Body>
                        {course.code}
                    </Card.Body>
                </Card>
            </Col>

            <Modal show={open} onHide={() => setOpen(!open)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{course.code} - {course.title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    Description: {course.description}
                </Modal.Body>

                <Modal.Footer>
                    <small>Offer Terms: {course.terms} fall</small>
                </Modal.Footer>
            </Modal>

            {childIds.length > 1 ? (
                <Container className="d-flex mb-4" style={{ maxWidth: '' }}>
                            {childIds.map(childId => (
                                <Container key={childId} style={{ maxWidth: '' }}>
                                    <CourseTree
                                        id={childId}
                                        courseTreeById={courseTreeById}
                                    />
                                </Container>
                            ))}
                </Container>
            ) : (
                childIds.length === 1 && (
                    <>
                        {childIds.map(childId => (
                            <CourseTree
                                key={childId}
                                id={childId}
                                courseTreeById={courseTreeById}
                            />
                        ))}
                    </>
                )
            )}
        </>
    )
}

export default CourseTree;
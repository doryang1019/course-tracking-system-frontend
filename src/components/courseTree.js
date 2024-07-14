import { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Collapse from 'react-bootstrap/Collapse'
import '../card.css'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
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
                <Card className='course-card m-3' border='secondary' onClick={() => setOpen(!open)}>
                    <Card.Header>{course.department} {course.code}</Card.Header>
                    <Card.Body>
                        <Card.Title>{course.title}</Card.Title>
                        <Card.Text>
                            Click to learn more
                        </Card.Text>
                    </Card.Body>
                    <Collapse in={open}>
                        <Card.Footer id={id}>
                            {course.description}
                        </Card.Footer>
                    </Collapse>
                </Card>
            </Col>
            {childIds.length > 1 ? (
                <Container className="d-flex mb-4" style={{ maxWidth: '' }}>
                    {childIds.length > 0 && (
                        <>
                            {childIds.map(childId => (
                                <Container key={childId} style={{ maxWidth: '' }}>
                                    <CourseTree
                                        id={childId}
                                        courseTreeById={courseTreeById}
                                    />
                                </Container>
                            ))}
                        </>
                    )}
                </Container>
            ) : (
                childIds.length > 0 && (
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
import { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Collapse from 'react-bootstrap/Collapse'
import '../card.css'

const CourseTree = ({ id, courseTreeById }) => {
    const course = courseTreeById[id];
    const childIds = course.childIds;
    const [open, setOpen] = useState(false);
    return (
        <>
            <Card className='course-card' border='secondary' onClick={() => setOpen(!open)}>
                <Card.Header>{course.department} {course.code}</Card.Header>
                <Card.Body>
                    <Card.Title>{course.title}</Card.Title>
                    <Card.Text>
                        Click to learn more
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='course-card' text='dark' bg='light'>
                <Collapse in={open}>
                    <Card.Text id={id}>
                        {course.description}
                    </Card.Text>
                </Collapse>
            </Card>


            <br />
            {childIds.length > 0 && (
                <>
                    {childIds.map(childId => (
                        <CourseTree
                            key={childId}
                            id={childId}
                            courseTreeById={courseTreeById}
                        />
                    ))}
                </>
            )}
        </>
    )
}

export default CourseTree;
import { useState } from 'react'
import { sampleData } from '../sampleData'
import Form from 'react-bootstrap/Form'
import CourseTree from './courseTree'
import Container from 'react-bootstrap/Container'

const SearchCourse = () => {
    const [selectedCourseId, setSelectedCourseId] = useState(0);

    const listCourse = sampleData.map(course => (
        <option key={course.id} value={course.id}>{course.department} {course.code}</option>
    ))

    return (
        <>
            <div>Search a course</div>
            <br />
            <Container>
            <Form.Select aria-label="Default select example" onChange={(e) => { setSelectedCourseId(e.target.value) }}>
                <option>Select a course</option>
                {listCourse}
            </Form.Select>
            <br />
            <CourseTree
                id={selectedCourseId}
                courseTreeById={sampleData}
            />
            </Container>
        </>
    );
}

export default SearchCourse;
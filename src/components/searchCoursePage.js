import { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import CourseTree from './courseTree'
import Container from 'react-bootstrap/Container'
import SelectFormGroup from './selectFormGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import axios from 'axios'

const SearchCourse = () => {
    const [coursesData, setCoursesData] = useState([]);
    const [selectedId, setSelectedId] = useState('');
    useEffect(() => {
        const loadAllCoursesInfo = async () => {
            const response = await axios.get('courses');
            const coursesInfo = response.data;
            setCoursesData(coursesInfo);
        }
        loadAllCoursesInfo();
    }, [])
    //need api to get a list of department from selected institution
    const listInstitution = <option value="DouglasCollege">Douglas College</option>
    //need api to get a list of program of selected department
    const listDepartment = <option value='CBA'>Commerce and Business Administration</option>
    //need one api to get a list of course id
    const listProgram = <option value='PBD-CSIS'>PBD-Computer Studies and Information Systems</option>

    const listCourse = coursesData.flatMap(programCourses =>
        programCourses.map(course => (
            <option key={course.id} id={course.id} value={course.id}>
                {course.code} - {course.title}
            </option>
        ))
    );
    
    const handleChange = (e) => {
        setSelectedId(e.target.value)
    }

    const allCourses = () => {
        return (
            <>
                {coursesData.map(
                    departmentCourses => {
                        return (
                            <Container as={Col} className='d-inline-block border border-warning m-3' key={departmentCourses[0].id}>
                                <CourseTree
                                    id={departmentCourses[0].id}
                                    courseTreeById={coursesData}
                                />
                            </Container>
                        )
                    }
                )}
            </>
        )
    }

    const aCourse = () => {
        return (
            <Container className='d-inline-block justify-content-center align-items-center'>
                <CourseTree
                    id={selectedId}
                    courseTreeById={coursesData}
                />
            </Container>
        )
    }

    return (
        <>
            <h1><b>Search a course</b></h1>
            <br />
            <Container className='d-flex justify-content-center align-items-center' style={{ width: '40rem' }}>
                <Form style={{ width: '60rem' }}>
                    <SelectFormGroup
                        controlId='institution'
                        label='Institution'
                        name='institution'
                        onChange={handleChange}
                        options={listInstitution}
                    />
                    <SelectFormGroup
                        controlId='department'
                        label='Department'
                        name='department'
                        onChange={handleChange}
                        options={listDepartment}
                    />
                    <SelectFormGroup
                        controlId='program'
                        label='Program'
                        name='program'
                        onChange={handleChange}
                        options={listProgram}
                    />
                    <SelectFormGroup
                        controlId="course"
                        label="Course"
                        name='courseId'
                        onChange={handleChange}
                        options={listCourse}
                    />
                </Form>
            </Container>

            <br />
            <Container className="horizontal-scroll">
                <Row style={{ display: 'inline-flex', width: 'auto' }}>
                    {selectedId === "" ? allCourses() : aCourse()}
                </Row>
            </Container>
        </>
    );
}

export default SearchCourse;
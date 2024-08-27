import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import CourseTree from '../components/courseTree'
import Container from 'react-bootstrap/Container'
import SelectFormGroup from '../components/selectFormGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import axios from 'axios'

const SearchCourse = () => {
    const [courseListOption, setCourseListOption] = useState([]);
    const [coursesData, setCoursesData] = useState([]);
    const [selectedInstitution, setSelectedInstitution] = useState('');
    const [selectedDepartment, setSelectedDepartment] = useState('');
    const [selectedCourseId, setSelectedCourseId] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    if (selectedInstitution) { } //get a list of department
    const listInstitution = <option value="DouglasCollege">Douglas College</option>
    if (selectedDepartment) { } // get a list of program
    const listDepartment = <option value='CBA'>Commerce and Business Administration</option>
    const listSubject = <option value="CSIS">Computer Studies and Information Systems</option>
    const listCourse = courseListOption.map(course => (
        <option key={course.id} id={course.id} value={course.id}>
            {course.code} - {course.name}
        </option>
    ));

    const handleSubjectChange = async (e) => {
        const subjectId = e.target.value;
        setLoading(true);
        setError(null);
        if (!subjectId) {
            setCoursesData([]);
            setLoading(false);
            setCourseListOption([]);
            setSelectedCourseId('');
            return;
        }
        try {
            // const response = await axios.get(`courses/${subjectId}`);
            const coursesResponse = await axios.get(`courses`);
            setCoursesData(coursesResponse.data);

            // const res = await axios.get(`courses/list/${subjectId}`);
            const listResponse = await axios.get(`courses/list`);
            const listData = listResponse.data;
            setCourseListOption(listData);
        } catch (err) {
            setError('Failed to fetch courses. Please try again.');
            console.error('Error fetching courses:', err);
        } finally {
            setLoading(false);
        }
    };

    const allCourses = () => {
        return (
            <>
                {coursesData.map(
                    departmentCourses => {
                        return (
                            <Container as={Col} className='d-inline-block' key={departmentCourses[0].id}>
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
                    id={selectedCourseId}
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
                        onChange={e => setSelectedInstitution(e.target.value)}
                        options={listInstitution}
                    />
                    <SelectFormGroup
                        controlId='department'
                        label='Department'
                        name='department'
                        onChange={e => setSelectedDepartment(e.target.value)}
                        options={listDepartment}
                    />
                    <SelectFormGroup
                        controlId="subject"
                        label="Subject"
                        name="subject"
                        onChange={handleSubjectChange}
                        options={listSubject}
                    />
                    <SelectFormGroup
                        controlId="course"
                        label="Course"
                        name='courseId'
                        onChange={e => setSelectedCourseId(e.target.value)}
                        options={listCourse}
                    />
                </Form>
            </Container>

            <br />
            {loading && <p>loading...</p>}
            {error && <p>error</p>}
            <Container className="horizontal-scroll">
                <Row style={{ display: 'inline-flex', width: 'auto' }}>
                    {selectedCourseId === "" ? allCourses() : aCourse()}
                </Row>
            </Container>
        </>
    );
}

export default SearchCourse;
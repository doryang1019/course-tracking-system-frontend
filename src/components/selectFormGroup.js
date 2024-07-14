import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const SelectFormGroup = ({ controlId, label, name, onChange, options }) => {
    return (
        <Form.Group as={Row} controlId={controlId}>
            <Form.Label column sm='2'>{label}: </Form.Label>
            <Col sm='12' md='10'>
                <Form.Select className='d-inline-block mb-4' name={name} onChange={onChange}>
                    <option value="">Select a {controlId} </option>
                    {options}
                </Form.Select>
            </Col>
        </Form.Group>
    )
}

export default SelectFormGroup
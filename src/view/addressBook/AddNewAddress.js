import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'

const AddNewAddress = () => {
    return (
        <>
            <div className='w-25 mx-auto mt-3 main-div-text'>
                <p>Add /Edit Address</p>
            </div>
            <div className='login-div'>
                <div>
                    <Form className='w-100 mt-5 form-div'>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="fname">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" name='fname' placeholder="" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="lname">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" name='lname' placeholder="" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group className="mb-3" controlId="address">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" name='address' placeholder="" />
                            <Form.Control type="text" name='address1' className='mt-2' placeholder="" />
                        </Form.Group>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="city">
                                    <Form.Label>City </Form.Label>
                                    <Form.Control type="text" name='city' placeholder="" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="state">
                                    <Form.Label>State</Form.Label>
                                    <Form.Control type="text" name='state' placeholder="" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group className="mb-3" controlId="country">
                            <Form.Label>Country</Form.Label>
                            <Form.Control type="text" name='country' placeholder="" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="telephone">
                            <Form.Label>Telephone</Form.Label>
                            <Form.Control type="text" name='telephone' placeholder="" />
                        </Form.Group>
                        <Button variant="primary" type="submit" className='login-btn-div'>
                            Save Address
                        </Button>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default AddNewAddress
import { useMutation } from '@apollo/react-hooks'
import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addNewAddress } from '../../redux/actions/AddAddressActiosn'
import { createNewaddress } from '../../utils/QueryAndMutations'

const AddNewAddress = () => {
    // createNewaddress
    const dispatch = useDispatch()
    const [inputs, setInputs] = useState({})
    const token = window.localStorage.getItem('security_token');

    const [loginSubmit] = useMutation(createNewaddress,{
        context: {
            headers: {
              "Authorization":`Bearer ${token}`,
            }
          }
    });
    let navigate = useNavigate();

    const onHandelSubmit=()=>{
        console.log('inputs---------',inputs);
        dispatch(addNewAddress(inputs,loginSubmit,navigate))
    }

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
                                    <Form.Control type="text" name='fname'
                                        value={inputs.fname}
                                        onChange={(event) => { setInputs({ ...inputs, ['fname']: event.target.value }) }}
                                        placeholder="" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="lname">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" name='lname'
                                        value={inputs.lname}
                                        onChange={(event) => { setInputs({ ...inputs, ['lname']: event.target.value }) }}
                                        placeholder="" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group className="mb-3" controlId="address">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" name='address'
                                value={inputs.address}
                                onChange={(event) => { setInputs({ ...inputs, ['address']: event.target.value }) }}
                                placeholder="" />
                            <Form.Control type="text" name='address1' className='mt-2' placeholder="" />
                        </Form.Group>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="city">
                                    <Form.Label>City </Form.Label>
                                    <Form.Control type="text" name='city'
                                        value={inputs.city}
                                        onChange={(event) => { setInputs({ ...inputs, ['city']: event.target.value }) }}
                                        placeholder="" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="state">
                                    <Form.Label>State</Form.Label>
                                    <Form.Control type="text" name='state'
                                        value={inputs.state}
                                        onChange={(event) => { setInputs({ ...inputs, ['state']: event.target.value }) }}
                                        placeholder="" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group className="mb-3" controlId="country">
                            <Form.Label>Country</Form.Label>
                            <Form.Control type="text" name='country'
                                value={inputs.country}
                                onChange={(event) => { setInputs({ ...inputs, ['country']: event.target.value }) }}
                                placeholder="" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="telephone">
                            <Form.Label>Telephone</Form.Label>
                            <Form.Control type="text" name='telephone'
                                value={inputs.telephone}
                                onChange={(event) => { setInputs({ ...inputs, ['telephone']: event.target.value }) }}
                                placeholder="" />
                        </Form.Group>
                        <Button variant="primary" onClick={()=>onHandelSubmit()} className='login-btn-div'>
                            Save Address
                        </Button>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default AddNewAddress
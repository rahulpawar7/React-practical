import React, { useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import './styles.css'
import { useDispatch, useSelector } from 'react-redux';
import { getUserLogin } from '../redux/actions/LognAction';
import { useMutation } from '@apollo/react-hooks';
import { LOGINCUSTOMER } from '../utils/QueryAndMutations';
import { useNavigate } from 'react-router-dom';

const Sign = (props) => {
    const dispatch = useDispatch()
    const [inputs, setInputs] = useState({})
    const [loginSubmit] = useMutation(LOGINCUSTOMER);
    let navigate = useNavigate();

    const auth = useSelector(state => state.LoginReducer);
    const token = window.localStorage.getItem('security_token');
    useEffect(() => {
        if (token || auth?.authenticate) {
            navigate("AddressBookList");
        } else {
            navigate("/");
        }
    }, [])

    const onSubmit = () => {
        console.log('inputs----------', inputs);
        dispatch(getUserLogin(inputs, loginSubmit, navigate))
    }
    return (
        <>
            <div className='w-25 mx-auto mt-5 main-div-text'>
                <p> Cutomer Login Page</p>
            </div>
            <div className='login-div'>
                <div>
                    <Form className='w-100 mt-5 form-div'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email"
                                value={inputs.EMAIL}
                                onChange={(event) => { setInputs({ ...inputs, ['EMAIL']: event.target.value }) }}
                                placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password"
                                value={inputs.PASSWORD}
                                onChange={(event) => { setInputs({ ...inputs, ['PASSWORD']: event.target.value }) }}
                                placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" onClick={() => onSubmit()} className='login-btn-div'>
                            Sign In
                        </Button>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default Sign
import React from 'react'
import { Form, Button } from 'react-bootstrap'
import './styles.css'
const Sign = () => {
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
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit" className='login-btn-div'>
                            Sign In
                        </Button>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default Sign
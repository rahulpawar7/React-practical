import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './styles.css'
const Footer = () => {
    return (
        <>
            <div className="bg-light footer-main mt-5">
                <Row className='w-100'>
                    <Col><p className='text-center common-footer-col'>Cookie Policy - Legal Notice</p></Col>
                    <Col><p className='text-center common-footer-col'>Copyright &#169; 2021 Made with ♥ from seepossible</p></Col>
                    <Col>
                        <p className='text-center common-footer-col footer-icons'>
                            <i className="fa fa-facebook fa-facebook"></i> <i className="fa fa-instagram fa-instagram"></i> <i className="fa fa-twitter fa-twitter"></i> <i className="fa fa-pinterest fa-pinterest"></i>
                        </p>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Footer
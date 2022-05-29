import React from 'react'
import { Col, Row, Card } from 'react-bootstrap'
import './styles.css'
const CommonCard = (props) => {
    const { id, city, country_code, street, telephone } = props?.getValue


    return (
        <div className="col-md-4 col-8">
            <Card>
                <Card.Body>
                    <Row>
                        <Col><Card.Text className='text-display1'><span className='badge bg-primary text-wrap'>Address Id:</span>{id}</Card.Text></Col>
                        <Col onClick={() => props?.onEditClick(id)}><Card.Text className='text-display2'><i className="fa fa-pencil fa-pencil"></i></Card.Text></Col>
                    </Row>
                    <Card.Text>
                        <span><span className='fw-bold'>Address :</span> {street[0]}</span><br></br>
                        <span><span className='fw-bold'>City :</span> {city}</span><br></br>
                        <span><span className='fw-bold'>Country Code :</span> {country_code}</span><br></br>
                        {/* <p>{city}</p>
                        <p>{city}</p> */}
                    </Card.Text>
                    <Row>
                        <Col><Card.Text className='text-display1'><span><span className='fw-bold'>Telephone :</span> {telephone}</span><br></br></Card.Text></Col>
                        <Col><Card.Text className='text-display2'><i className="fa fa-trash fa-trash"></i></Card.Text></Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CommonCard
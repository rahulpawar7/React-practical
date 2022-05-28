import React from 'react'
import { Col, Row, Card } from 'react-bootstrap'
import './styles.css'
const CommonCard = (props) => {
    return (
        <div className="col-md-4 col-8">
            <Card>
                <Card.Body>
                    <Row>
                        <Col><Card.Text className='text-display1'>{props.title}</Card.Text></Col>
                        <Col><Card.Text className='text-display2'><i className="fa fa-pencil fa-pencil"></i></Card.Text></Col>
                    </Row>
                    <Card.Text>
                        Some quick example text
                    </Card.Text>
                    <Row>
                        <Col><Card.Text className='text-display1'>1</Card.Text></Col>
                        <Col><Card.Text className='text-display2'><i className="fa fa-trash fa-trash"></i></Card.Text></Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CommonCard
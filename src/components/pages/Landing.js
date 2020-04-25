// styles import
import  '../../styles/landing.scss'

// needed components
import React, {Component} from 'react'
import { Container,Row,Col } from 'reactstrap'

class Landing extends Component {
    render (){
        return(
            <div className='main'>
                <Container className='mainContainer'>
                    <Row  lg='2'>
                        <Col className='eightyPx'>Hire me to build your next website</Col>
                        <Col><img  src="https://via.placeholder.com/500x500?text=Picture+Selction+Needed" alt="Web Designer"/> </Col>
                    </Row>
                </Container>
            </div>
        )  // End Return
    } // End Render
}

export default Landing
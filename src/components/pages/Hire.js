//styles
import '../../styles/hireMe.scss'
// components
import React, {Component} from 'react'
import { Button, 
    Form, 
    FormGroup, 
    Label, 
    Input, 
    Container} from 'reactstrap'
import Recaptcha from 'react-recaptcha'

class Hire extends Component {
    constructor(props){
        super(props);
        this.state = {
            isHuman: false
        }
    }


    onloadCallback = () => {
        console.log('captcha loaded')
    }

    verifyCallback = (res) => {
        if(res){
            this.setState({isHuman: true})
        }
        else {
            this.setState({isHuman:false})
        }
    }

    humanCheck = (event) => {
        event.preventDefault()
        console.log('humanCheck')
        alert("Test")
       /* if(isHuman){
            alert('Thank You for your intrest. We will get in contact with you shortly')
        }
        else{
            alert('You must be a robot. Please check the reCaptcha')
        }*/

    }
    render (){
        return(
            <div className='main'>
               <Container className='hireForm'>
                   <Form>
                       <FormGroup className='subHeader'>
                            <h2>If you would like to contact me please fill out the form below and click submit.</h2>                    
                       </FormGroup>
                       <FormGroup>
                           <Label className='label'>Company Name:</Label>
                           <Input />
                       </FormGroup>
                       <FormGroup>
                           <Label className='label'>Name:</Label>
                           <Input />
                       </FormGroup>
                       <FormGroup>
                           <Label className='label'>What can I help you with?</Label>
                           <Input type='textarea' />
                       </FormGroup>
                       <FormGroup>
                           <Recaptcha 
                           sitekey='6LesSu8UAAAAAFupkFF4jVLx1cnVQc4W41Zv_qs7'
                           render='explicit'
                           onloadCallback={this.onloadCallback}
                           verifyCallback={this.verifyCallback}/>
                       </FormGroup>
                       <Button className="submitBtn" type='submit' onClick={() => this.humanCheck()}>Submit</Button>
                   </Form>
               </Container>
            </div>
        )  // End Return
    } // End Render
}

export default Hire
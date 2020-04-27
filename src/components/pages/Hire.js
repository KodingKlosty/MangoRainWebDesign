import React, {Component} from 'react'
import { Button, 
    Form, 
    FormGroup, 
    FormText,
    Label, 
    Input, 
    Container} from 'reactstrap'

class Hire extends Component {
    render (){
        return(
            <div className='main'>
               <Container>
                   <Form className='hireForm'>
                       <FormGroup>
                           <FormText>
                                If you would like to contact me please fill out the form below.
                           </FormText>
                       </FormGroup>
                       <FormGroup>
                           <Label>Company Name:</Label>
                           <Input />
                       </FormGroup>
                       <FormGroup>
                           <Label>Name:</Label>
                           <Input />
                       </FormGroup>
                       <FormGroup>
                           <Label>Message:</Label>
                           <Input type='textarea' />
                       </FormGroup>
                   </Form>
               </Container>
            </div>
        )  // End Return
    } // End Render
}

export default Hire
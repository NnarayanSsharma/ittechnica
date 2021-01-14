import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import "./ContactUs.css"
import GoogleMapOpenLayer from './GoogleMapOpenLayer';

export class ContactUs extends Component {
    render() {
        return (
            <div className="contact-us">
                <div>
                    <div>
                        <h1>Talk To Us</h1>
                    </div>
                    <div>
                        <h2>
                            <p>Want to know more about Ittechnica?
                            <br/>Please get in touch with us.</p>
                        </h2>
                        <div>
                            <div>
                                <h3>Texas (USA)</h3>

                                <div>
                                    <GoogleMapOpenLayer />
                                </div>

                                <p>1825 W Walnut Hill Ln Ste 120
                                <br/>RM 402, Irving, TX 75038,</p>

                                <div>
                                    <h3>774 271 7831
                                    <br/>214 541 9531</h3>
                                </div>


                                <h3>Fax: (844)296-8483</h3>

                                <h3>hr@ittechnica.com</h3>
                            </div>
                            <div>
                                <Form>
                                    <FormGroup>
                                        <label for="email"></label>
                                        <Input type="text" name="name" id="name" placeholder="Write your name..." />
                                    </FormGroup>    

                                    <FormGroup>
                                        <label for="email"></label>
                                        <Input type="email" name="email" id="exampleEmail" placeholder="Enter email address..." />
                                    </FormGroup>
                                    
                                    <FormGroup>
                                        <label for="email"></label>
                                        <textarea class="form-control" rows="5" id="comment" placeholder="Write..."/>
                                        {/* <Input type="textarea" name="text" id="exampleText" placeholder="Write..." row= "5"/> */}
                                    </FormGroup>
                                    <Button color="primary">Get In Touch</Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactUs

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
    Form,
    FormGroup,
    ControlLabel,
    FormControl,
    Button,
    Col
} from 'react-bootstrap';

import RegisterAction from '../actions/RegisterAction.js';

class Register extends Component {
    constructor(props) {
        super(props);
        this.handleRegistrationSubmit = this.handleRegistrationSubmit.bind(this);
    }

    handleRegistrationSubmit(event) {
        event.preventDefault();
        var username = event.target[0].value;
        var email = event.target[1].value;
        var password = event.target[2].value;
        var repeatPassword = event.target[3].value;

        if (password !== repeatPassword) {
            alert('Passwords do not match');
        } else {
            this.props.registerAction({
                username: username,
                email: email,
                password: password
            });
        }
    }

    render() {
        return(
            <Form horizontal onSubmit={this.handleRegistrationSubmit}>
                <FormGroup controlId="formHorizontalName">
                    <Col componentClass={ControlLabel} sm={2}>
                        Username
                    </Col>
                    <Col sm={10}>
                        <FormControl type="text" placeholder="Full Name"/>
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2}>
                        Email
                    </Col>
                    <Col sm={10}>
                        <FormControl type="email" placeholder="Email"/>
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel} sm={2}>
                        Password
                    </Col>
                    <Col sm={10}>
                        <FormControl type="password" placeholder="Password"/>
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel} sm={2}>
                        Repeat Password
                    </Col>
                    <Col sm={10}>
                        <FormControl type="password" placeholder="Password"/>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <Button bsStyle="danger" bsSize="small" type="submit">
                            Register
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        )
    }
}

function mapStateToProps(state) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        registerAction: RegisterAction
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);

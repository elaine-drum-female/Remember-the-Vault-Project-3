import React, { Component } from 'react';
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";

class NewUser extends Component {
    state = {
        firstName:"",
        lastName:"",
        email:"",
        password:""
    }

    render() {
        return (
            <div>
                <Container style={{marginTop:100}}>
                <header>
                    <h2>Welcome New User</h2>
                </header>
                    <Row>
                        <Col size="sm-12">
                            <form style={{
                                margin: '0 auto',
                                border: '3px solid #ccc',
                                padding: '40px'}}
                                >
                                <input 
                                    placeholder="First name"
                                    value={this.state.firstName}
                                />
                                  <input 
                                    placeholder="Last name"
                                    value={this.state.lastName}
                                />
                                    <input 
                                    placeholder="Email"
                                    value={this.state.email}
                                />
                                    <input 
                                    placeholder="Password"
                                    type="password"
                                    value={this.state.password}
                                />
                            </form>
                        </Col>
                    </Row>
                </Container>
              
            </div>
        );
    }
}

export default NewUser;
import React from 'react';
import MyButton from "../utils/button";
import Login from "../Register_Login/login";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import "./style.css";

const RegisterLogin = () => {
    return (
        <div className="jumbotron jumbotron-fluid mybackground">
            <Container>
                <Row>
                    <Col size="lg-6">
                        <span className="greeting">Hello!</span>
                        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra
                            attention to featured content or information.
                        </p>
                        <p>It uses utility classes for typography and spacing to space content out within the larger
                        container.</p>
                        <MyButton
                        type="default"
                        title="Register Here"
                        linkTo="/register"    
                        />
                    </Col>
                    <Col size="lg-6">
                        <form>
                            <Login />
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default RegisterLogin;
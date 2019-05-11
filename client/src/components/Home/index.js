import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div>
                <Link to="/register_login">Register Login</Link>
            </div>
        );
    }
}

export default Home;


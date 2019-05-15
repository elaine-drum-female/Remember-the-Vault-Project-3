import React, { Component } from 'react';
import Footer from "../Header_Footer/Footer";
import Jumbotron from '../Jumbotron';

class Wrapper extends Component {
    render() {
        return (
            
            <div>
                <Jumbotron/>
                <Footer/>
            </div>
            
        );
    }
}

export default Wrapper;
import React from 'react';
import MyButton from "../utils/button";
import Login from "../Register_Login/login";
import "./style.css";

const RegisterLogin = () => {
    return (
        <div className="page_wrapper">
            <div className="register_login_container">
                <div className="left">
                    <h1> New Customers</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada auctor lacus, quis ultricies magna fermentum ac. Quisque tristique dolor nec ultrices sodales. Sed sodales id magna maximus semper. Proin ultrices, lectus in imperdiet tincidunt, felis sapien rhoncus metus, nec sodales neque velit quis nisl. Fusce posuere fringilla iaculis. Maecenas.</p>
                    <MyButton 
                        type="default"
                        title="Register Here"
                        linkTo="/register"
                        
                    />
                </div>
                <div className="right">
                    <h2>Registered Customers</h2>
                    <p>If you have an account please log in</p>
                    <Login />
                </div>
            </div>
        </div>
    );
};

export default RegisterLogin;
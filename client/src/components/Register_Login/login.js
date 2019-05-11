import React, { Component } from 'react';

class Login extends Component {
    state = {
        formError: false,
        formSuccess: '',
        formData: {
            email: {
                element: 'input',
                value:'',
                config: {
                    name: 'email_input',
                    type:'email',
                    placeholder: "Please enter your email"
                },
                validation: {
                    required:true,
                    email: true
                },

                valid:false,
                validationMessage = ''
            },

            password: {
                element: 'input',
                value:'',
                config: {
                    name: 'password_input',
                    type:'password',
                    placeholder: "Please enter your password"
                },
                validation: {
                    required:true
                },

                valid:false,
                validationMessage = ''
            }

        }


    }


    submitForm = () => {

    }
    render() {
        return (
            <div className="signin_wrapper">
                <form onSubmit={(event) => this.submitForm(event)}>
                </form>
            </div>
        );
    }
}

export default Login;
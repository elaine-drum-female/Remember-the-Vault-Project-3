import React, { Component } from 'react';
import FormField from "../utils/Form/formfield";

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
                validationMessage: ''
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
                validationMessage:''
            }

        }


    }

    updateForm = () => {

    }

    submitForm = () => {

    }
    render() {
        return (
            <div className="signin_wrapper">
                <form onSubmit={(event) => this.submitForm(event)}>
                    <FormField
                        id={'email'}
                        formData={this.state.formData.email}
                        change={(element)=> this.updateForm(element)}
                    />
                </form>
            </div>
        );
    }
}

export default Login;
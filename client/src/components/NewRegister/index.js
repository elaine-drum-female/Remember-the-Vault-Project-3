import React, { Component } from 'react';

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
               <form>
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
            </div>
        );
    }
}

export default NewUser;
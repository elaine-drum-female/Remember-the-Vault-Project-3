import React, { Component } from 'react';

class Wrapper extends Component {
    render() {
        return (
            <div>
                <div>
                    {this.props.children}
                </div>
                
            </div>
        );
    }
}

export default Wrapper;
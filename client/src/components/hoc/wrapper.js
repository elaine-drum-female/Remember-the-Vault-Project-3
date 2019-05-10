import React, { Component } from 'react';

class Wrapper extends Component {
    render() {
        return (
            <div>
                HEADER
                <div>
                    {this.props.children}
                </div>
                FOOTER
            </div>
        );
    }
}

export default Wrapper;
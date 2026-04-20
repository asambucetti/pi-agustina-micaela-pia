import React, { Component } from 'react';
import Cookies from 'universal-cookie';

const cookies = new Cookies()

class Logout extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };


    logout() {
        cookies.remove('auth-user')
        this.props.history.push("/Login");
    };

    render() {
        return (
            <button
                type="submit"
                className="btn btn-primary btn-block"
                onClick={(event) => this.logout(event)}
            >
                Logout
            </button>
        );
    }
}


export default Logout;
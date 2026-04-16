import React, { Component } from 'react';
import Cookies from 'universal-cookie';

const cookies = new Cookies()

class MiPerfil extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };


    logout() {
        cookies.remove('user-auth-cookie')
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


export default MiPerfil;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';

const cookies = new Cookies()

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            error: ""
        };
    }


    render() {
        return (
            <div>
                <h2 className="alert alert-primary">Login</h2>

                <div className="row justify-content-center">
                    <div className="col-md-6">

                        <FormLogin />

                    </div>
                </div>
            </div>
        )
    }
}

export default Login;
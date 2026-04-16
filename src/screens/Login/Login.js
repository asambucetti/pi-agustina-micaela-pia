import React from 'react';
import FormLogin from "../../components/FormLogin/FormLogin";

function Login() {
    return (
        <div>
            <h2 className="alert alert-primary">Login</h2>

            <div className="row justify-content-center">
                <div className="col-md-6">

                    <FormLogin/>

                </div>
            </div>
        </div>
    )
}


export default Login;
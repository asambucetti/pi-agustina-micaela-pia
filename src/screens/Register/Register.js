import React, { Component } from 'react';
import FormRegister from "../../components/FormRegister/FormRegister"

function Register(props) {
    return (
        <div>
            <h2 className="alert alert-primary">Registro</h2>

            <div className="row justify-content-center">
                <div className="col-md-6">
                    <FormRegister history={props.history} />
                </div>
            </div>
        </div>

    )
}

export default Register;




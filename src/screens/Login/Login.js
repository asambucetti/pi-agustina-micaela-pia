import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            error: ""
        };
    }

    controlarCambios(event) {
        this.setState({
            [event.target.id]: event.target.value
        }
        );
    }

    evitarSubmit(event) {
        event.preventDefault();

        let storage = localStorage.getItem('storage');

        if (storage !== null) {
            storage = JSON.parse(storage);
        } else {
            storage = []
        }



        let usuarioExistente = false;

        for (let i = 0; i < storage.length; i++) {
            if (
                storage[i].email === this.state.email &&
                storage[i].password === this.state.password
            ) {
                usuarioExistente = true;
            }

            if (usuarioExistente) {
                document.cookie = "sesion-true";
            } else {
                this.setState({ error: "Credenciales incorrectas" });
            }
        }
    }



    render() {
        return (
            <div>
                <h2 className="alert alert-primary">Login</h2>

                <div className="row justify-content-center">
                    <div className="col-md-6">

                        <form onSubmit={(event) => this.evitarSubmit(event)}>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="Ingresá tu email"
                                    onChange={(event) => this.controlarCambios(event)} value={this.state.email} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Contraseña</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    placeholder="Ingresá tu contraseña"
                                    onChange={(event) => this.controlarCambios(event)} value={this.state.password} />
                            </div>

                            <button type="submit" className="btn btn-primary btn-block">Iniciar sesión</button>
                        </form>

                        <p className="mt-3 text-center">¿No tenés cuenta? <Link to="/Register">Registrarse</Link></p>
                        {this.state.error !== "" ? <p>{this.state.error}</p> : null}
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;
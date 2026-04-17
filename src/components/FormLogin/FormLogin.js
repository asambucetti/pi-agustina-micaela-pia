import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import Cookies from 'universal-cookie';

const cookies = new Cookies()

class FormLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            error: "",
        };
    }


    controlarCambios(event) {
        this.setState({
            [event.target.id]: event.target.value
        }
        );
    }


    submit(event) {
        event.preventDefault();

        const usersStorage = localStorage.getItem("users");

        if (usersStorage === null) {
            this.setState({ error: "Las credenciales ingresadas son inválidas" })
        } else {
            let usersParseado = JSON.parse(usersStorage);
            let usersFiltrado = usersParseado.filter((elemento) => elemento.email === this.state.email);

            if (usersFiltrado.length === 0) {
                this.setState({ error: "El usuario ingresado no existe" });
            } else {
                let usuario = usersFiltrado[0];

                if (usuario.password !== this.state.password) {
                    this.setState({ error: "Las credenciales ingresadas son inválidas" });
                } else {
                    sessionStorage.setItem("usuarioEnSesion", JSON.stringify({ sesionActiva: true }));

                    //cookie
                    cookies.set('auth-user', this.state.email);

                    // redirige al usuario a la ruta home
                    this.props.history.push("/");
                }
            }
        }
    };


    render() {
        return (
            <div>
                <form onSubmit={(event) => this.submit(event)}>
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
        )
    }


}

export default withRouter(FormLogin);
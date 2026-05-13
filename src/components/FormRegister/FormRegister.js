import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class FormRegister extends Component{
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
            errorUsername: "",
            errorEmail: "",
            errorPassword: "",
            errorGeneral: ""
        };
    }

    /* uso los corchetes porque evalua el valor como una clave (clave dinamica--> la que pone el usuario*/
    controlarCambios(event) {
        this.setState({
            [event.target.id]: event.target.value
        }
        );
    }

    evitarSubmit(event) {
        event.preventDefault();

        let usuarioACrear = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            createdAt: Date.now()
        }

        if (this.state.username.length < 3 || this.state.username.length > 7) {
            this.setState({ errorUsername: "La extensión del username debe ser de 3 a 7 caracteres" })
            return;
        } else {
            this.setState({ errorUsername: "" })
        }

        if (!this.state.email.includes("@")) {
            this.setState({ errorEmail: "Email mal formateado" })
            return;
        } else {
            this.setState({ errorEmail: "" })
        }

        if (this.state.password.length < 5 || this.state.password.length > 12) {
            this.setState({ errorPassword: "La extensión del password debe ser de 5 a 12 caracteres" })
            return;
        } else {
            this.setState({ errorPassword: "" })
        }

        /*primero debo traer lo que este guardado en el local storage a traves del metodo get,
        luego hago las validaciones necesarias y una vez que este todo correcto, recien ahi se crea
        la cuenta del usuario y se guarda en el localStorage la nueva cuenta creada */
        let usersStorage = localStorage.getItem("users");

        /*si existen usuarios guardados transformo el string en un array usable. 
        si es que no hay datos (else) creo un array para guardar los nuevos datos */
        if (usersStorage !== null) {
            let usersParseado = JSON.parse(usersStorage);

            let usersFiltrado = usersParseado.filter((user) => user.email === this.state.email);

            if (usersFiltrado.length > 0) {
                this.setState({ errorGeneral: "Ya existe un usuario con el email ingresado" })
                return;
            }

            this.setState({ errorGeneral: "" })

            usersParseado.push(usuarioACrear)

            let usersEnJson = JSON.stringify(usersParseado);

            /*Dos parametros, clave y valor. Ejemplo: Storage: "[{ email: 'pia@mail.com', password: '123456' }]" */
            localStorage.setItem("users", usersEnJson)

        }
        else {
            let usersInicial = [usuarioACrear];

            let usersEnJson = JSON.stringify(usersInicial);

            localStorage.setItem("users", usersEnJson)
        }

        /*Redireccion a login */
        this.props.history.push("/Login");
    }



    render() {
        return (
            <div>
                <form onSubmit={(event) => this.evitarSubmit(event)}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="username"
                            className="form-control"
                            id="username"
                            placeholder="Ingresá tu username"
                            onChange={(event) => this.controlarCambios(event)} value={this.state.username} />
                        <p>{this.state.errorUsername}</p>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Ingresá tu email"
                            onChange={(event) => this.controlarCambios(event)} value={this.state.email} />
                        <p>{this.state.errorEmail}</p>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Contraseña</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Ingresá tu contraseña"
                            onChange={(event) => this.controlarCambios(event)} value={this.state.password} />
                        <p>{this.state.errorPassword}</p>
                    </div>

                    <button type="submit" className="btn btn-primary btn-block">Register</button>
                    <p>{this.state.errorGeneral}</p>
                </form>
                <p className="mt-3 text-center">¿Ya tenés cuenta? <Link to="/Login">Iniciar sesión</Link></p>
            </div>
        )
    }

}

export default withRouter(FormRegister);
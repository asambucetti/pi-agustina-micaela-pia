import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            error: ""
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

        /*primero debo traer lo que este guardado en el local storage a traves del metodo get,
        luego hago las validaciones necesarias y una vez que este todo correcto, recien ahi se crea
        la cuenta del usuario y se guarda en el localStorage la nueva cuenta creada */
        let storage = localStorage.getItem('storage');

        /*si existen usuarios guardados transformo el string en un array usable. 
        si es que no hay datos (else) creo un array para guardar los nuevos datos */
        if (storage !== null) {
            storage = JSON.parse(storage);
        }
        else {
            storage = []
        }

        /* VALIDACIONES */
        let mailExistente = false
        for (let i = 0; i < storage.length; i++){
            if(storage[i].email===this.state.email){
                mailExistente = true
            }
        }

        /*Cambio el estado de error */
        if (mailExistente) {
            this.setState({ error: "Email ya registrado" });
        }

        /*Minimo 6 caracteres */
        if (this.state.password.length < 6) {
            this.setState({ error: "Mínimo 6 caracteres" });
        }

        let usuarioNuevo = {
            email: this.state.email,
            password: this.state.password
        };

        storage.push(usuarioNuevo);

        let storageString = JSON.stringify(storage)

        /*Dos parametros, clave y valor. Ejemplo: Storage: "[{ email: 'pia@mail.com', password: '123456' }]" */
        localStorage.setItem('storage', storageString)

        /*creo mi cookie:*/
        document.cookie = "sesion-true";
    }



    render() {
        return (
            <div>
                <h2 className="alert alert-primary">Registro</h2>

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

                            <button type="submit" className="btn btn-primary btn-block">Register</button>
                        </form>
                        <p className="mt-3 text-center">¿Ya tenés cuenta? <Link to="/Login">Iniciar sesión</Link></p>
                        {this.state.error !== "" ? <p>{this.state.error}</p> : null}
                    </div>
                </div>
            </div>
        )
    }

}

export default Register;




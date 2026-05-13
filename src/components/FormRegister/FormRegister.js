import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

function FormRegister(props) {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorUsername, setErrorUsername] = useState("")
    const [errorEmail, setErrorEmail] = useState("")
    const [errorPassword, setErrorPassword] = useState("")
    const [errorGeneral, setErrorGeneral] = useState("")

    function controlarCambios(event) {
        if (event.target.id === "username"){
            setUsername (event.target.value)
        }

        if (event.target.id === "email"){
            setEmail(event.target.value)
        }

        if (event.target.id === "password"){
            setPassword(event.target.value)
        }

    }

    function evitarSubmit(event) {
        event.preventDefault();

        let usuarioACrear = {
            username: username,
            email: email,
            password: password,
            createdAt: Date.now()
        }

        if (username.length < 3 || username.length > 7) {
            setErrorUsername("La extensión del username debe ser de 3 a 7 caracteres")
            return;
        } else {
            setErrorUsername("")
        }

        if (!email.includes("@")) {
            setErrorEmail("Email mal formateado")
            return;
        } else {
            setErrorEmail("")
        }

        if (password.length < 5 || password.length > 12) {
            setErrorPassword("La extensión del password debe ser de 5 a 12 caracteres")
            return;
        } else {
            setErrorPassword("")
        }

        /*primero debo traer lo que este guardado en el local storage a traves del metodo get,
        luego hago las validaciones necesarias y una vez que este todo correcto, recien ahi se crea
        la cuenta del usuario y se guarda en el localStorage la nueva cuenta creada */
        let usersStorage = localStorage.getItem("users");

        /*si existen usuarios guardados transformo el string en un array usable. 
        si es que no hay datos (else) creo un array para guardar los nuevos datos */
        if (usersStorage !== null) {
            let usersParseado = JSON.parse(usersStorage);

            let usersFiltrado = usersParseado.filter((user) => user.email === email);

            if (usersFiltrado.length > 0) {
                setErrorGeneral("Ya existe un usuario con el email ingresado")
                return;
            }

            setErrorGeneral("")

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
        props.history.push("/Login");

    }

    return (
        <div>
            <form onSubmit={(event) => evitarSubmit(event)}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="username"
                        className="form-control"
                        id="username"
                        placeholder="Ingresá tu username"
                        onChange={(event) => controlarCambios(event)} value={username} />
                    <p>{errorUsername}</p>
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Ingresá tu email"
                        onChange={(event) => controlarCambios(event)} value={email} />
                    <p>{errorEmail}</p>
                </div>

                <div className="form-group">
                    <label htmlFor="password">Contraseña</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Ingresá tu contraseña"
                        onChange={(event) => controlarCambios(event)} value={password} />
                    <p>{errorPassword}</p>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Register</button>
                <p>{errorGeneral}</p>
            </form>
            <p className="mt-3 text-center">¿Ya tenés cuenta? <Link to="/Login">Iniciar sesión</Link></p>
        </div>
    )
}



export default withRouter(FormRegister);
import React, { useState } from "react";
import { withRouter } from "react-router-dom";

function Buscador(props){
    const [valor, setValor]  = useState("")

    /* valor es el estado actual y setValor la funcion para cambiarlo */

    /* valor es lo que el usuario escribe en el input */
    function evitarSubmit(event){
        event.preventDefault();
        props.history.push("/SearchResults/" + valor)

    }

    function controlarCambios(event){
        setValor(event.target.value)
    }

    return (
            <>
                <form className="search-form" onSubmit={(event) => evitarSubmit(event)} >
                    <input type="text" placeholder="Buscar..." onChange={(event) => controlarCambios(event)} value={valor} />
                    <button type="submit" className="btn btn-success btn-sm">Buscar</button>
                </form>
            </>
        )
}

export default withRouter(Buscador);


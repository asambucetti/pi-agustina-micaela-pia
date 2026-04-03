import React, { Component } from "react";
import {withRouter} from "react-router-dom";

class Buscador extends Component {

    constructor(props) {
        super(props);
        this.state = {
            datos: [],
            valor: '',
        }

    }


    evitarSubmit(event) {
        event.preventDefault();
        this.props.history.push("/SearchResults/" + this.state.valor)
    }

   
    controlarCambios(event) {
        this.setState({ valor: event.target.value }, () => console.log(this.state.valor))

    }

   
    render() {
        return (
            <>
                <form onSubmit={(event) => this.evitarSubmit(event)} >
                    <input type="text" placeholder="Buscar.." onChange={(event) => this.controlarCambios(event)} value={this.state.valor} />
                    <button type="submit">Buscar</button>
                </form>
            </>
        )


    }
}

export default withRouter (Buscador);


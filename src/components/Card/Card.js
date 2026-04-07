

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Card.css"
class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            textoBoton: "Ver descripción",
            clase: "hide"
        }
    }

    cambio() {
        if (this.state.textoBoton === "Ver descripción") {
            this.setState({
                textoBoton: "Ocultar descripción",
                clase: "show"
            })
        } else {
            this.setState({
                textoBoton: "Ver descripción",
                clase: "hide"
            })
        }
    }
    
    sesionExiste() {
        return document.cookie !== "";
    }


    render() {
        return (
            <article className={this.props.clase}>
                <img
                    src={this.props.img}
                    className="card-img-top"
                    alt={this.props.titulo}
                />
                <div className="cardBody">
                    <h5 className="card-title">{this.props.titulo}</h5>

                    <p className={this.state.clase}>{this.props.descripcion}</p>

                    <button onClick={() => this.cambio()}>
                        {this.state.textoBoton}
                    </button>

                    <Link to={`/detalle/${this.props.id}`}>
                        <button>Ir a detalle</button>
                    </Link>

                    {this.sesionExiste() ? <button>⭐</button> : null}
                </div>
            </article>
        );
    }
}

export default Card;

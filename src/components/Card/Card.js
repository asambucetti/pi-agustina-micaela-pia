import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Card extends Component {
    constructor() {
        super();
        this.state = {
            mostrar: false,
        }
    }

    mostrarDescripcion() {
        this.setState({
            mostrar: !this.state.mostrar
        })
    }

    render() {
        let sesionExiste = localStorage.getItem("usuario");
        const apiKey = "5c6cfdfae06798b19907f4b6448f6847";

        return (

        <article className = "single-card-movie" >
            <img className="card-img-top" src={`https://image.tmdb.org/t/p/w342/${this.props.imagen}`} alt={this.props.titulo} />
            <div className="cardBody">
                <h5 className="card-title">{this.props.titulo}</h5>
                {this.state.mostrar ? <p className="card-text">{this.props.descripcion}</p> : null}

                <button onClick={() => this.mostrarDescripcion()}>Ver descripción</button>

                <Link to={`/detalle/${this.props.id}`}>
                    <button>Ir a detalle</button>
                </Link>

                {sesionExiste ? <button>⭐</button> : null}
            </div>
        </article>
        );
    }

}


export default Card;



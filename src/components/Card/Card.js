

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Card.css"
class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            textoBoton: "Ver descripción",
            clase: "hide",
            textoFavorito: "Agregar a favoritos"
        }
    }

    componentDidMount() {
        let storage = localStorage.getItem(this.props.storageKey);
        storage = JSON.parse(storage);

        if (storage !== null) {
            let esFavorito = storage.includes(this.props.id);

            this.setState({
                textoFavorito: esFavorito ? "Sacar de favoritos" : "Agregar a favoritos"
            });
        }
    }


    cambioDescrip() {
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

    cambioFavorito() {
        let id = this.props.id;
        let storage = localStorage.getItem(this.props.storageKey);
        if (this.state.textoFavorito === "Agregar a favoritos") {

            if (storage === null) {
                let arrayFavoritos = [id];
                let storageString = JSON.stringify(arrayFavoritos)
                localStorage.setItem(this.props.storageKey, storageString);
            } else {
                let arrayFavoritos = JSON.parse(storage);
                arrayFavoritos.push(id);
                let storageString = JSON.stringify(arrayFavoritos);
                localStorage.setItem(this.props.storageKey, storageString);
            }

            this.setState({
                textoFavorito: "Sacar de favoritos"
            });

        } else {
            let storageParse = JSON.parse(storage);
            let storageFiltrado = storageParse.filter((elemento) => elemento !== id);
            let storageString = JSON.stringify(storageFiltrado);
            localStorage.setItem(this.props.storageKey, storageString);
            this.setState({
                textoFavorito: "Agregar a favoritos"
            });
        }
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

                    <button className="btn btn-primary"
                        onClick={() => this.cambioDescrip()}>
                        {this.state.textoBoton}
                    </button>

                    <Link to={`/detalle/${this.props.categoria}/${this.props.id}`} className="btn btn-primary" >
                        <button>Ir a detalle</button>
                    </Link>

                    {this.sesionExiste() ? (
                        <button className="btn btn-primary" 
                        onClick={() => this.cambioFavorito()}>
                            {this.state.textoFavorito}
                        </button>
                    ) : null}
                </div>
            </article>
        );
    }
}

export default Card;

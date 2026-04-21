import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Card.css"
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            textoBoton: "Ver descripción",
            clase: "hide",
            textoFavorito: "Agregar a favoritos",
            visible: true
        }
    }

    componentDidMount() {
    let storage = localStorage.getItem(this.props.storageKey);
    storage = JSON.parse(storage);

    if (storage !== null) {
        let esFavorito = storage.filter((elemento) => elemento == this.props.id);

        this.setState({
            textoFavorito: esFavorito.length > 0 ? "Sacar de favoritos" : "Agregar a favoritos"
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
            let storageFiltrado = storageParse.filter((elemento) => elemento != id); 
            let storageString = JSON.stringify(storageFiltrado);
            localStorage.setItem(this.props.storageKey, storageString);
            this.setState({
                textoFavorito: "Agregar a favoritos",
                visible: false
            });
        }
    }


    render() {
        let usuario = cookies.get('auth-user');

        if (this.state.visible === false) {
            return null;
        }

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

                    <button className="btn btn-primary btn-card"
                        onClick={() => this.cambioDescrip()}>
                        {this.state.textoBoton}
                    </button>

                    <Link to={`/detalle/${this.props.categoria}/${this.props.id}`} className="btn btn-primary btn-card">
                        Ir a detalle
                    </Link>

                    {(usuario !== undefined) ? (
                        <button className="btn btn-primary btn-fav"
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

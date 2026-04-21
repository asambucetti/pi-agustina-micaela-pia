import React, { Component } from 'react';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const apiKey = "5c6cfdfae06798b19907f4b6448f6847";

class Detalle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            detalle: null,
            generos: [],
            textoFavorito: "Agregar a favoritos",
        }
    }

    componentDidMount() {
        let id = this.props.match.params.id;
        let categoria = this.props.match.params.categoria; //pelicula o serie
        let storageKey = categoria === "movie" ? "favoritosPeliculas" : "favoritosSeries";


        //fetch detalle
        fetch(`https://api.themoviedb.org/3/${categoria}/${id}?api_key=${apiKey}`)
            .then(res => res.json())
            .then(data => {
                let storage = localStorage.getItem(storageKey)
                let arrayFavoritos = []

                if (storage !== null) {
                    arrayFavoritos = JSON.parse(storage);
                }

                let esFavorito = arrayFavoritos.includes(data.id);

                this.setState({
                    detalle: data,
                    textoFavorito: esFavorito ? "Sacar de favoritos" : "Agregar a favoritos"
                });
            })
            .catch(error => console.log(error));


        //fetch generos
        fetch(`https://api.themoviedb.org/3/genre/${categoria}/list?api_key=${apiKey}`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    generos: data.genres
                });
            })
            .catch(error => console.log(error));
    }





    cambioFavorito() {
        let categoria = this.props.match.params.categoria;
        let id = this.state.detalle.id
        let storageKey = categoria === "movie" ? "favoritosPeliculas" : "favoritosSeries";
        let storage = localStorage.getItem(storageKey);

        let arrayFavoritos = []

        if (storage !== null) {
            arrayFavoritos = JSON.parse(storage);
        }


        if (this.state.textoFavorito === "Agregar a favoritos") {

            if (!arrayFavoritos.includes(id)) {
                arrayFavoritos.push(id);
            };

            localStorage.setItem(storageKey, JSON.stringify(arrayFavoritos));
            this.setState({
                textoFavorito: "Sacar de favoritos"
            });
        }

        else {

            let filtrado = arrayFavoritos.filter(
                (elemento) => elemento !== id
            );

            localStorage.setItem(storageKey, JSON.stringify(filtrado));

            this.setState({
                textoFavorito: "Agregar a favoritos"
            });
        }
    }


    render() {
        let categoria = this.props.match.params.categoria;
        let usuario = cookies.get('auth-user');

        if (this.state.detalle === null) {
            return <p>Cargando...</p>
        }

        let generosAMostrar = [];

        if (this.state.detalle.genre_ids) {
            generosAMostrar = this.state.generos.filter(genero =>
                this.state.detalle.genre_ids.includes(genero.id)
            );
        } else if (this.state.detalle.genres) {
            generosAMostrar = this.state.detalle.genres;
        }

        return (
            <article className="container">

                {categoria === "movie" ? (
                    <div>
                        <img
                            src={`https://image.tmdb.org/t/p/w342/${this.state.detalle.poster_path}`}
                            alt={this.state.detalle.title}
                        />

                        <div className="cardBody">
                            <h5 className="card-title">{this.state.detalle.title}</h5>

                            <p>Rating: {this.state.detalle.vote_average}</p>
                            <p>Release date: {this.state.detalle.release_date}</p>
                            <p>{this.state.detalle.overview}</p>

                            <p>
                                Genre: {generosAMostrar.map((genero) => (
                                    <span key={genero.id}>{genero.name} </span>
                                ))}
                            </p>

                            {usuario ? (
                                <button className="btn btn-primary btn-fav" onClick={() => this.cambioFavorito()}>
                                    {this.state.textoFavorito}
                                </button>
                            ) : null}
                        </div>
                    </div>

                ) : (

                    <div>
                        <img
                            src={`https://image.tmdb.org/t/p/w342/${this.state.detalle.poster_path}`}
                            alt={this.state.detalle.name}
                        />

                        <div className="cardBody">
                            <h5 className="card-title">{this.state.detalle.name}</h5>

                            <p>Rating: {this.state.detalle.vote_average}</p>
                            <p>Release date: {this.state.detalle.first_air_date}</p>
                            <p>{this.state.detalle.overview}</p>

                            <p>
                                Genre: {generosAMostrar.map((genero) => (
                                    <span key={genero.id}>{genero.name} </span>
                                ))}
                            </p>

                            {usuario ? (
                                <button className="btn btn-primary btn-fav" onClick={() => this.cambioFavorito()}>
                                    {this.state.textoFavorito}
                                </button>
                            ) : null}
                        </div>
                    </div>
                )}

            </article>
        );
    }
}

export default Detalle;
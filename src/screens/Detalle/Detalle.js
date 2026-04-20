import React, { Component } from 'react';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const apiKey = "5c6cfdfae06798b19907f4b6448f6847";

class Detalle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            detalle: null,
            generos: []
        }
    }

    componentDidMount() {
        let id = this.props.match.params.id;
        let categoria = this.props.match.params.categoria; //pelicula o serie

        //fetch detalle
        fetch(`https://api.themoviedb.org/3/${categoria}/${id}?api_key=${apiKey}`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    detalle: data
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


    agregarAFavoritos() {
        let id = this.state.detalle.id;
        let categoria = this.props.match.params.categoria;

        // elijo clave segun categoria
        let storageKey = categoria === "movie" ? "favoritosPeliculas" : "favoritosSeries";

        let favoritos = JSON.parse(localStorage.getItem(storageKey));

        if (favoritos === null) {
            favoritos = [];
        }

        if (favoritos.includes(id) === false) {
            favoritos.push(id);
        }

        localStorage.setItem(storageKey, JSON.stringify(favoritos))

        // esta alerta esta de mas pero sirve
        alert("Agregado a favoritos");
    }





    render() {
        let categoria = this.props.match.params.categoria;
        let sesionExiste = cookies.get('auth-user');

        console.log(cookies.get('auth-user'));


        if (this.state.detalle === null) {
            return <p>Cargando...</p>
        }



        let generosAMostrar = [];

        // Caso 1: detalle trae genre_ids
        if (this.state.detalle.genre_ids) {
            generosAMostrar = this.state.generos.filter(genero => // Con filter, me quedo solamente con los géneros cuyo id esté incluido dentro de genre_ids
                this.state.detalle.genre_ids.includes(genero.id)
            );
        }

        // Caso 2: detalle trae genres
        else if (this.state.detalle.genres) {
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
                                Genre: {generosAMostrar.map((genero, i) => (
                                    <span key={genero.id}>
                                        {genero.name}
                                    </span>
                                ))}
                            </p>


                            {sesionExiste ? <button onClick={this.agregarAFavoritos}>⭐ ❌</button> : null}
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
                                Genre: {generosAMostrar.map((genero, i) => (
                                    <span key={genero.id}>
                                        {genero.name} 
                                    </span>
                                ))}
                            </p>


                            {sesionExiste ? <button onClick={this.agregarAFavoritos}>⭐</button> : null}
                        </div>
                    </div>


                )}

            </article>
        );

    }
}

export default Detalle;
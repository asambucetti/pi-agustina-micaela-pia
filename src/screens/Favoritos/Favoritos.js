
import React, { Component } from 'react';
import Card from '../../components/Card/Card';

const apiKey = "5c6cfdfae06798b19907f4b6448f6847";

class Favoritos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculasFavoritas: [],
            seriesFavoritas: [],
            cargandoPeliculas: true,
            cargandoSeries: true
        };
    }

    componentDidMount() {
        let storagePeliculas = localStorage.getItem("favoritosPeliculas");
        storagePeliculas = JSON.parse(storagePeliculas);

        if (storagePeliculas === null ) {
            this.setState({
                peliculasFavoritas: [],
                cargandoPeliculas: false
            });

        } else {
            let peliculasRecuperadas = [];

            for (let i = 0; i < storagePeliculas.length; i++) {
                fetch(`https://api.themoviedb.org/3/movie/${storagePeliculas[i]}?api_key=${apiKey}`)
                    .then(response => response.json())
                    .then(data => {
                        peliculasRecuperadas.push(data);

                        if (peliculasRecuperadas.length === storagePeliculas.length) {
                            this.setState({
                                peliculasFavoritas: peliculasRecuperadas,
                                cargandoPeliculas: false
                            });
                        }
                    })
                    .catch(error => console.log(error));
            }
        }

        let storageSeries = localStorage.getItem("favoritosSeries");
        storageSeries = JSON.parse(storageSeries);

        if (storageSeries === null) {
            this.setState({
                seriesFavoritas: [],
                cargandoSeries: false
            });

        } else {
            let seriesRecuperadas = [];

            for (let i = 0; i < storageSeries.length; i++) {
                fetch(`https://api.themoviedb.org/3/tv/${storageSeries[i]}?api_key=${apiKey}`)
                    .then(response => response.json())
                    .then(data => {
                        seriesRecuperadas.push(data);

                        if (seriesRecuperadas.length === storageSeries.length) {
                            this.setState({
                                seriesFavoritas: seriesRecuperadas,
                                cargandoSeries: false
                            });
                        }
                    })
                    .catch(error => console.log(error));
            }
        }
    }

    sesionExiste() {
        return document.cookie.includes("sesion-true");
    }

    render() {
        return (
            <div className="container">
                <h1>UdeSA Movies</h1>

                <h2 className="alert alert-primary">Películas favoritas</h2>
                {this.state.cargandoPeliculas ? (
                    <h3>Cargando películas...</h3>
                ) : this.state.peliculasFavoritas.length === 0 ? (
                    <h3>No hay películas agregadas a favoritos</h3>
                ) : (
                    <section className="row cards" id="movies">
                        {this.state.peliculasFavoritas.map((pelicula, idx) => (
                            <Card
                                key={idx}   
                                id={pelicula.id}
                                categoria="movie"
                                clase="single-card-movie"
                                img={`https://image.tmdb.org/t/p/w342/${pelicula.poster_path}`}
                                titulo={pelicula.title}
                                descripcion={pelicula.overview}
                                storageKey="favoritosPeliculas"
                            />
                        ))}
                    </section>
                )}

                <h2 className="alert alert-warning">Series favoritas</h2>
                {this.state.cargandoSeries ? (
                    <h3>Cargando series...</h3>
                ) : this.state.seriesFavoritas.length === 0 ? (
                    <h3>No hay series agregadas a favoritos</h3>
                ) : (
                    <section className="row cards" id="tv-show">
                        {this.state.seriesFavoritas.map((serie, idx) => (
                            <Card
                                key={idx}
                                id={serie.id}
                                categoria="tv"
                                clase="single-card-tv"
                                img={`https://image.tmdb.org/t/p/w342/${serie.poster_path}`}
                                titulo={serie.name}
                                descripcion={serie.overview}
                                storageKey="favoritosSeries"
                            />
                        ))}
                    </section>
                )}
            </div>
        );
    }
}

export default Favoritos;









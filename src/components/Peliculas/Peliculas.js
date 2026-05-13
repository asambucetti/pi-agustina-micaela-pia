import React, { Component } from 'react';
import Card from '../Card/Card';

const apiKey = "5c6cfdfae06798b19907f4b6448f6847";


class Peliculas extends Component {

    constructor() {
        super();
        this.state = {
            peliculas: [],
            cargandoPeliculas: true
        };
    }

    componentDidMount() {

        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    peliculas: data.results,
                    cargandoPeliculas: false
                });
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <div>
                {this.state.cargandoPeliculas ? (
                    <h3>Cargando Peliculas...</h3>
                ) : this.state.peliculas.length === 0 ? (
                    <h3>No hay Peliculas</h3>
                ) : (
                    <div className="container">
                        <section className="row cards">
                            {this.state.peliculas.map((peli, idx) => (
                                <Card
                                    key={idx}
                                    id={peli.id}
                                    clase="single-card-movie"
                                    categoria="movie"
                                    titulo={peli.title}
                                    descripcion={peli.overview}
                                    img={`https://image.tmdb.org/t/p/w342/${peli.poster_path}`}
                                    storageKey="favoritosPeliculas"
                                />
                            ))}
                        </section>
                    </div>

                )
                }
            </div>
        );
    }
}
export default Peliculas; 
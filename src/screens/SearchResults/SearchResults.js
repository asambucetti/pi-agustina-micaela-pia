
import React, { Component } from "react";
import Card from '../../components/Card/Card';


const apiKey = "5c6cfdfae06798b19907f4b6448f6847"


class SearchResults extends Component {

    constructor(props) {
        super(props);
        this.state = {
            peliculas: [],
            series: [],
            loading: true
        }

    }

    componentDidMount() {
        const valor = this.props.match.params.nombre;



        /*hago dos fetch, primero el de peliculas y despues el de series*/
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${valor}`)
            .then(response => response.json())
            .then(data => this.setState(
                {
                    peliculas: data.results
                }
            ))
            .catch(error => console.log(error));

        fetch(`https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${valor}`)
            .then(response => response.json())
            .then(data => this.setState(
                {
                    series: data.results,
                    loading: false
                }
            ))
            .catch(error => console.log(error));

    }



    render() {
        return (
            <div className="container">


                {this.state.loading ? (<h2>Cargando...</h2>) : (
                    <>
                        <h2 className="alert alert-primary">Resultados de películas</h2>
                        <section className="row cards">
                            {this.state.peliculas.length === 0 ? <h3>No hay resultados</h3> : this.state.peliculas.map((pelicula, idx) =>
                                <Card
                                    key={idx}
                                    id={pelicula.id}
                                    categoria="movie"
                                    clase="single-card-movie"
                                    img={`https://image.tmdb.org/t/p/w342/${pelicula.poster_path}`}
                                    titulo={pelicula.title}
                                    descripcion={pelicula.overview}
                                    storageKey="favoritosPeliculas" />)}
                        </section>

                        <h2 className="alert alert-warning">Resultados de series</h2>
                        <section className="row cards">
                            {this.state.series.length === 0 ? <h3>No hay resultados</h3> : this.state.series.map((serie, idx) =>
                                <Card
                                    key={idx}
                                    id={serie.id}
                                    categoria="tv"
                                    clase="single-card-tv"
                                    img={`https://image.tmdb.org/t/p/w342/${serie.poster_path}`}
                                    titulo={serie.name}
                                    descripcion={serie.overview}
                                    storageKey="favoritosSeries" />)}
                        </section>
                    </>
                )}
            </div>
        )
    }
}

export default SearchResults;
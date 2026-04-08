
import React, { Component } from "react";
import Peliculas from '../../components/Peliculas/Peliculas';
import Series from '../../components/Series/Series';

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
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&q=${valor}`)
            .then(response => response.json())
            .then(data => this.setState(
                {
                    peliculas: data.results
                }
            ))
            .catch(error => console.log(error));

        fetch(`https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&q=${valor}`)
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
                            {this.state.peliculas.length === 0 ? <h3>No hay resultados</h3> : this.state.peliculas.map((peliculas, idx) => <Peliculas info={peliculas} key={idx} />)}
                        </section>

                        <h2 className="alert alert-warning">Resultados de series</h2>
                        <section className="row cards">
                            {this.state.series.length === 0 ? <h3>No hay resultados</h3> : this.state.series.map((series, idx) => <Series info={series} key={idx} />)}
                        </section>
                    </>
                )}
            </div>
        )
    }
}

export default SearchResults;
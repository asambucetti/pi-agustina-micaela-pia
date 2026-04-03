
import React, { Component } from "react";
import Peliculas from '../../components/Peliculas/Peliculas';
import Series from '../../components/Series/Series';

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
        const nombre = this.props.match.params.nombre;

        /*hago dos fetch, primero el de movies y despues el de series*/
        fetch(`https://api.themoviedb.org/3/search/movie`)
            .then(response => response.json())
            .then(data => this.setState(
                {
                    peliculas: data.results
                }
            ))
            .catch(error => console.log(error));

        fetch(`https://api.themoviedb.org/3/search/tv`)
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
            <>
                {this.state.loading ? (<p>Cargando...</p>) : (
                    <>
                        <section className='searchResults'>
                            {this.state.datos.length === 0 ? <h3>No hay resultados</h3> : this.state.peliculas.map((peliculas, idx) => <Peliculas info={peliculas} key={idx} />)}
                        </section>
                        <section className='searchResults'>
                            {this.state.datos.length === 0 ? <h3>No hay resultados</h3> : this.state.series.map((series, idx) => <Series info={peliculas} key={idx} />)}
                        </section>
                    </>
                )}
            </>
        )}
}

export default SearchResults;
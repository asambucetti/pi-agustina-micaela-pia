
import React, { Component } from "react";

class SearchResults extends Component {

    constructor(props) {
        super(props);
        this.state = {
            datos: []
        }

    }

    componentDidMount() {
        const nombre = this.props.match.params.nombre;
        
        /*hago dos fetch, primero el de movies y despues el de series*/
        fetch(`https://api.themoviedb.org/3/search/movie`)
            .then(response => response.json())
            .then(data => this.setState(
                {
                    datos: data.results
                }
            ))
            .catch(error => console.log(error));

        fetch(`https://api.themoviedb.org/3/search/tv`)
            .then(response => response.json())
            .then(data => this.setState(
                {
                    datos: data.results
                }
            ))
            .catch(error => console.log(error));

    }

    

    render() {
        return (
            <>
                <section className='card-container'>
                    {this.state.datos.length === 0 ? <h3>No hay resultados</h3> : this.state.datos.map((peliculas, idx) => <RMcard info={peliculas} key={idx} />)}
                </section>
            </>
        )
    }
}

export default SearchResults;
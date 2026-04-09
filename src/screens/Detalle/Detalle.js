import React, { Component } from 'react';

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
        let tipo = this.props.match.params.tipo; //pelicula o serie

        //fetch detalle
        fetch(`https://api.themoviedb.org/3/${tipo}/${id}?api_key=${apiKey}`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    detalle: data
                });
            });


        //fetch generos
        fetch(`https://api.themoviedb.org/3/genre/${tipo}/list`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    generos: data.genres
                });
            });
    }



    render() {

        let tipo = this.props.match.params.tipo;
        let sesionExiste = localStorage.getItem("usuario");

        if (this.state.detalle === null) {
            return <p>Cargando...</p>
        }

        return (
            <article className="container">

                {tipo === "movie" ? (
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
                            <p>Genre: {this.state.detalle.genre_ids.map((id, idx) =>
                                this.state.generos /*ESTO QUE HAGO ACA ME DEVUELVE -- this.state.generos = [{ id: 28, name: "Action" },{ id: 12, name: "Adventure" },{ id: 35, name: "Comedy" }. ES LA LISTA DE GENEROS QUE CREAMOS AL PPIO Y QUE SE RELLENA CON FETCH*/
                                    .filter(genero => genero.id === id)
                                    .map((genero, i) => (
                                        <span key={i}>{genero.name}</span> // UTILIZO ETIQUETA SPAN PQ es etiqueta de HTML que sirve para mostrar texto en línea (sin hacer salto de línea)
                                    ))
                            )}
                            </p>


                            {sesionExiste ? <button>⭐</button> : null}
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
                            <p>Genre: {this.state.detalle.genre_ids.map((id, idx) =>
                                this.state.generos /*ESTO QUE HAGO ACA ME DEVUELVE -- this.state.generos = [{ id: 28, name: "Action" },{ id: 12, name: "Adventure" },{ id: 35, name: "Comedy" }. ES LA LISTA DE GENEROS QUE CREAMOS AL PPIO Y QUE SE RELLENA CON FETCH*/
                                    .filter(genero => genero.id === id)
                                    .map((genero, i) => (
                                        <span key={i}>{genero.name}</span> // UTILIZO ETIQUETA SPAN PQ es etiqueta de HTML que sirve para mostrar texto en línea (sin hacer salto de línea)
                                    ))
                            )}
                            </p>


                            {sesionExiste ? <button>⭐</button> : null}
                        </div>
                    </div>


                )}

            </article>
        );

    }
}

export default Detalle;
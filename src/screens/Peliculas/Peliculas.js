import React, { Component } from 'react';
import Card from '../../components/Card/Card';
import Filtro from '../../components/Filtro/Filtro';

const apiKey = "5c6cfdfae06798b19907f4b6448f6847";
class Peliculas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculas: [],
      pagina: 1,
      busqueda: '',
      cargandoPeliculas: true
    };
  }

  componentDidMount() {

    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          peliculas: data.results,
          cargandoPeliculas: false
        })
      )
      .catch(error => console.log(error));
  }

  cargarMas() {
    let paginaSiguiente = this.state.pagina + 1;

    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${paginaSiguiente}`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          peliculas: this.state.peliculas.concat(data.results),
          pagina: paginaSiguiente,
          cargandoPeliculas: false
        })
      )
      .catch(error => console.log(error));
  }

  evitarSubmit(event) {
    event.preventDefault();
  }

  controlarCambios(event) {
    this.setState({ busqueda: event.target.value });
  }

  filtrarPeliculas(textoAFiltrar) {
    return this.state.peliculas.filter((pelicula) => pelicula.title.toLowerCase().includes(textoAFiltrar.toLowerCase())
    );
  }

  render() {
    let peliculasFiltradas = this.filtrarPeliculas(this.state.busqueda);
    return (

      <div className="container">
        <h2 className="alert alert-primary">Todas las películas</h2>
        {this.state.cargandoPeliculas ? (
          <h3>Cargando Peliculas...</h3>
        ) : (
          <div>
            <Filtro
              controlarCambios={(event) => this.controlarCambios(event)}
              evitarSubmit={(event) => this.evitarSubmit(event)}
              valor={this.state.busqueda}
            />
            <button className="btn btn-info" onClick={() => this.cargarMas()}>
              Cargar más
            </button>

            <section className="row cards all-movies" id="movies">
              {peliculasFiltradas.map((pelicula, idx) => (
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
          </div>
        )}
      </div>
    );
  }
}

export default Peliculas;

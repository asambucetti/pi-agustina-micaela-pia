
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
      cargando: true
    };
  }

  componentDidMount() {

    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          peliculas: data.results,
          cargando: false
        })
      )
      .catch(error => console.log(error));
  }

  cargarMas() {
    this.setState({ cargando: true });
    let paginaSiguiente = this.state.pagina + 1;

    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${paginaSiguiente}`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          peliculas: this.state.peliculas.concat(data.results),
          pagina: paginaSiguiente,
          cargando: false
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

        <Filtro
          controlarCambios={(event) => this.controlarCambios(event)}
          evitarSubmit={(event) => this.evitarSubmit(event)}
          valor={this.state.busqueda}
        />
        <button className="btn btn-info" onClick={() => this.cargarMas()}>
          Cargar más
        </button>

         {this.state.cargando ? (
          <h3>Cargando...</h3>
        ) : (

        <section className="row cards all-movies" id="movies">
          {peliculasFiltradas.map((pelicula, idx) => (
            <Card
              key={idx}
              id={pelicula.id}
              clase="single-card-movie"
              img={`https://image.tmdb.org/t/p/w342/${pelicula.poster_path}`}
              titulo={pelicula.title}
              descripcion={pelicula.overview}
            />
          ))}
        </section>
        )}
      </div>
    );
  }
}

export default Peliculas;

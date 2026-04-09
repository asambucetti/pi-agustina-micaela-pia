
import React, { Component } from 'react';
import Card from '../../components/Card/Card';
import Filtro from '../../components/Filtro/Filtro';

const apiKey = "5c6cfdfae06798b19907f4b6448f6847";
class Series extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [],
      pagina: 1,
      busqueda: ''
    };
  }

  componentDidMount() {

    fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          series: data.results
        })
      )
      .catch(error => console.log(error));
  }

  cargarMas() {
    let paginaSiguiente = this.state.pagina + 1;

    fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&page=${paginaSiguiente}`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          series: this.state.series.concat(data.results),
          pagina: paginaSiguiente
        })
      )
      .catch(error => console.log(error));
  }

  evitarSubmit(event) {
    event.preventDefault();
  }

  controlarCambios(event) {
    this.setState({busqueda: event.target.value});
  }

  filtrarSeries(textoAFiltrar) {
    return this.state.series.filter((serie) => serie.name.toLowerCase().includes(textoAFiltrar.toLowerCase())
    );
  }

  render() {
      let seriesFiltradas = this.filtrarSeries(this.state.busqueda);
    return (

      <div className="container">
        <h2 className="alert alert-warning">Todas las series</h2>
  
        <Filtro
          controlarCambios={(event) => this.controlarCambios(event)}
          evitarSubmit={(event) => this.evitarSubmit(event)}
          valor={this.state.busqueda}
        />
        <button className="btn btn-warning" onClick={() => this.cargarMas()}>
          Cargar más
        </button>

        <section className="row cards all-series" id="series">
          {seriesFiltradas.map((serie, idx) => (
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
      </div>
    );
  }
}

export default Series;






















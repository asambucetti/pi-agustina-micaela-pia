import React, { Component } from 'react';
import Card from '../Card/Card';

const apiKey = "5c6cfdfae06798b19907f4b6448f6847";

class Series extends Component {

    constructor() {
        super();
        this.state = {
            series: []
        };
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    series: data.results
                });
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <section className="row cards">
                {this.state.series.map((serie, idx) => (
                    <Card
                        key={idx}
                        id={serie.id}
                        clase="single-card-tv"
                        categoria="tv"
                        titulo={serie.name}
                        descripcion={serie.overview}
                        img={`https://image.tmdb.org/t/p/w342/${serie.poster_path}`}
                        storageKey="favoritosSeries"
                    />
                ))}
            </section>
        );
    }
}

export default Series;


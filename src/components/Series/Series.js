import React, { Component } from 'react';
import Card from '../Card/Card';

class Series extends Component {

    constructor() {
        super();
        this.state = {
            series: []
        };
    }

    componentDidMount() {
        const apiKey = "5c6cfdfae06798b19907f4b6448f6847";

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
            <section className="row">
                {this.state.series.map((serie, idx) => (
                    <Card
                        key={idx}
                        id={serie.id}
                        titulo={serie.name}
                        descripcion={serie.overview}
                        imagen={serie.poster_path}
                    />
                ))}
            </section>
        );
    }
}

export default Series;


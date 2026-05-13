import React, { Component } from 'react';
import Card from '../Card/Card';
import { useState, useEffect } from 'react';

const apiKey = "5c6cfdfae06798b19907f4b6448f6847";

function Series(props) {

    const [series, setSeries] = useState([]);
    const [cargandoSeries, setCargandoSeries] = useState(true);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}`)
            .then(res => res.json())
            .then(data => {
                setSeries(data.results);
                setCargandoSeries(false);
            })
            .catch(error => console.log(error));
    }, [])



return (
    <section>
        {cargandoSeries ? (
            <h3>Cargando Series...</h3>
        ) : series.length === 0 ? (
            <h3>No hay Series</h3>
        ) : (
            <section className="row cards">
                {series.map((serie, idx) => (
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
        )}
    </section>
);
}

export default Series;


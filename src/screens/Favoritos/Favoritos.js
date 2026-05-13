import React, { Component, useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import Card from '../../components/Card/Card';


const apiKey = "5c6cfdfae06798b19907f4b6448f6847";
const cookies = new Cookies()


function Favoritos(props) {
    const [peliculasFavoritas, setPeliculasFavoritas] = useState([]);
    const [seriesFavoritas, setSeriesFavoritas] = useState([]);
    const [cargandoPeliculas, setCargandoPeliculas] = useState(true);
    const [cargandoSeries, setCargandoSeries] = useState(true);

    useEffect(() => {
        let storagePeliculas = localStorage.getItem("favoritosPeliculas");
        storagePeliculas = JSON.parse(storagePeliculas);
        if (storagePeliculas === null || storagePeliculas.length === 0) {
            setPeliculasFavoritas([]);
            setCargandoPeliculas(false);
        } else {
            let peliculasRecuperadas = [];

            for (let i = 0; i < storagePeliculas.length; i++) {
                fetch(`https://api.themoviedb.org/3/movie/${storagePeliculas[i]}?api_key=${apiKey}`)
                    .then(response => response.json())
                    .then(data => {
                        peliculasRecuperadas.push(data);

                        if (peliculasRecuperadas.length === storagePeliculas.length) {
                            setPeliculasFavoritas(peliculasRecuperadas);
                            setCargandoPeliculas(false);
                        }
                    })
                    .catch(error => console.log(error));
            }
        }

        let storageSeries = localStorage.getItem("favoritosSeries");
        storageSeries = JSON.parse(storageSeries);

        if (storageSeries === null || storageSeries.length === 0) {
            setSeriesFavoritas([]);
            setCargandoSeries(false);
        } else {
            let seriesRecuperadas = [];

            for (let i = 0; i < storageSeries.length; i++) {
                fetch(`https://api.themoviedb.org/3/tv/${storageSeries[i]}?api_key=${apiKey}`)
                    .then(response => response.json())
                    .then(data => {
                        seriesRecuperadas.push(data);

                        if (seriesRecuperadas.length === storageSeries.length) {
                            setSeriesFavoritas(seriesRecuperadas);
                            setCargandoSeries(false);
                        }
                    })
                    .catch(error => console.log(error));
            }
        }

    }, [])

    function actualizarFavoritos(id, tipo) {
        if (tipo === "movie") {
            let filtradas = this.state.peliculasFavoritas.filter(peli => peli.id !== id);
            this.setState({ peliculasFavoritas: filtradas });
        } else {
            let filtradas = this.state.seriesFavoritas.filter(serie => serie.id !== id);
            this.setState({ seriesFavoritas: filtradas });
        }
    };


    let usuario = cookies.get('auth-user');
    if (usuario === undefined) {
        return <h3>Debés iniciar sesión para ver favoritos</h3>;
    }
    return (<div className="container">
        <h2 className="alert alert-primary">Películas favoritas</h2>
        {cargandoPeliculas ? (<h3>Cargando películas...</h3>) : peliculasFavoritas.length === 0 ? (
            <h3>No hay películas agregadas a favoritos</h3>
        ) : (
            <section className="row cards" id="movies">
                {peliculasFavoritas.map((pelicula, idx) => (
                    <Card
                        key={pelicula.id}
                        id={pelicula.id}
                        categoria="movie"
                        clase="single-card-movie"
                        img={`https://image.tmdb.org/t/p/w342/${pelicula.poster_path}`}
                        titulo={pelicula.title}
                        descripcion={pelicula.overview}
                        storageKey="favoritosPeliculas"
                        actualizacion={(id) => this.actualizarFavoritos(id, "movie")}
                    />
                ))}
            </section>
        )}

        <h2 className="alert alert-warning">Series favoritas</h2>
        {cargandoSeries ? (
            <h3>Cargando series...</h3>
        ) : seriesFavoritas.length === 0 ? (
            <h3>No hay series agregadas a favoritos</h3>
        ) : (
            <section className="row cards" id="tv-show">
                {seriesFavoritas.map((serie, idx) => (
                    <Card
                        key={serie.id}
                        id={serie.id}
                        categoria="tv"
                        clase="single-card-tv"
                        img={`https://image.tmdb.org/t/p/w342/${serie.poster_path}`}
                        titulo={serie.name}
                        descripcion={serie.overview}
                        storageKey="favoritosSeries"
                        actualizacion={(id) => this.actualizarFavoritos(id, "tv")}
                    />
                ))}
            </section>
        )}
    </div>
    );


}


export default Favoritos;









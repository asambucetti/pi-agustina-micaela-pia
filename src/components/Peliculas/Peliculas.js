import React, { Component } from 'react';
import Card from '../Card/Card';
import { useState, useEffect } from "react";


const apiKey = "5c6cfdfae06798b19907f4b6448f6847";

function Peliculas() {
    const [peliculas, setPeliculas] = useState([]);
    const [cargandoPeliculas, setCargandoPeliculas] = useState(true);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
            .then(res => res.json())
            .then(data => {
                setPeliculas(data.results);
                setCargandoPeliculas(false);
            })
            .catch(error => console.log(error));
    }, []);

        return (
            <div>
                {cargandoPeliculas ? (
                    <h3>Cargando Peliculas...</h3>
                ) : peliculas.length === 0 ? (
                    <h3>No hay Peliculas</h3>
                ) : (
                    <div className="container">
                        <section className="row cards">
                            {peliculas.map((peli, idx) => (
                                <Card
                                    key={idx}
                                    id={peli.id}
                                    clase="single-card-movie"
                                    categoria="movie"
                                    titulo={peli.title}
                                    descripcion={peli.overview}
                                    img={`https://image.tmdb.org/t/p/w342/${peli.poster_path}`}
                                    storageKey="favoritosPeliculas"
                                />
                            ))}
                        </section>
                    </div>

                )
                }
            </div>
        );
    }


export default Peliculas; 


import React from 'react';
import { Link } from 'react-router-dom'
import Filtro from '../../components/Filtro'

function Series(props) {
    return (
        <div className="container">
            <h2 className="alert alert-warning">Todas las series</h2>

            <Filtro />

            <button className="btn btn-warning">Cargar más</button>

            <section className="row cards all-series" id="series">
                <article className="single-card-tv">
                    <img src="https://image.tmdb.org/t/p/w500/9mYeRoWguq5etbwJRdF8BXFKiF.jpg" className="card-img-top" alt="..." />
                    <div class="cardBody">
                        <h5 className="card-title">The Terminal List: Dark Wolf</h5>
                        <p className="card-text">Before The Terminal List, Navy SEAL Ben Edwards finds himself entangled in the
                            black operations side of the CIA. The deeper Ben goes into the 'gray', the harder it will become
                            to not give himself over to his darker impulses. Every man has two wolves inside him – light and
                            dark – fighting for control. Which wolf will Ben Edwards feed?</p>
                        <button>Ver descripción</button>
                        <button>Ir a detalle</button>
                        <button>⭐</button>
                    </div>
                </article>
            </section>


        </div>
    );
}

export default Series;



import React from 'react';
import { Link } from 'react-router-dom'
import Filtro from '../../components/Filtro'

function Peliculas(props) {
  return (
   <div className="container">
        <h2 className="alert alert-primary">Todas las películas</h2>
        <Filtro/>

        <button className="btn btn-info">Cargar más</button>

        <section className="row cards all-movies" id="movies">
            <article className="single-card-movie">
                <img src="https://image.tmdb.org/t/p/w500/tzrJulItjttxzoX0t3B2My46TS7.jpg" className="card-img-top" alt="..."/>
                <div className="cardBody">
                    <h5 className="card-title">The Thursday Murder Club</h5>
                    <p clclassNameass="card-text">A group of senior sleuths passionate about solving cold cases get plunged into
                        a real-life murder mystery in this comic crime caper.</p>
                    <button>Ver descripción</button>
                    <button>Ir a detalle</button>
                    <button>⭐</button>
                </div>
            </article>

        </section>


    </div>
  );
}


export default Peliculas;

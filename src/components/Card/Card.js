import React from 'react';
import { Link } from 'react-router-dom';

function Card(props) {
    let sesionExiste = localStorage.getItem("usuario");



    return (
        <article className="single-card-movie">
            <img className="card-img-top" src={props.img} alt={props.titulo} />
            <div class="cardBody">
                <h5 className="card-title">{props.titulo}</h5>
                <p className="card-text">{props.descripcion}</p>
                {/* aca solo faltaria hacer que la descripcion aparezca y desaparezca (onClick) */}
                <button>Ver descripción</button>

                <Link to={`/detalle/${props.id}`}>
                    <button>Ir a detalle</button>
                </Link>

                {sesionExiste ? <button>⭐</button> : null}
            </div>
        </article>
    );
}

export default Card;


{/* esta seria la resolucion de card con el api key hecho; comentario de peliculas.js */}
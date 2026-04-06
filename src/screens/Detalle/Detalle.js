import React from 'react';
import { Link } from 'react-router-dom';


class Detalle extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

/* aca deberia haber una funcion que defina si aplicamos detalle para pelicula o serie */ 


render() {

    {/* LO QUE IRIA DENTOR DEL RETURN. PONEMOS UN IF TERNARIO QUE USA LA FUNCION DE ARRIBA QUE DETERMINA SI ES EPELICUAL OA SERIE. ENTONCES, SI ES PELICULA, RENDERIZA TODA LA ESTRUCTURA LLAMANDO A LAS PROPS DE PELICUALM SI ES SERIES RENDERIZA LO DE SERIE.
    return (
        (categoria: pelicula) ? (
        <article className="single-card-movie">
            <img className="card-img-top" src={props.imagen} alt={props.titulo} />
            <div class="cardBody">
                <h5 className="card-title">{props.titulo}</h5>
                <p className="card-text">{props.descripcion}</p>
                <p className="card-text">{props.descripcion}</p>
                <button>Ver descripción</button>

                <Link to={`/detalle/${props.id}`}>
                    <button>Ir a detalle</button>
                </Link>

                {sesionExiste ? <button>⭐</button> : null}
            </div>
        </article>
    ) : (
        k
    )

        );
        */}
}
}

export default Detalle;
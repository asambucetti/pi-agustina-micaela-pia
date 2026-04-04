import React from 'react';
import Peliculas from '../../components/Peliculas/Peliculas';
import Series from '../../components/Series/Series';
import Buscador from '../../components/Buscador/Buscador';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <Buscador />

            <h2 className="alert alert-primary">Popular movies this week</h2>
            <Peliculas />

            <Link to="/peliculas">
                <button>Ver todas</button>
            </Link>


            <h2 className="alert alert-primary">Popular TV show this week</h2>
            <Series />

            <Link to="/series">
                <button>Ver todas</button>
            </Link>

        </div>

    );
}

export default Home;
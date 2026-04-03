import React from 'react';
import Peliculas from '../../components/Peliculas/Peliculas';
import Series from '../../components/Series/Series';
import Buscador from '../../components/Buscador/Buscador';

function Home() {
    return (
        <div>
            <form className="search-form" action="results.html" method="get">
                <input type="text" className="" name="searchData" placeholder="Buscar..." value="" />
                <button type="submit" class="btn btn-success btn-sm">Buscar🔎</button>
            </form>
            <Buscador/>


            <h2 className="alert alert-primary">Popular movies this week</h2>
            <Peliculas />
        
            
            <h2 className="alert alert-primary">Popular TV show this week</h2>
            <Series />


        </div>

    );
}

export default Home;
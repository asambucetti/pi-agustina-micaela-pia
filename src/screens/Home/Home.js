import React from 'react';
import Peliculas from '../../components/Peliculas/Peliculas';
import Series from '../../components/Series/Series';

function Home() {
    return (
        <div>
            <form className="search-form" action="results.html" method="get">
                <input type="text" className="" name="searchData" placeholder="Buscar..." value="" />
                <button type="submit" class="btn btn-success btn-sm">Buscar🔎</button>
            </form>


            <h2 className="alert alert-primary">Popular movies this week</h2>
            <Peliculas />
            <Peliculas />
            <Peliculas />
            <Peliculas />
            
            <h2 className="alert alert-primary">Popular TV show this week</h2>
            <Series />
            <Series />
            <Series />
            <Series />


        </div>

    );
}

export default Home;
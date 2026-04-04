import React from 'react';
import Card from '../Card/Card';

function Peliculas() {
    const peliculas = [
        {
            id: 1,
            titulo: "The Thursday Murder Club",
            descripcion: "A group of senior sleuths passionate about solving cold cases get plunged into a real-life murder mystery in this comic crime caper.",
            img: "https://image.tmdb.org/t/p/w500/tzrJulItjttxzoX0t3B2My46TS7.jpg"
        },
        {
            id: 2,
            titulo: "F1",
            descripcion: "Carrera de autos..",
            img: "https://image.tmdb.org/t/p/w500/9PXZIUsSDh4alB80jheWX4fhZmy.jpg"

        },
        {
            id: 3,
            titulo: "I Know What You Did Last Summer",
            descripcion: "When five friends inadvertently cause a deadly car accident, they cover up their involvement and make a pact to keep it a secret rather than face the consequences. A year later, their past comes back to haunt them and they're forced to confront a horrifying truth: someone knows what they did last summer…and is hell-bent on revenge.",
            img: "https://image.tmdb.org/t/p/w500/A06yXys3hrCWu8xiNoHCFLTG5SH.jpg"

        },
        {
            id: 4,
            titulo: "Superman",
            descripcion: "Carrera de autos..",
            img: "https://image.tmdb.org/t/p/w500/ombsmhYUqR4qqOLOxAyr5V8hbyv.jpg"
        }
    ];

    return (
        <section>
            {peliculas.map((pelicula, idx) => (
                <Card
                    key={idx}
                    id={pelicula.id}
                    titulo={pelicula.titulo}
                    descripcion={pelicula.descripcion}
                    img={pelicula.img}
                />
            )
            )}
        </section>

    );
}

export default Peliculas;
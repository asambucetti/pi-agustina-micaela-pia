import React from 'react';
import Card from '../Card/Card';

function Series() {
    const series = [
        {
            id: 1,
            titulo: "Binnelanders",
            descripcion: "A South African Afrikaans soap opera. It is set in and around the fictional private hospital, Binneland Kliniek, in Pretoria, and the storyline follows the trials, trauma and tribulations of the staff and patients of the hospital.",
            img: "https://image.tmdb.org/t/p/w500/3bzECfllho8PphdYujLUIuhncJD.jpg"
        },
        {
            id: 2,
            titulo: "When Destiny Brings the Demon",
            descripcion: "Modern-day office drone Zou Yan accidentally stumbles into the world of cultivation and wakes up as Liao Tingyan, a disciple of the Qinggutian Sect.",
            img: "https://image.tmdb.org/t/p/w500/15yDwRPWsI75RdJaBVgb4K5m94I.jpg"
        },
        {
            id: 3,
            titulo: "Sturm der Liebe",
            descripcion: "These are the stories of relationships taking place in the fictional five-star hotel Fürstenhof, located in Feldkirchen-Westerham near Rosenheim with the plot revolving around members of the family room area, the hotel owners, and employees.",
            img: "https://image.tmdb.org/t/p/w500/jfFNydakwvbeACEwSd2Gh8UWtba.jpg"
        },
        {
            id: 4,
            titulo: "Raw",
            descripcion: "A regularly scheduled, live, year-round program featuring some of the biggest WWE Superstars.",
            img: "https://image.tmdb.org/t/p/w500/pv5WNnLUo7mpT8k901Lo8UovrqI.jpg"
        }
    ];


    return (
        <section>
            {series.map((serie, idx) => (
                <Card
                    key={idx}
                    id={serie.id}
                    titulo={serie.titulo}
                    descripcion={serie.descripcion}
                    img={serie.img}
                />
            )
            )}
        </section>
    );

}

export default Series;


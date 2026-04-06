import React from 'react';
import { Link } from 'react-router-dom';

function Favoritos() {
  return (<div className="container">
      <h1>UdeSA Movies</h1>

      <h2 className="alert alert-primary">Películas favoritas</h2>
      <section className="row cards" id="movies">
        <article className="single-card-movie">
          <img
            src="https://image.tmdb.org/t/p/w500/9PXZIUsSDh4alB80jheWX4fhZmy.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="cardBody">
            <h5 className="card-title">F1</h5>
            <p className="card-text">
              Racing legend Sonny Hayes is coaxed out of retirement to lead a struggling
              Formula 1 team—and mentor a young hotshot driver—while chasing one more chance at glory.
            </p>
            <Link to="/movie" className="btn btn-primary">Ver más</Link>
            <button className="btn alert-info">♥️</button>
          </div>
        </article>

        <article className="single-card-movie">
          <img
            src="https://image.tmdb.org/t/p/w500/A06yXys3hrCWu8xiNoHCFLTG5SH.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="cardBody">
            <h5 className="card-title">I Know What You Did Last Summer</h5>
            <p className="card-text">
              When five friends inadvertently cause a deadly car accident, they cover up
              their involvement and make a pact to keep it a secret rather than face the consequences.
              A year later, their past comes back to haunt them and they're forced to confront a
              horrifying truth: someone knows what they did last summer…and is hell-bent on revenge.
            </p>
            <Link to="/movie" className="btn btn-primary">Ver más</Link>
            <button className="btn alert-info">♥️</button>
          </div>
        </article>

        <article className="single-card-movie">
          <img
            src="https://image.tmdb.org/t/p/w500/ombsmhYUqR4qqOLOxAyr5V8hbyv.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="cardBody">
            <h5 className="card-title">Superman</h5>
            <p className="card-text">
              Superman, a journalist in Metropolis, embarks on a journey to reconcile his
              Kryptonian heritage with his human upbringing as Clark Kent.
            </p>
            <Link to="/movie" className="btn btn-primary">Ver más</Link>
            <button className="btn alert-info">♥️</button>
          </div>
        </article>
      </section>

      <h2 className="alert alert-warning">Series favoritas</h2>
      <section className="row cards" id="tv-show">
        <article className="single-card-tv">
          <img
            src="https://image.tmdb.org/t/p/w500/9mYeRoWguq5etbwJRdF8BXFKiF.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="cardBody">
            <h5 className="card-title">The Terminal List: Dark Wolf</h5>
            <p className="card-text">
              Before The Terminal List, Navy SEAL Ben Edwards finds himself entangled in the
              black operations side of the CIA. The deeper Ben goes into the 'gray', the harder it
              will become to not give himself over to his darker impulses.
            </p>
            <Link to="/serie" className="btn btn-primary">Ver más</Link>
            <button className="btn alert-warning">♥️</button>
          </div>
        </article>

        <article className="single-card-tv">
          <img
            src="https://image.tmdb.org/t/p/w500/yueXS3q8BtoWekcHOATFHicLl3e.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="cardBody">
            <h5 className="card-title">Alien: Earth</h5>
            <p className="card-text">
              When the mysterious deep space research vessel USCSS Maginot crash-lands on
              Earth, Wendy and a ragtag group of tactical soldiers make a fateful discovery that
              puts them face-to-face with the planet's greatest threat.
            </p>
            <Link to="/serie" className="btn btn-primary">Ver más</Link>
            <button className="btn alert-warning">♥️</button>
          </div>
        </article>

        <article className="single-card-tv">
          <img
            src="https://image.tmdb.org/t/p/w500/yb4F1Oocq8GfQt6iIuAgYEBokhG.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="cardBody">
            <h5 className="card-title">Peacemaker</h5>
            <p className="card-text">
              The continuing story of Peacemaker, a vainglorious superhero/supervillain who
              believes in peace at any cost — no matter how many people he has to kill.
            </p>
            <Link to="/serie" className="btn btn-primary">Ver más</Link>
            <button className="btn alert-warning">♥️</button>
          </div>
        </article>
      </section>
    </div> );
}

export default Favoritos;
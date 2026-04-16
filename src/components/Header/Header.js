import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  function sesionExistente() {
    let sesion = sessionStorage.getItem("usuarioEnSesion");

    if (sesion === null){
      return false;
    }

    let sesionParseada = JSON.parse(sesion)
    return sesionParseada.sesionActiva === true;
  }

  return (
    <div className="container">
      <nav>
        <ul className="nav nav-tabs my-4">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Peliculas">Películas</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Series">Series</Link>
          </li>

          {sesionExistente() ?
            (<li className="nav-item">
              <Link className="nav-link" to="/Favorites">Favoritas</Link>
            </li>
            ) : null}

          {!sesionExistente() ? (
            <>
              <li className="nav-item ml-auto">
                <Link className="nav-link" to="/Register">Registro</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Login">Login</Link>
              </li>
            </>
          ) : null}

        </ul>
      </nav>
    </div>
  );
}


export default Header;




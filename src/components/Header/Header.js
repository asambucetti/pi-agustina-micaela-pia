import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Logout from '../Logout/Logout';
import Cookies from 'universal-cookie';

const cookies = new Cookies();


function Header(props) {

  let usuario = cookies.get('auth-user');

  return (
    <div className="container">
      <div className="logo">
        <img src="/img/logo.png" alt="logo" />
      </div>
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

          {(usuario !== undefined) ? (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/Favoritos">Favoritos</Link>
              </li>

              <li className="nav-item">
                <Logout history={props.history} />
              </li>
            </>
          ) : (
            <>
              <li className="nav-item ml-auto">
                <Link className="nav-link" to="/Register">Registro</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/Login">Login</Link>
              </li>
            </>
          )}

        </ul>
      </nav>
    </div>
  );
}


export default withRouter(Header);




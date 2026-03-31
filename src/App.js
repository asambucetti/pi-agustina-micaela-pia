
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFound from "./screens/NotFound";
import Header from './components/Header/Header';
import Home from './screens/Home/Home';
import Peliculas from './components/Peliculas/Peliculas';
import Series from './components/Series/Series';
import './App.css';


function App() {

  return (
    <div className="App">

      <nav>
        <ul className="main-nav">
          <Header />
        </ul>
      </nav>

      <Switch>
        <Route path="/" exact={true} component={Home} />
        {/*  <Route path="/Login" component={Login} /> */}
        {/* <Route path="/CrearCuenta" component={CrearCuenta} /> */}
        {/* <Route path="/Favoritos" component={Favoritos} /> */}
        <Route path="" component={NotFound} />
      </Switch>

      <Peliculas />
      <Series />

      <footer className="alert alert-primary mt-4 text-center">
        <p className="mb-0">Agustina Sambucetti | Micaela Son | Pia Ivancovich</p>
      </footer>

    </div>
  );
}

export default App;

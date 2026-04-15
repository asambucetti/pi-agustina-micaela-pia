import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './screens/Home/Home';
import { Switch, Route } from 'react-router-dom';
import Series from './screens/Series/Series';
import NotFound from './screens/NotFound/NotFound';
import SearchResults from './screens/SearchResults/SearchResults';
import Favoritos from './screens/Favoritos/Favoritos';
import Login from './screens/Login/Login';
import Register from './screens/Register/Register';
import Detalle from './screens/Detalle/Detalle';
import Peliculas from './screens/Peliculas/Peliculas';
import MiPerfil from './screens/MiPerfil/MiPerfil';


function App() {

  return (
    <div className="container">


      <div className="logo">
        <img src="/img/logo.png" alt="logo" />
      </div>
      <Header />






      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/Login" component={Login} />
        <Route path="/Register" component={Register} />
        <Route path="/Favorites" component={Favoritos} />
        <Route path="/Peliculas" component={Peliculas} />
        <Route path="/Series" component={Series} />
        <Route path="/SearchResults/:nombre" component={SearchResults} />
        <Route path="/Detalle/:categoria/:id" component={Detalle} />
        <Route path="/MiPerfil" component={MiPerfil} />
        <Route path="" component={NotFound} />
      </Switch>


      <Footer />
    </div>
  );
}

export default App;

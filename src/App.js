import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './screens/Home/Home';
import { Switch, Route } from 'react-router-dom';
import Peliculas from './components/Peliculas/Peliculas';
import Series from './components/Series/Series';
import NotFound from './screens/NotFound/NotFound';
import './App.css';
import SearchResults from './screens/SearchResults/SearchResults';


function App() {

  return (
    <div className="App">

      <nav>
        <ul className="main-nav">
          <Header />
        </ul>
      </nav>


      <Home />


      <Switch>
        <Route path="/" exact={true} component={Home} />
   {/*  <Route path="/Login" component={Login} />
        <Route path="/Register" component={Register} />
        <Route path="/Favorites" component={Favoritos} />
        <Route path="/Peliculas" component={Peliculas} />
        <Route path="/Series" component={Series} />  */}
        <Route path="/SearchResults/:nombre" component={SearchResults} />
        <Route path="" component={NotFound} />
      </Switch>

      
      <Footer/>
    </div>
  );
}

export default App;


import logo from './logo.svg';
import NotFound from "./screens/NotFound"
import Header from './components/Header/Header'
import './App.css';


function App() {
  
  return (
    <div className="App">
  
      <nav>
        <ul className="main-nav">
            <Header/>
        </ul>
      </nav>

      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/Login" component={Login} />
        <Route path="/CrearCuenta" component={CrearCuenta} />
        <Route path="/Favoritos" component={Favoritos} />
        <Route path="" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;

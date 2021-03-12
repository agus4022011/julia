import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Componente/Menu/menu';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Inicio from './Componente/Inicio/inicio';
import Work from './Componente/Work/work';
import Laboratory from './Componente/Laboratory/laboratory';
import Info from './Componente/Info/info';
import Shop from './Componente/Shop/shop';
import Pregunta from './Componente/Pregunta/pregunta';
import EstructuraImg from './Componente/Shop/EstructuraImg/estructuraImg';



function App() {
  return (
    <BrowserRouter basename= {process.env.PUBLIC_PATH}>
    <div className="App">
      <Menu/>
      <Switch>
        <Route exact path='/' component={Inicio}></Route>
        <Route exact path='/Work' component={Work}></Route>
        <Route exact path='/Laboratory' component={Laboratory}></Route>
        <Route exact path='/Info' component={Info}></Route>
        <Route exact path='/Shop' component={Shop}></Route>
        <Route exact path='/Shop' component={Shop}></Route>
        <Route exact path='/Pregunta' component={Pregunta}></Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;

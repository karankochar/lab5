import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddMovie from './Components/AddMovie';
import FIndMovie from './Components/FIndMovie';
import MovieResult from './Components/MovieResult';
import Header from "./Components/Page/Header";
import LoginComponent from './Components/Page/LoginComponent';
import Login from './Components/Page/LoginComponent';
import MovieHome from "./Components/Page/MovieHome";

function App() {
  return (
    <Router>
    <div>
      <Header/>
      <div className="container">
        <Switch>
          <Route exact path='/' component={LoginComponent}/>
          <Route exact path='/movies' component={MovieHome}/>
          <Route exact path='/movies/add' component={AddMovie}/>
          <Route exact path='/movies/search' component={FIndMovie}/>
          <Route exact path='/movies/search/:genre' component={MovieResult}/>
        </Switch>
      </div>
    </div>
    </Router>
    
    
  );
}

export default App;

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddMovie from './Components/AddMovie';
import Header from "./Components/Page/Header";
import MovieHome from "./Components/Page/MovieHome";

function App() {
  return (
    <Router>
    <div>
      <Header/>
      <div className="container">
        <Switch>
          <Route exact path='/' component={MovieHome}/>
          <Route exact path='/movies/add' component={AddMovie}/>
        </Switch>
      </div>
    </div>
    </Router>
    
    
  );
}

export default App;

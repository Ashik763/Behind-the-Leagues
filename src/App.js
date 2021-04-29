import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import NoMatch from './NoMatch/NoMatch'
import LeagueDetail from './Components/LeagueDetail/LeagueDetail';
import League from './Components/League/League';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {



  return (
    <Router>


    <Switch>
      <Route exact path="/home">
      
        <Home/>

      </Route>
      <Route path="/league/:idLeague">
      
        <LeagueDetail/>

      </Route>
      <Route exact path="">
      
         <Home/> 

      </Route>
      
     </Switch>
   
    </Router>
);

}

export default App;

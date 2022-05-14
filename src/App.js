import './App.css';
import Homepage from './Pages/Homepage/Homepage'
import { Route, Switch } from 'wouter';
import LuckResult from './Pages/LuckResult/LuckResult';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/adivinacion/:name/:age/:gender/:birthDate' component={LuckResult} />
        <Route path='/homepage' component={Homepage} />
        <Route><Homepage /></Route>
      </Switch>
    </div>
  );
}

export default App;
import './App.css';
import Homepage from './Pages/Homepage/Homepage'
import { Route, Switch } from 'wouter';
import LuckResult from './Pages/LuckResult/LuckResult';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/adivinacion/:name/:age/:gender/:birthDate' component={LuckResult} />
        <Route path='/homepage' component={Homepage} />
        <Route><Homepage /></Route>
      </Switch>
      <Footer className="footer" />
    </div>
  );
}

export default App;
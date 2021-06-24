import { Route } from 'react-router';
import './App.css';
import Home from '../src/components/Home';


function App() {
  return (
    <div className="App">
      <Route path='/' component={Home}/>
    </div>
  );
}

export default App;

import { Route } from 'react-router';
import './App.css';
import Home from '../src/components/Home';
import AddDino from '../src/components/AddDino';


function App() {
  return (
    <div className="App">
      <Route path='/home' component={Home}/>
      <Route path='/addDino' component={AddDino}/>
    </div>
  );
}

export default App;

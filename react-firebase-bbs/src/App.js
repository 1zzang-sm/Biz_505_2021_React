import logo from './logo.svg';
import './App.css';
import Header from './comps/Header'
import Navi from './comps/MainNav'
import BBsMain from './comps/BBsMain'

import {BrowserRouter, Route} from 'react-router-dom'

function App() {
  return (
<BrowserRouter>
    <div className="App">
      <Header />
	  <Navi />
	  <BBsMain />
    </div>
</BrowserRouter>
  );
}

export default App;

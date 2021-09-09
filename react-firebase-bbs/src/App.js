import logo from './logo.svg';
import './App.css';
import Header from './comps/Header'
import Navi from './comps/MainNav'
import BBsMain from './comps/BBsMain'

function App() {
  return (
    <div className="App">
      <Header />
	  <Navi />
	  <BBsMain />
    </div>
  );
}

export default App;

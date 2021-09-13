import logo from './logo.svg';
import './App.css';
import {Header, MainNav, BBsMain, Write, BBsDetail} from './comps'
import {BrowserRouter, Route} from 'react-router-dom'

function App() {
  return (
<BrowserRouter>
    <div className="App">
      <Header />
	  <MainNav />
	  <Route path="/detail" component={BBsDetail} exact />
	  <Route  path="/write" component={Write} exact/>
	  <section>
	  	<Route eaxct path="/" component={BBsMain} exact/>
	  </section>
    </div>
</BrowserRouter>
  );
}

export default App;

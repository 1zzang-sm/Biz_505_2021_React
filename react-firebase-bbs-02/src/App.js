import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Header, MainNav, BBsMain, BBsWrite, Footer, BBsDetail} from './comps'


function App() {
  return (
	<Router>
    	<div className="App">
			<Header />
			<MainNav />
			<section className="main_section">
				<Route path="/" component={BBsMain} exact/>
				<Switch>
				<Route path="/write/:id" component={BBsWrite} exact/>
				<Route path="/write" component={BBsWrite} exact/>
				<Route path="/detail/:id" component={BBsDetail} exact /> 
				</Switch>
			</section>
			<Footer />
    	</div>
	</Router>
  );
}

export default App;

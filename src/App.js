import React, { Component } from 'react';
import './App.css';
import Podcast from './component/podcasts';
import Episode from './component/episodes';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
const Landing = () => (
	<div>
		<h3>This is landing page with Podcast and Episode</h3>
		<Podcast />
		<Episode />
	</div>
);
const Header = () => (
	<div className='Header'>
		Header |<Link to='/episodes'> Go to Episodes</Link>|
		<Link to='/podcasts'> Go to Podcasts</Link>
	</div>
);

class App extends Component {
	render() {
		return (
			<div className='App'>
				<BrowserRouter>
					<div>
						<Header />
						<Switch>
							<Route exact path='/' component={Landing} />
							<Route path='/episodes' component={Episode} />
							<Route path='/podcasts' component={Podcast} />
						</Switch>
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;

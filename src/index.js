import './style';
import { Component } from 'preact';

import Hero from './components/hero/hero';

export default class App extends Component {
	render() {
		return (
			<div class="main">
				<Hero />
			</div>
		);
	}
}
import React, { Component } from 'react'
import { Main } from '../main'
import { Header } from './common/header'
import { Nav } from './common/nav'

export class App extends Component {
	render() {
		return (
			<div id="app">
				<Header />
				<Nav />
				<Main />
			</div>
		);
	}
}

export default App

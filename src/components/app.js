import React, { Component } from 'react'
import { Main } from './main'
import { Header } from './common/header'

export class App extends Component {
	render() {
		return (
			<div id="app">
				<Header />
				<Main />
			</div>
		);
	}
}

export default App

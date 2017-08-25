import React, { Component } from 'react'
import { Nav } from './nav'

export class Header extends Component {
	render() {
		return (
			<header>
				<div className="logo"></div>
				<Nav />
			</header>
		);
	}
}

export default Header

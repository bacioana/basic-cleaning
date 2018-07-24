import React, {Component} from 'react';
import logo from './logoBasic.svg';
import './App.css';

class homeView extends Component {

	render () {
		return (
			<div className="App">
	        	<div id='hamburgerMenu' tabIndex='0' role="navigation">
		            <div></div>
		            <div></div>
		            <div></div>
				</div>
				<div className='logo'><img className='basicLogo' src={logo} alt='basic cleaning logo'></img></div>
			</div>
		)
	}

}

export default homeView
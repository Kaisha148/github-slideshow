import React, { useState } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './css/App.css';
import Login from './login';
import Top from './top';
import DriverList from './driverlist';
import Tab from './components/tab';
function App() {
	const [loginState, setLoginState] = useState(false)
	if(loginState) {
		return (
			<Login setLoginState={setLoginState}/>
		)
	}else {
		return (
			// <Tab />
			<BrowserRouter>
				<Tab />
			{/* <h1>画面一覧</h1>
			<nav>
				<ul>
				<li><Link to='/login'>Login</Link></li>
				<li><Link to='/top'>Top</Link></li>
				<li><Link to='/driverlist'>ドライバー一覧</Link></li>
				</ul>
			</nav> */}
				<article>
					<Route path='/login' component={Login} />
					<Route path='/top' component={Top} />
					<Route path='/' component={DriverList} />
				</article>
			</BrowserRouter>
		)
	}
}

export default App;
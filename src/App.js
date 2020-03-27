import React from 'react';
import './App.css';

import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx'

import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {
	
	{/*
	let postsData = [
		{id : 1, message: 'Fist message', likesCount : 15},
		{id : 2, message: 'Second message', likesCount : 30},
		{id : 3, message: 'Theard message', likesCount : 50},
		{id : 4, message: 'Forth message', likesCount : 0}
	]
	*/}	
	{/*
	let dialogsData = [
		{id : 1, name: 'Andrey'},
		{id : 2, name: 'Sveta'},
		{id : 3, name: 'Ira'},
		{id : 4, name: 'Vika'},
		{id : 5, name: 'Vlad'},
		{id : 6, name: 'Amyr'}
	]
	*/}
  return (
	<BrowserRouter>
		<div className='app-wrapper'>
			<Header/>
			<Navbar/>
			<div className='app-wrapper-content'>
				{/*
				<Route path='/profile' component={Profile}/>
				<Route path='/dialogs' component={Dialogs}/>
				*/}
				{/*<Route path='/profile' render={() => <Profile postsData={postsData}/>}/>*/}
				<Route path='/profile' render={() => <Profile postsData={props.postsData}/>}/>
				<Route path='/dialogs' render={() => <Dialogs dialogsData={props.dialogsData} 
															  messagesData={props.messagesData}/>}/>
			</div>	
		</div>
	</BrowserRouter>
  )
}

export default App;

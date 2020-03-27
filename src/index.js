import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state from './redux/state.js'

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
	{/*
	let messagesData = [
		{id : 1, message: 'Hello everybody'},
		{id : 2, message: 'Your are fantastic!'},
		{id : 3, message: 'Do you wont to know more?"'},
		{id : 4, message: 'Way'},
		{id : 5, message: 'ChikiBom'}
	]
	*/}
	{/*
ReactDOM.render(<App postsData={postsData} 
					 dialogsData={dialogsData} 
					 messagesData={messagesData}/>, document.getElementById('root'));
*/}

ReactDOM.render(<App appState={state}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

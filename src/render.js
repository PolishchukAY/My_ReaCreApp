import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';
//import state from './redux/state.js';
import {addPost} from './redux/state'
import {updateNewPostText} from './redux/state'
import {BrowserRouter} from "react-router-dom";	


//export let rerenderEntireTree =() => {
export let rerenderEntireTree =(state) => {	
	ReactDOM.render(
		<BrowserRouter>
			<App appState={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
		</BrowserRouter>, document.getElementById('root')); 
	 
 }
 
 //newPostText={newPostText}
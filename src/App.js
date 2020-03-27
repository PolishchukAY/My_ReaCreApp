import React from 'react';
import './App.css';

import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx'

import {Route} from "react-router-dom";	

const App = (props) => {
		
  return (
		
		<div className='app-wrapper'>
			<Header/>
			<Navbar/>
			<div className='app-wrapper-content'>
				{/*
				<Route path='/profile' component={Profile}/>
				<Route path='/dialogs' component={Dialogs}/>
				*/}
				{/*<Route path='/profile' render={() => <Profile postsData={postsData}/>}/>*/}
				{/*<Route path='/profile' render={() => <Profile postsData={props.postsData}/>}/>*/}
				
				{/*
				<Route path='/profile' 
						render={() => <Profile postsData={props.appState.profilePage.postsData}/>}/>
				<Route path='/dialogs' 
						render={() => <Dialogs dialogsData={props.appState.dialogPage.dialogsData} 
												messagesData={props.appState.dialogPage.messagesData}/>}/>
				*/}
				
				
				<Route path='/profile' 
						render={() => <Profile 
							profilePage={props.appState.profilePage} 
							addPost={props.addPost} 
							updateNewPostText={props.updateNewPostText}/> }/>
				<Route path='/dialogs' 
						render={() => <Dialogs state={props.appState.dialogPage}/>}/>
												
			</div>	
		</div>
		
  )
}

export default App;

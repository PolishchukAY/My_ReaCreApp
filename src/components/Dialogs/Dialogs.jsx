import React from 'react';
import oo from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
//import {BrowserRouter, Route} from "react-router-dom";

const DialogItem = (props) =>{
	let path = "/dialogs/" + props.id;
	return(
		<div>
			<NavLink to={path}>{props.name}</NavLink>
		</div>	
	)
}

const Message = (props) => {
	return(
		<div className={oo.message}>{props.message}</div>
	)
}


const Dialogs = (props) => {
	
	let diallogsData = [
		{id : 1, name: 'Andrey'},
		{id : 2, name: 'Sveta'},
		{id : 3, name: 'Ira'},
		{id : 4, name: 'Vika'},
		{id : 5, name: 'Vlad'}
	]
	
	let messageData = [
		{id : 1, message: 'Hello everybody'},
		{id : 2, message: 'Your are fantastic!'},
		{id : 3, message: 'Do you wont to know more?"'},
		{id : 4, message: 'Way'},
		{id : 5, message: 'ChikiBom'}
	]
	
	return (
		<div className={oo.dialogs}>
			<div className={oo.dialogsItems}>
				<DialogItem name={diallogsData[0].name} id={diallogsData[0].id}/>
				<DialogItem name={diallogsData[1].name} id={diallogsData[1].id}/>
				{/*
				<DialogItem name="Andrey" id="1"/>
				<DialogItem name="Sveta" id="2"/>
				<DialogItem name="Ira" id="3"/>
				<DialogItem name="Vika" id="4"/>
				<DialogItem name="Vlad" id="5"/>
				*/}
			</div>	
			
			<div className={oo.messages}>
				<Message message={messageData[0].message}/>
				<Message message={messageData[1].message}/>
				{/*
				<Message message="Hello everybody"/>
				<Message message="Your are fantastic!"/>
				<Message message="Do you wont to know more?"/>
				*/}
			</div>	
			
		</div>	
    )
}
export default Dialogs;
import React from 'react';
import oo from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import Message from './Message/Message.jsx'
import DialogItem from './DialogItem/DialogItem.jsx'


const Dialogs = (props) => {
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
	///////////////////////////////////////////////////////////////////////////////////////
	{/*	let dialogsElements = dialogsData.map( d => <DialogItem name={d.name} id={d.id} /> );
		let dialogsElements = props.dialogsData.map( d => <DialogItem name={d.name} id={d.id} /> );*/}
		let dialogsElements = props.state.dialogsData.map( d => <DialogItem name={d.name} id={d.id} /> );
	///////////////////////////////////////////////////////////////////////////////////////
	{/*
	let dialogsElements = dialogsData 
	.map( dialog => <DialogItem name={dialog.name} id={dialog.id} /> );
	{/*
	let dialogsElements = [
		<DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>,
		<DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>,
		<DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
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
	//////////////////////////////////////////////////////////////////////////
	{/*	let messagesElements = messagesData.map(message => <Message message={message.message}/>);
		let messagesElements = props.messagesData.map(m => <Message message={m.message}/>);*/}
		let messagesElements = props.state.messagesData.map(m => <Message message={m.message}/>);
	//////////////////////////////////////////////////////////////////////////
	return (
		<div className={oo.dialogs}>
			<div className={oo.dialogsItems}>
				{/*********************************************/}
				{dialogsElements}
				{/*********************************************/}
				{/*
				{dialogsElements[0]}
				{dialogsElements[1]}
				{dialogsElements[2]}
				/*
				<DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
				<DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
				/*}
				{/*
				<DialogItem name="Andrey" id="1"/>
				<DialogItem name="Sveta" id="2"/>
				<DialogItem name="Ira" id="3"/>
				<DialogItem name="Vika" id="4"/>
				<DialogItem name="Vlad" id="5"/>
				*/}
			</div>	
			
			<div className={oo.messages}>
				{/*********************************************/}
				{messagesElements}
				{/*********************************************/}
				{/*
				<Message message={messagesData[0].message}/>
				<Message message={messagesData[1].message}/>
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
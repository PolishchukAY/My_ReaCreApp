import React from 'react';
import oo from './../Dialogs.module.css';


const Message = (props) => {
	return(
		<div className={oo.message}>{props.message}</div>
	)
}

export default Message;
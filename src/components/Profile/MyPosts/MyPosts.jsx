import React from 'react';
import oo from './MyPosts.module.css';
import Post from './Post/Post.jsx';

const MyPosts = (props) => {
	{/*
	let postsData = [
		{id : 1, message: 'Fist message', likesCount : 15},
		{id : 2, message: 'Second message', likesCount : 30},
		{id : 3, message: 'Theard message', likesCount : 50},
		{id : 4, message: 'Forth message', likesCount : 0}
	]
	*/}
	{/*
	let postElements = postsData.map ((post)=> <Post message={post.message} likes={post.likesCount}/>); 
	*/}
	///////////////////////////////////////////////////////////////////////////////////////
	let postElements = 
	props.postsData.map (p => <Post message={p.message} likes={p.likesCount}/>); 
	///////////////////////////////////////////////////////////////////////////////////////
	
    return (
		<div className={oo.postsBlock}>
			<h3>MyPosts</h3>
			<div>
				<div><textarea></textarea></div>
				<div><button> Add post </button></div>
				<hr/>
				<div className={oo.posts}>
					{/*********************************************/}
					{postElements}
					{/*********************************************/}
						{/*
						<Post message={postsData[0].message} likes={postsData[0].likesCount}/>
						<Post message={postsData[1].message} likes={postsData[1].likesCount}/>
						{/*
						<Post message='Fist message' likes='15'/>
						<Post message='Second message' likes='7'/>
						<Post message='Theard message'/>
						*/}
				</div>
				
			</div>
		</div>
    )
}
export default MyPosts;



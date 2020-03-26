import React from 'react';
import oo from './MyPosts.module.css';
import Post from './Post/Post.jsx';

const MyPosts = () => {
	
	let postData = [
		{id : 1, message: 'Fist message', likesCount : 15},
		{id : 2, message: 'Second message', likesCount : 30},
		{id : 3, message: 'Theard message', likesCount : 50}
	]
	
    return (
		<div className={oo.postsBlock}>
			<h3>MyPosts</h3>
			<div>
				<div><textarea></textarea></div>
				<div><button> Add post </button></div>
				<hr/>
				<div className={oo.posts}>
						<Post message={postData[0].message} likes={postData[0].likesCount}/>
						<Post message={postData[1].message} likes={postData[1].likesCount}/>
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



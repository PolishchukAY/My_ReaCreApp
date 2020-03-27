import React from 'react';
import oo from './MyPosts.module.css';
import Post from './Post/Post.jsx';

const MyPosts = (props) => {
	{/***********************************************************************************/}
	{/*	let postElements = postsData.map ((post)=> <Post message={post.message} likes={post.likesCount}/>); */}
		let postElements = props.postsData.map (p => <Post message={p.message} likes={p.likesCount}/>); 
	{/***********************************************************************************/}
	
	let newPostElement = React.createRef();	
	
	let addPost = () => {
		{/* alert('ALERT!!!') */}
		{/* ТАК ИСПОЛЬЗОВАТЬ НЕЛЬЗЯ!!! */}
		{/* let text = document.getElementById('new-post').value;   ТАК ИСПОЛЬЗОВАТЬ НЕЛЬЗЯ!!! */}
		{/**/}
		{/*let text = newPostElement.current.value;*/}
		props.addPost();
		{/* alert(text); */}
		{/* newPostElement.current.value='';*/}
		{/*props.updateNewPostText('');*/}
	}
	
	let onPostChange = () => {
		let text = newPostElement.current.value;
		console.log(text);
		props.updateNewPostText(text);
	}
	
    return (
		<div className={oo.postsBlock}>
			<h3>MyPosts</h3>
			<div>
				<div>
					<textarea onChange={onPostChange} ref={newPostElement} 
								value={props.newPostText}></textarea>
				</div>
				<div>
					<button onClick={ addPost }> Add post </button>
				</div>
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



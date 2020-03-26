import React from 'react';
import oo from './MyPosts.module.css';
import Post from './Post/Post.jsx';

const MyPosts = () => {
    return (
		<div>
			MyPosts
			<div>
				<textarea></textarea>
				<button> Add post </button>
				<button> Remove </button>
				<hr/>
				<div className={oo.posts}>
						<Post message='Fist message' likes='15'/>
						<Post message='Second message' likes='7'/>
						<Post message='Theard message'/>
						
				</div>
				
			</div>
		</div>
    )
}
export default MyPosts;
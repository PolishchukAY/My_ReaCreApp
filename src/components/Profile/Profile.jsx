import React from 'react';
import oo from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts.jsx';
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";

const Profile = (props) => {
	
	{/*
	let postsData = [
		{id : 1, message: 'Fist message', likesCount : 15},
		{id : 2, message: 'Second message', likesCount : 30},
		{id : 3, message: 'Theard message', likesCount : 50},
		{id : 4, message: 'Forth message', likesCount : 0}
	]
	*/}	
	
	
    return (
		<div > 
			<ProfileInfo/>
			{/* <MyPosts/> */}
			{/* <MyPosts postsData={postsData}/> */}
			<MyPosts postsData={props.postsData}/>
		</div>
    )
}
export default Profile;
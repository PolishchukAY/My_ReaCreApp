import React from 'react';
import oo from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts.jsx';
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";

const Profile = (props) => {
		
    return (
		<div > 
			<ProfileInfo/>
			{/**********************************************/}
			{/* <MyPosts/> 
				<MyPosts postsData={postsData}/> 
				<MyPosts postsData={props.postsData}/>*/}
				<MyPosts postsData={props.profilePage.postsData} 
							newPostText={props.profilePage.newPostText}
							addPost={props.addPost}
							updateNewPostText={props.updateNewPostText}/>
			{/**********************************************/}
		</div>
    )
}
export default Profile;
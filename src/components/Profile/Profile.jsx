import React from 'react';
import oo from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts.jsx'

const Profile = () => {
    return (
	<div > 
			
			<div className='maincontent'>
				<img src ='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcToFRSPq7mwYz-lLjaJN3DUnlmj7xUIB67s8kdRWUSNuTKCVjGh'/>
			</div>

			<div>
                ava + discription
			</div>

			<MyPosts/>
			
			

            
		</div>
    )
}
export default Profile;
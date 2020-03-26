import React from 'react';
import oo from './Profile.module.css'

const Profile = () => {
    return (
	<div className={oo.content}> 
			
			<div className='maincontent'>
				<img src ='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcToFRSPq7mwYz-lLjaJN3DUnlmj7xUIB67s8kdRWUSNuTKCVjGh'/>
			</div>

			<div>
                ava + discription
			</div>

			<div>
                
			</div>

            <div>
				MyPosts
                <div>
					NewPost
				</div>
                <div className={oo.posts}>
                    <div className={oo.item}> post1 </div>
                    <div className={oo.item}> post2 </div>
				</div>

			</div>

            <div></div>
            <div></div>
		</div>
    )
}
export default Profile;
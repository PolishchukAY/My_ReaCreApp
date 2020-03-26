import React from 'react';
import oo from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
		<div> 
			<div className='maincontent'>
				<img src ='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcToFRSPq7mwYz-lLjaJN3DUnlmj7xUIB67s8kdRWUSNuTKCVjGh'/>
			</div>

			<div className={oo.discriptionBlock}>
                ava + discription
			</div>
			
		</div>
    )
}
export default ProfileInfo;
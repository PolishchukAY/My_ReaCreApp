import React from 'react';
import oo from './Navbar.module.css'


const Navbar = () => {
    return (
        <nav className={oo.nav}>
            <div className={oo.item}> 
				<a href="/profile"> Profile </a> 
			</div>
            <div className={`${oo.item} ${oo.active}`}>
				<a href="/dialogs"> Messeges </a> 
			</div>
            <div className={oo.item}> <a> News </a> </div>
            <div className={oo.item}> <a> Music </a> </div>
			
            <div className={oo.item}> <a> Settings </a> </div>

        </nav>
    )
}
export default Navbar;
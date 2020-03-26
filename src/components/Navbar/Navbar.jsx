import React from 'react';
import oo from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={oo.nav}>
		
            <div className={oo.item}> 
				<NavLink to="/profile" activeClassName={oo.activeLink}> 
					Profile 
				</NavLink> 
			</div>
			
            <div className={`${oo.item} ${oo.active}`}>
				<NavLink to="/dialogs" activeClassName={oo.activeLink}> 
					Dialogs 
				</NavLink> 
			</div>
			
            <div className={oo.item}> 
				<a> 
					News 
				</a> 
			</div>
            <div className={oo.item}>
				<a> 
					Music 
				</a> 
			</div>
			
            <div className={oo.item}> 
				<a> 
					Settings 
				</a> 
			</div>

        </nav>
    )
}
export default Navbar;
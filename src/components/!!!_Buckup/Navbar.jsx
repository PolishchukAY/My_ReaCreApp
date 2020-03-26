import React from 'react';
import oo from './Navbar.module.css'
//console.log(oo);
/* let s={
	'nav':'Navbar_nav__30xxxxx'
	'item':'Navbar_item__3qxxxx'
	'active':'Navbar_active__xxxxx'
} */

 /* 
 <div className="item active"> <a> Profile </a> </div> 
 */
//let c1="item"
//let c2="active"
//let classes="item active"
//let classes=c1+" "+c2;
//let classes=`${c1} ${c2}`;//шаблонная строка ё тильда
//let classes=`${oo.item} ${oo.active}`;//шаблонная строка ё тильда

const Navbar = () => {
    return (
        <nav className={oo.nav}>
            <div className={oo.item}> <a> Profile </a> </div>
            <div className={`${oo.item} ${oo.active}`}> <a> Messeges </a> </div>
            <div className={oo.item}> <a> News </a> </div>
            <div className={oo.item}> <a> Music </a> </div>
			
            <div className={oo.item}> <a> Settings </a> </div>

        </nav>
    )
}
export default Navbar;
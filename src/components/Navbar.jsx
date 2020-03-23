import React from 'react';
import myclases from './Navbar.module.css'
console.log(myclases);
/* let s={
	'nav':'Navbar_nav__30xxxxx'
	'item':'Navbar_item__3qxxxx'
	'active':'Navbar_active__xxxxx'
} */

 /* 
 <div className="item active"> <a> Profile </a> </div> 
 */
let c1="item"
let c2="active"
//let classes="item active"
//let classes=c1+" "+c2;
//let classes=`${c1} ${c2}`;//шаблонная строка ё тильда
let classes=`${myclases.item} ${myclases.active}`;//шаблонная строка ё тильда

const Navbar = () => {
    return (
        <nav className={myclases.nav}>
            <div className={myclases.item}> <a> Profile </a> </div>
            <div className={`${myclases.item} ${myclases.active}`}> <a> Messeges </a> </div>
            <div className={myclases.item}> <a> News </a> </div>
            <div className={myclases.item}> <a> Music </a> </div>
			
            <div className={myclases.item}> <a> Settings </a> </div>

        </nav>
    )
}
export default Navbar;
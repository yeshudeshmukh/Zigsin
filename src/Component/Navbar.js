import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className=''>
            <div className="navbar">
                <div className="brand">
                    <span className='logo'>&#128512;</span>

                    <span className='brand-name'>FRIEND.finder</span>
                    <i className="fas fa-heart"></i>
                </div>
                <div className="menu">
                    <ul className='menu-list'>

                        <Link to='Team' className='menu-item'><li >Team</li></Link>

                        <Link to='Contacts' className='menu-item'><li >Contacts</li></Link>
                        <Link to='Issues' className='menu-item'><li >Issues</li></Link>
                        <Link to='Info' className='menu-item'><li >Info</li></Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Navbar;
import React from 'react';
import { Link, NavLink } from 'react-router';
import './home.css'
const Header = () => {
    return (
        <div>
            <h3>This is Header </h3>
            <nav className='nav'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/laptops'>Laptops</NavLink>
                <NavLink to='/mobiles'>Mobiles</NavLink>
                <NavLink to='users'>Users</NavLink>
                <NavLink to='post'>Posts</NavLink>
            </nav>
        </div>
    );
};

export default Header;
import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router';
import Footer from './Footer';
import SideBar from './SideBar';
import './root.css'
import Navbar from './Navbar';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <div className='root-main'>
                <SideBar></SideBar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;
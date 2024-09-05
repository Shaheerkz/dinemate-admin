import React from 'react'
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Right from './dashboard/Right';
import MobileMenu from './dashboard/MobileMenu';


function Wrapper() {
  return (
    <div className='w-container'>
    <Sidebar />
    <Outlet />
    <Right/>
    <MobileMenu/>
  </div>
  )
}

export default Wrapper
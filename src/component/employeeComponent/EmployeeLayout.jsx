import React from 'react'
import { Outlet } from 'react-router-dom'
import EmployeeSidebar from './EmployeeSidebar'
import Navbar from '../comman/Navbar'

function EmployeeLayout() {
    return (
        <div className=' px-5 flex md:flex-row flex-col h-screen  bg-[#001434] text-white'>
            <aside className='md:w-[23%] mt-10 overflow-y-scroll mb-13 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'>
                <EmployeeSidebar />
            </aside>
            <main className=' mt-10'>
                <Navbar />
                <Outlet />
            </main>
        </div>
    )
}

export default EmployeeLayout

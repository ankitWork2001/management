import React from 'react'
import Navbar from '../comman/Navbar'
import { Outlet } from 'react-router-dom'
import AdminSidebar from './AdminSidebar'

function AdminLayout() {
    return (
        <div className=' px-5 flex md:flex-row flex-col h-screen  bg-[#001434] text-white'>
            <aside className='md:w-[23%] mt-10 overflow-y-scroll mb-13 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'>
                <AdminSidebar />
            </aside>
            <main className=' mt-10'>
                <Navbar />
                <Outlet />
            </main>
        </div>
    )
}

export default AdminLayout

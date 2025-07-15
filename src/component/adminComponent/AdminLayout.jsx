import React from 'react'
import Navbar from '../comman/Navbar'
import { Outlet } from 'react-router-dom'
import AdminSidebar from './AdminSidebar'

function AdminLayout() {
    return (
            <div className=' px-5 flex'>
                <aside className='w-[15%]'>
                    <AdminSidebar />
                </aside>
                <main>
                    <Navbar />
                    <Outlet />
                </main>
        </div>
    )
}

export default AdminLayout

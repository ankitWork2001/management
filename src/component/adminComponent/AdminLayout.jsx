import React from 'react'
import Navbar from '../comman/Navbar'
import { Outlet } from 'react-router-dom'
import AdminSidebar from './AdminSidebar'

function AdminLayout() {
    return (
        <div>
            <nav>
                <Navbar />
            </nav>
            <div className=' px-5 flex'>
                <aside className='w-[15%]'>
                    <AdminSidebar />
                </aside>
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default AdminLayout

import React from 'react'
import { Outlet } from 'react-router-dom'
import EmployeeSidebar from './EmployeeSidebar'
import Navbar from '../comman/Navbar'

function EmployeeLayout() {
  return (
    <div>
            <nav>
                <Navbar />
            </nav>
            <div className=' px-5 flex'>
                <aside className='w-[15%]'>
                    <EmployeeSidebar />
                </aside>
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
  )
}

export default EmployeeLayout

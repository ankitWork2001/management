import React, { useState } from 'react'

const leaveRequests = [
  {
    name: "Ravi Chopda",
    date: "25 April 2025",
    type: "Sick",
    status: "Approved"
  },
  {
    name: "Raj Odedara",
    date: "26 April 2025",
    type: "Marriage",
    status: ["Approve", "Reject"] // actions available
  },
  {
    name: "Manali Jadav",
    date: "23 April 2025",
    type: "Vacation",
    status: ["Approve", "Reject"]
  },
  {
    name: "Keval Lalkiya",
    date: "20 April 2025",
    type: "NA",
    status: "Rejected"
  },
  {
    name: "Nitin Manek",
    date: "25 April 2025",
    type: "Vacation",
    status: ["Approve", "Reject"]
  }
];

function LeaveRequests() {
  return (
    <div className='mt-10'>
      <div className='flex gap-10'>
        <div className='flex gap-3'>
          <p className='text-lg'>Employee</p>
          <select className="md:px-10 px-5 py-2 bg-[#1A1A1A] text-gray-400 text-sm rounded-md border border-gray-700 focus:outline-none ">
            <option value="all">All</option>
          </select>
        </div>
        <div className='flex gap-3'>
          <p className='text-lg'>Date</p>
          <select className=" md:px-6 px-3 py-2 bg-[#1A1A1A] text-gray-400 text-sm rounded-md border border-gray-700 focus:outline-none ">
            <option value="this_week">This Week</option>
          </select>
        </div>
      </div>

      <div className=' mt-10'>
        <table className='table-auto w-[90%] text-left'>
          <thead className='bg-gray-900 '>
            <th className='px-4 py-2 '>Employee Name</th>
            <th className='px-4 py-2  '>Date</th>
            <th className='px-4 py-2 '>Type</th>
            <th className='px-4 py-2 text-center'>Status</th>
          </thead>
          <tbody>
            {
              leaveRequests.map((request, index) => (
                <tr className='text-[#A0AEC0] border-b border-gray-700'>
                  <td className='px-5 py-3 w-[25%]'>{request.name}</td>
                  <td className='px-5 py-3 w-[25%]'>{request.date}</td>
                  <td className='px-5 py-3 w-[25%]'>{request.type}</td>
                  <td className='flex justify-center py-3 px-5'>
                    {
                     request.status === "Approved" ? <p className='text-[#21AF5A]'>{request.status}</p> : request.status === "Rejected" ?  <p className='text-[#DA3B32]'>{request.status}</p> : request.status.map((option,index) => <button key={index} className={`${option === 'Approve' ? 'bg-[#21AF5A]' : 'bg-[#DA3B32]'} text-white px-3 rounded mr-3 hover:cursor-pointer`}>{option}</button>)
                    }
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default LeaveRequests

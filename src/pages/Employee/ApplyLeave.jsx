import React from 'react'

function ApplyLeave() {
  return (
    <div className='space-y-8 pl-5 my-10'>
      <div className='flex flex-col gap-2 '>
        <label htmlFor="type" className='text-xl font-semibold'>Leave Type</label>
        <select id="type" className='md:w-[25%] outline-none cursor-pointer text-lg text-[#A0AEC0]'>
          <option name="leave type" >Anual Leave (3-5 Days)</option>
        </select>
      </div>

      <div className='flex flex-col gap-2 '>
        <label htmlFor="type" className='text-xl font-semibold'>Leave Date</label>
        <div className='flex md:gap-14 gap-6 md:flex-row flex-col'>
          <div className='flex flex-col gap-1'>
            <label htmlFor="from" className='text-xl text-[#7A97B5]'>From</label>
            <input type="date" id='from' className='bg-white text-lg cursor-pointer text-black px-4 py-2 rounded-4xl' />
          </div>
          <div className='flex flex-col gap-1'>
            <label htmlFor="from" className='text-xl text-[#7A97B5]'>To</label>
            <input type="date" id='from' className='bg-white text-lg cursor-pointer text-black px-4 py-2 rounded-4xl' />
          </div>
        </div>
      </div>

      <div className='flex gap-14'>
        <div className='flex flex-col gap-2 md:w-[20%] w-full'>
          <label htmlFor='leaveMethod' className='text-xl font-semibold'>Leave Mothod</label>
          <select id="leaveMethod" className='text-lg text-[#7A97B5] cursor-pointer'>
            <option value="Whole Day">Whole Day</option>
          </select>
        </div>
        <div className='flex flex-col gap-2 md:w-[20%] w-full'>
          <label htmlFor='session' className='text-xl font-semibold'>Session</label>
          <select id="session" className='text-lg text-[#7A97B5] cursor-pointer'>
            <option value="1st Half">1st Half</option>
          </select>
        </div>
      </div>

      <div className='flex flex-col gap-2 md:w-[70%] '>
        <label htmlFor="reason" className='text-xl font-semibold'>Reason</label>
        <textarea id="reason" placeholder='Reason' className='border border-[#7A97B5] px-3 py-3 text-lg'/>
      </div>

      <button className=' bg-[#0075FF] md:w-42 py-3 mb-2  w-full  rounded text-xl font-semibold cursor-pointer'>Submit</button>
    </div>
  )
}

export default ApplyLeave

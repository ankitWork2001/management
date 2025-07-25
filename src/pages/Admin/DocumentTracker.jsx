import React, { useState } from 'react'
import { IoIosSearch } from 'react-icons/io'
import { IoSearchSharp } from 'react-icons/io5'
import { RxCross2 } from 'react-icons/rx'

const documentStatus = [
  {
    name: "Ravi Chopda",
    resume: "Uploaded",
    idCard: "Uploaded",
    offerLetter: "Pending",
    certificate: "Pending"
  },
  {
    name: "Raj Odedara",
    resume: "Uploaded",
    idCard: "Pending",
    offerLetter: "Uploaded",
    certificate: "Uploaded"
  },
  {
    name: "Manali Jadav",
    resume: "Uploaded",
    idCard: "Uploaded",
    offerLetter: "Uploaded",
    certificate: "Uploaded"
  },
  {
    name: "Keval Lalkiya",
    resume: "Pending",
    idCard: "Pending",
    offerLetter: "Pending",
    certificate: "Pending"
  },
  {
    name: "Nitin Manek",
    resume: "Uploaded",
    idCard: "Uploaded",
    offerLetter: "Pending",
    certificate: "Uploaded"
  }
];


function DocumentTracker() {
  const [search, setSearch] = useState('')
  const [toggleSearch, setToggleSearch] = useState(false)
  const [searchResult, setSearchResult] = useState(documentStatus)

  const cancleSearch = () => {
    setSearchResult(documentStatus)
    setSearch('')
  }

  const filterEmployee = () => {
    const filter = searchResult.filter((employee) => { if (employee.name.toLocaleLowerCase() === search.toLocaleLowerCase()) return employee })
    setSearchResult(filter)
  }
  return (
    <div className='mt-10'>
      <div className='flex gap-5'>
        <div className='flex gap-3  md:w-[60%]'>
          <div className='w-full flex items-center rounded-lg gap-2 bg-black py-2 px-2'>
            <IoIosSearch className='text-[#A0AEC0] text-lg' />
            <input type="text" placeholder='Search...' value={search} onChange={(e) => setSearch(e.target.value)} className='outline-none text-lg w-full' />
          </div>
          <div className='bg-[#0075FF] px-3 flex items-center py-2 rounded-lg text-xl hover:cursor-pointer'>
            {toggleSearch ? <RxCross2 onClick={() => { setToggleSearch(false), cancleSearch() }} /> : <IoSearchSharp onClick={() => { setToggleSearch(true), filterEmployee() }} />}
          </div>
        </div>
        <div className='flex items-center gap-5'>
          <p className='text-lg font-semibold hidden md:block'>Employee</p>
          <select className='bg-gray-900 py-2 px-2 outline-none'>
            <option value="all" >All</option>
          </select>
        </div>
      </div>

      <div className='mt-10 scrollbar h-[55vh] overflow-x-scroll '>
        <table className='w-[90%] text-left '>
          <thead>
            <tr>
              <th className='px-4 py-3'>Employee Name</th>
              <th className='px-4 py-3'>Resume</th>
              <th className='px-4 py-3'>ID Card</th>
              <th className='px-4 py-3'>Offer Latter</th>
              <th className='px-4 py-3'>Certificate</th>
            </tr>
          </thead>
          <tbody>
            {
              searchResult.map((employee,index) => (
                <tr className='border-b border-gray-700'>
                  <td className='px-4 py-3 text-[#D8D8D8]'>{employee.name}</td>
                  <td className={`${employee.resume === 'Uploaded' ? 'text-[#21AF5A]' : 'text-[#F5A130]' } px-4 py-3`}>{employee.resume}</td>
                  <td className={`${employee.idCard === 'Uploaded' ? 'text-[#21AF5A]' : 'text-[#F5A130]' } px-4 py-3`}>{employee.idCard}</td>
                  <td className={`${employee.offerLetter === 'Uploaded' ? 'text-[#21AF5A]' : 'text-[#F5A130]' } px-4 py-3`}>{employee.offerLetter}</td>
                  <td className={`${employee.certificate === 'Uploaded' ? 'text-[#21AF5A]' : 'text-[#F5A130]' } px-4 py-3`}>{employee.certificate}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DocumentTracker

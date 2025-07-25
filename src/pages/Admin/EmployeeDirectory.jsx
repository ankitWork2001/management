import React, { useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { IoMdEye } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";


const employees = [
  {
    name: "Hitesh Odedara",
    email: "ohitesh@gmail.com",
    phone: "7567856938",
    position: "UI/UX Designer",
  },
  {
    name: "Raj Odedara",
    email: "raj003@gmail.com",
    phone: "8356497621",
    position: "Graphic Designer",
  },
  {
    name: "Keval Lalkiya",
    email: "lk007@gmail.com",
    phone: "8849766123",
    position: "Web Developer",
  },
  {
    name: "Manali Jadav",
    email: "mjod7@gmail.com",
    phone: "9820760044",
    position: "Data Analysis",
  },
  {
    name: "Nitin Manek",
    email: "nitinm7@gmail.com",
    phone: "8174685298",
    position: "UI/UX Designer",
  },
  {
    name: "Utsav Karena",
    email: "ukarena@gmail.com",
    phone: "9325182612",
    position: "Backend Developer",
  },
  {
    name: "Diva Odedara",
    email: "divaodh@gmail.com",
    phone: "9558952878",
    position: "HR Executive",
  }
];
function EmployeeDirectory() {
  const [search, setSearch] = useState('')
  const [toggleSearch,setToggleSearch] = useState(false)
  const [searchResult, setSearchResult] = useState(employees)

  const cancleSearch = () => {
    setSearchResult(employees)
    setSearch('')
  }

  const filterEmployee = () => {
    const filter = searchResult.filter((employee) => { if (employee.name.toLocaleLowerCase() === search.toLocaleLowerCase() || employee.email.toLocaleLowerCase() === search.toLocaleLowerCase() || employee.phone.toLocaleLowerCase() === search.toLocaleLowerCase() || employee.position.toLocaleLowerCase() === search.toLocaleLowerCase()) return employee })
      console.log(employees[1].email.toLocaleLowerCase())
      console.log(search.toLocaleLowerCase())
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
          <div  className='bg-[#0075FF] px-3 flex items-center py-2 rounded-lg text-xl hover:cursor-pointer'>
            {toggleSearch ? <RxCross2 onClick={() =>{setToggleSearch(false),cancleSearch()}}/> : <IoSearchSharp onClick={() => {setToggleSearch(true), filterEmployee()}} />}
          </div>
        </div>
        <div className='flex items-center gap-5'>
          <p className='text-lg font-semibold hidden md:block'>Employee</p>
          <select className='bg-gray-900 py-2 px-2 outline-none'>
            <option value="all" >All</option>

          </select>
        </div>
      </div>

      <div className='mt-15  scrollbar h-[55vh] mb-4 overflow-y-scroll '>
        <table className='w-[85%] text-left '>
          <thead className='py-2 '>
            <tr className='bg-[#050E28]'>
              <th className='py-2 px-5 md:px-0'>Name</th>
              <th className='py-2 px-5 md:px-0'>Email</th>
              <th className='py-2 px-5 md:px-0'>Phone No.</th>
              <th className='py-2 px-5 md:px-0'>Position</th>
              <th className='py-2 px-5 md:px-0'>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              searchResult.map((employee, index) => (
                <tr className='border-b border-gray-600 text-[#A0AEC0]' key={index}>
                  <td className='py-4 px-5 lg:px-0'>{employee.name}</td>
                  <td className='py-4 px-5 lg:px-0'>{employee.email}</td>
                  <td className='py-4 px-5 lg:px-0'>{employee.phone}</td>
                  <td className='py-4 px-5 lg:px-0'>{employee.position}</td>
                  <td className='py-4 px-5 lg:px-0'><div className='flex gap-3 text-xl'>
                    <MdOutlineModeEditOutline className='text-[#F13641] hover:cursor-pointer' />
                    <IoMdEye className='hover:cursor-pointer text-white' />
                  </div></td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default EmployeeDirectory

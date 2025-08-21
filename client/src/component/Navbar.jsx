import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full flex justify-between h-15 items-center bg-gray-200 shadow px-5'>
        <div className='w-[10%] flex items-center h-full'>
        <h1 className='font-bold text-zinx-800 '>LOGO</h1>
        </div>
        <div className='w-[50%] h-full'>
            <ul className='w-full flex gap-6 list-noe items-center h-full text-zinc-800 font-medium '>
                <li className='cursor-pointer'>Home</li>
                <li className='cursor-pointer'>About</li>
                <li className='cursor-pointer'>Contact</li>
                
            </ul>    
            
        </div> 
    </div>
  )
}    

export default Navbar;
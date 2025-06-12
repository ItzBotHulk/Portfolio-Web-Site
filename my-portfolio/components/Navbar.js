import React from 'react'

const Navbar = () => {
  return (
    <nav className='glow overflow-x-hidden-hidden  my-6 mx-[10vw] bg-[#1a0b2e] flex justify-between items-center h-20 w-[80vw] rounded-full fixed top-0 text-white'>
        <div className="logo mx-7 cursor-pointer">Portfolio</div>
        <ul className='flex justify-center items-center'>
            <li className='mx-7 cursor-pointer'>Home</li>
            <li className='mx-7 cursor-pointer'>About</li>
            <li className='mx-7 cursor-pointer'>Resume</li>
        </ul>
    </nav>    
  )
}

export default Navbar

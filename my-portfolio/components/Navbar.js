
'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  const [hide, setHide] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const halfScreen = window.innerHeight / 2
      if (window.scrollY > halfScreen) {
        setHide(true)
      } else {
        setHide(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
    <nav className='max-w-[100vw] flex justify-center items-center w-full overflow-y-hidden'>
      <div className={`navbar glow overflow-x-hidden my-6 md:mx-56 mx-auto flex justify-between items-center h-20 rounded-full fixed top-0 left-auto w-full transition-transform duration-300 transform z-50 
        ${hide ? '-translate-y-[30vw]' : 'translate-y-0'}
        bg-[#1a0b2e] text-white p-4`}>

        <div className="logo mx-4 cursor-pointer text-xl font-bold">Portfolio</div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex justify-center items-center text-xl gap-4">
          <Link href="/document/resume.pdf" target='_blank'><li className=" cursor-pointer hover:text-2xl ">Resume</li></Link>
          <a href='/document/resume.pdf' download='/document/resume.pdf'><Image width={10} height={10} className='invert-100 w-7 hover:w-10' src="/bgs/download.svg" alt="" /></a>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className='flex justify-center items-center max-w-[100vw]'>
        <div className="md:hidden fixed top-24 w-[60vw] justify-center flex bg-[#1a0b2e] rounded-xl shadow-lg z-40 text-white py-4 px-6 ">
          <ul className="flex flex-col justify-center items-center gap-3">
             <Link href="/document/resume.pdf" target='_blank'><li className=" cursor-pointer">Resume</li></Link>
          <a href='/document/resume.pdf' download='/document/resume.pdf'><Image width={10} height={10} className='invert-100 w-7 ' src="/bgs/download.svg" alt="" /></a>
          </ul>
        </div>
        </div>
      )}
      </nav>
    </>
  )
}

export default Navbar

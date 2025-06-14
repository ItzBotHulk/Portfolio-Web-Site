import React from 'react'
import Link from 'next/link'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <>
        <footer className='bg-black'>

            <section className='grid grid-cols-2 w-screen '>
                <div className='text-white w-full'>
                    <div className="social flex justify-center gap-4 pt-[20vh]">
                        <Link href="https://www.linkedin.com/in/priyanshu-20x/" target='_blank'><img className='invert-100 rounded-lg hover:cursor-pointer textglow' src="/bgs/linkedin.svg" width={30} alt="linkedin" /></Link>
                        <Link href="https://github.com/ItzBotHulk" target='_blank'><img className='invert-100 rounded-lg hover:cursor-pointer textglow' src="/bgs/github.svg" width={30} alt="github" /></Link>
                        <Link href="mailto:prajapatipriyanshu123p2@gmail.com" target='_blank'><img className='invert-100 rounded-lg hover:cursor-pointer textglow' src="/bgs/mail.svg" width={30} alt="mail" /></Link>
                    </div>
                </div>
                <div className="gif justify-start items-center flex pl-40 ">
                    <img src="/bgs/comp.gif" alt="gif" width={300} />
                </div>
            </section>
            <div className='flex h-20 pl-[35vw] pt-5'>
                <p className='text-center text-white'>Copyright &copy; {currentYear} Priyanshu's Portfolio - All rights reserved!</p>
            </div>
        </footer>
        </>
    )
}

export default Footer

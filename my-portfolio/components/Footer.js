import React from 'react'
import Link from 'next/link'
import Image from 'next/image';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <>
        <footer className='bg-black'>

            <section className='md:grid md:grid-cols-2 flex flex-col justify-center items-center w-screen '>
                <div className='text-white w-full'>
                    <div className="social flex justify-center gap-4 pt-[5vh] md:pt-0">
                        <Link href="https://www.linkedin.com/in/priyanshu-20x/" target='_blank'><Image height={30} className='invert-100 rounded-lg hover:cursor-pointer textglow' src="/bgs/linkedin.svg" width={30} alt="linkedin" /></Link>
                        <Link href="https://github.com/ItzBotHulk" target='_blank'><Image height={30}  className='invert-100 rounded-lg hover:cursor-pointer textglow' src="/bgs/github.svg" width={30} alt="github" /></Link>
                        <Link href="mailto:prajapatipriyanshu123p2@gmail.com" target='_blank'><Image height={30}  className='invert-100 rounded-lg hover:cursor-pointer textglow' src="/bgs/mail.svg" width={30} alt="mail" /></Link>
                    </div>
                    <div>
                        <p className='text-center pt-5'>prajapatipriyanshu123p2@gmail.com</p>
                    </div>
                </div>
                <div className="gif justify-start items-center flex md:px-40 md:w-[60vw] ">
                    <Image height={300}  src="/bgs/comp.gif" alt="gif" width={300} />
                </div>
            </section>
            <div className='flex justify-center items-center w-[100vw] h-20 pt-5'>
                <p className='text-center text-white'>Copyright &copy; {currentYear} Priyanshu's Portfolio - All rights reserved!</p>
            </div>
        </footer>
        </>
    )
}

export default Footer

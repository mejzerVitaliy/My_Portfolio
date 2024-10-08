import Link from 'next/link'
import React from 'react'

interface NavbarProps{
    selectedPage: string
}

const Navbar: React.FC<NavbarProps> = ({selectedPage}) => {
    return (
        <nav className='w-full h-[60px] lg:h-[80px] sticky top-0 z-10 flex justify-center rounded-b-full bg-[#111] border-x border-b'>
            <section className=' w-[80%] h-full grid place-items-center '>
                <ul className='w-full flex justify-evenly '>
                    <li > 
                        <Link className={` transition-colors duration-500 cursor-default  w-[80px] sm:w-[160px] lg:w-[200px] xl:w-[250px] h-[30px] lg:h-[40px] text-[14px] sm:text-[18px] lg:text-[24px] xl:text-[26px] grid place-content-center rounded-[16px] ${selectedPage === '/' ? 'bg-slate-700' : 'hover:bg-slate-900'}`} href={'/'}>About site</Link>
                    </li>

                    <li > 
                        <Link className={` transition-colors duration-500 cursor-default w-[80px] sm:w-[160px] lg:w-[200px] xl:w-[250px] h-[30px] lg:h-[40px] text-[14px] sm:text-[18px] lg:text-[24px] xl:text-[26px] grid place-content-center rounded-[16px] ${selectedPage === 'aboutMe' ? 'bg-slate-700' : 'hover:bg-slate-900'}`} href={'/aboutMe'}>About me</Link>
                    </li>

                    <li > 
                        <Link className={` transition-colors duration-500 cursor-default w-[80px] sm:w-[160px] lg:w-[200px] xl:w-[250px] h-[30px] lg:h-[40px] text-[14px] sm:text-[18px] lg:text-[24px] xl:text-[26px] grid place-content-center rounded-[16px] ${selectedPage === 'projects' ? 'bg-slate-700' : 'hover:bg-slate-900'}`} href={'/projects'}>Projects</Link>
                    </li>
                </ul>
            </section>
        </nav>
    )
}

export default Navbar
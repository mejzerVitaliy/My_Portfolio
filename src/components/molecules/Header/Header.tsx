import Link from 'next/link'
import React from 'react'

interface HeaderProps{
    title: string,
    selectedPage: string
}

const Header: React.FC<HeaderProps> = ({title, selectedPage}) => {
    return (
        <header className='w-full h-[100px] fixed top-0 grid place-items-center rounded-b-full blured border-b '>
            <section className=' w-[85%] h-full flex justify-between items-center'>
                <h1>{title}</h1>
                
                <ul className='flex justify-between gap-[16px]'>
                    <li > 
                        <Link className={`hover:bg-slate-900 w-[120px] h-[40px] grid place-content-center rounded-[16px] ${selectedPage === '/' && 'bg-slate-700'}`} href={'/'}>About site</Link>
                    </li>

                    <li > 
                        <Link className={`hover:bg-slate-900 w-[120px] h-[40px] grid place-content-center rounded-[16px] ${selectedPage === 'aboutMe' && 'bg-slate-700'}`} href={'/aboutMe'}>About me</Link>
                    </li>

                    <li > 
                        <Link className={`hover:bg-slate-900 w-[120px] h-[40px] grid place-content-center rounded-[16px] ${selectedPage === 'projects' && 'bg-slate-700'}`} href={'/projects'}>Projects</Link>
                    </li>
                </ul>
            </section>
        </header>
    )
}

export default Header
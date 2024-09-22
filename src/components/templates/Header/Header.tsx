import React from 'react'

const Header:React.FC = () => {
    return (
        <header className=" sticky top-[-100px] z-20 w-full h-[40px] sm:h-[60px] lg:h-[80px] border-x flex items-center justify-center bg-[#111]">
            <h1 className="text-[32px] lg:text-[40px] xl:text-[48px] font-karla font-black tracking-wider">My potfolio</h1>
        </header>
    )
}

export default Header
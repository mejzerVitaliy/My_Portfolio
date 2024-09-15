import React from 'react'

const Header:React.FC = () => {
    return (
        <header className=" sticky top-[-100px] z-20 w-full h-[60px] border-x flex items-center justify-center bg-[#111]">
            <h1 className="text-[48px]">My potfolio</h1>
        </header>
    )
}

export default Header
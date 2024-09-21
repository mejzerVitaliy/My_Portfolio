import React from 'react'
import AboutMobileDesktop from '../molecules/AboutMeDesktop'
import AboutMeMobile from '../molecules/AboutMeMobile'

const AboutMe: React.FC = () => {
    return (
        <main className=" w-[99%] sm:w-[85%] p-[20px] lg:p-[40px] sm:p-[30px] rounded-[40px] border m-[20px_0_100px] sm:m-[40px_0_160px] bg-[#111111c4]">
            <AboutMobileDesktop />
            <AboutMeMobile />
        </main>
    )
}

export default AboutMe
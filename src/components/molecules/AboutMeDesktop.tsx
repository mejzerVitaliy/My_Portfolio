/* eslint-disable */

import React from 'react'
import Hr from '../atoms/Hr'
import H3 from '../atoms/H3'
import P from '../atoms/P'

const AboutMobileDesktop:React.FC = () => {
    return (
        <section className=' hidden w-full sm:flex'>
            <aside className='w-[40%] flex flex-col items-center pr-[20px] border-r'>
                <img className='w-[200px] h-[200px] lg:size-[300px] my-[10px] object-cover rounded-[30px] border' src='/assets/MyPhoto.jpg' alt="My photo" />
                <H3><strong><i><u>Front-end developer</u></i></strong></H3>
                <article className='text-center'>
                    <H3>Personal data: </H3>
                    <article className='text-left'>
                        <P>Borned: <u>19.02.2007</u></P>
                        <P>Nationality: <u>Ukraine</u></P>
                        <P>Live in: <u>Odessa</u></P>
                        <P>Phone number: <u><a href="tel:+380636007473">+380636007473</a></u></P>
                        <P>Email: <u><a href="mailto:mejzervitalik@gmail.com">mejzervitalik@gmail.com</a></u></P>
                    </article>
                    <Hr/>
                    <article className='text-center'>
                        <H3>Expected Salary:</H3>
                        <P><strong><u>300 - 600$</u></strong></P>
                    </article>
                    <Hr/>
                    <article className='text-left'>
                        <H3><strong>Languages</strong></H3>
                        <ol className=' list-disc ml-[20px]'>
                            <li><P>Ukrainian - <strong><u>Native</u></strong></P></li>
                            <li><P>Russian - <strong><u>C1</u></strong></P></li>
                            <li><P>English - <strong><u>B1</u></strong></P></li>
                        </ol>
                    </article>
                    
                </article>
            </aside>
            <section className='w-[60%] p-[10px_20px] flex flex-col'>
                <article>
                    <H3>About me: </H3>
                    <P>
                        Hi! I have been studying frontend development for about <strong>1+ year</strong>.
                        I really like this area and I want to improve in it further. I am also studying at college with a degree in Applied Mathematics, where I am improving my logical and analytical thinking, as well as knowledge in the field of computer science, Algorithms and Data Structures, Databases and many others.
                        I also regularly study front-end development, studying new technologies and applying them in practice. My purpose is to become a senior front-end developer before the age of 20.
                    </P>
                </article>
                <Hr/>
                <article>
                    <H3>Tech stack:</H3>
                    <article>
                        <ol className='list-disc mx-[20px]'>
                            <li><P>HTML5, CSS3</P></li>
                            <li><P>SCSS/SASS</P></li>
                            <li><P>JavaScript/TypeScript</P></li>
                            <li><P>React.JS</P></li>
                            <li><P>React Router</P></li>
                            <li><P>React Hook Form</P></li>
                            <li><P>Redux Toolkit</P></li>
                            <li><P>RTK Query</P></li>
                            <li><P>Tailwind CSS</P></li>
                        </ol>
                        <ol className='list-disc mx-[20px]'>
                            <li><P>Next.JS</P></li>
                            <li><P>Axios</P></li>
                            <li><P>REST API</P></li>
                            <li><P>Git/Github</P></li>
                            <li><P>Npm/yarn</P></li>
                            <li><P>Figma</P></li>
                            <li><P>Pixel Perfect</P></li>
                            <li><P>WebPack/Vite</P></li>
                        </ol>
                    </article>
                </article>
                <Hr/>
                <article className='text-center'>
                    <H3>Education:</H3>
                    <P>VOCATIONAL COLLEGE OF ONU NAMED I.I. MECHNYKOV</P>
                    <P><i>(Professional Junior Bachelor)</i></P>
                </article>
                <Hr/>
                <article>
                    <H3>Work experience:</H3>
                    <P><i>Freelance</i></P>
                    <P>I was developing a website for a tea shop called <i>"Cratom Lounge".</i>
                        The purpose of the site is advertising and promotion in social networks.
                    </P>
                    <P>
                        Now i starting development of site to my school. The purpose of this website is to provide students, parents, and staff with easy access to important information and resources related to the school. It serves as a central hub for communicating news, upcoming events, academic programs, and policies.
                    </P>
                </article>
            </section>
        </section>
    )
}

export default AboutMobileDesktop
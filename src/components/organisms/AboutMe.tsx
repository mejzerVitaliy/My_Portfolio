import React from 'react'

const AboutMe: React.FC = () => {
    return (
        <main className=" w-[80%]  p-[40px] rounded-[40px] border m-[50px_0_200px] bg-[#111111c4]">
            <section className='w-full flex'>
                <aside className='w-[35%] flex flex-col items-center p-[20px] border-r'>
                    <img className='w-[250px] h-[300px] mb-[40px] object-cover rounded-[40px] border' src='/assets/MyPhoto.jpg' alt="My photo" />

                    <article className='text-center'>
                        <h3 className='text-[30px] font-bold'>Personal data: </h3>

                        <article className='text-left'>
                            <p>Borned: <u>19.02.2007</u></p>

                            <p>Nationality: <u>Ukraine</u></p>

                            <p>Live in: <u>Odessa</u></p>

                            <p>Phone number: <u><a href="tel:+380636007473">+380636007473</a></u></p>

                            <p>Email: <u><a href="mailto:mejzervitalik@gmail.com">mejzervitalik@gmail.com</a></u></p>
                        </article>

                        <hr className='my-[20px]' />

                        <article className='text-center'>
                            <h3 className='text-[30px] font-bold mb-[20px]'>Expected Salary:</h3>
                            <p><strong><u>300 - 600$</u></strong></p>
                        </article>

                        <hr className='my-[20px]' />

                        <article className='text-left'>
                            <details className='cursor-default'>
                                <summary>
                                    <strong>Languages</strong>
                                </summary>

                                <ol className=' list-disc ml-[40px]'>
                                    <li>Ukrainian - <strong><u>Native</u></strong></li>
                                    <li>Russian - <strong><u>C1</u></strong></li>
                                    <li>English - <strong><u>B1</u></strong></li>
                                </ol>
                            </details>
                        </article>
                        
                    </article>
                </aside>

                <section className='w-[65%] p-[10px_40px] flex flex-col'>
                    <article>
                        <h3 className='text-center mb-[20px] text-[30px] font-bold'>About me: </h3>

                        <p>
                            Hi! I have been studying frontend development for about <strong>1+ year</strong>.
                            I really like this area and I want to improve in it further. I am also studying at college with a degree in Applied Mathematics, where I am improving my logical and analytical thinking, as well as knowledge in the field of computer science, Algorithms and Data Structures, Databases and many others.
                            I also regularly study front-end development, studying new technologies and applying them in practice. My purpose is to become a senior front-end developer before the age of 20.
                        </p>

                    </article>

                    <hr className='my-[20px]' />

                    <article>
                        <h3 className='text-center mb-[20px] text-[30px] font-bold'>Tech stack:</h3>

                        <article className='w-full flex '>
                            <ol className='list-disc mx-[40px]'>
                                <li>HTML5, CSS3</li>
                                <li>SCSS/SASS</li>
                                <li>JavaScript/TypeScript</li>
                                <li>React.JS</li>
                                <li>React Router</li>
                                <li>React Hook Form</li>
                                <li>Redux Toolkit</li>
                                <li>RTK Query</li>
                                <li>Tailwind CSS</li>
                            </ol>

                            <ol className='list-disc mx-[40px]'>
                                <li>Next.JS</li>
                                <li>Axios</li>
                                <li>REST API</li>
                                <li>Git/Github</li>
                                <li>Npm/yarn</li>
                                <li>Figma</li>
                                <li>Pixel Perfect</li>
                                <li>WebPack/Vite</li>
                            </ol>
                        </article>
                    </article>

                    <hr className='my-[20px]' />

                    <article className='text-center'>
                        <h3 className='mb-[20px] text-[30px] font-bold'>Education:</h3>

                        <p>VOCATIONAL COLLEGE OF ONU NAMED I.I. MECHNYKOV</p>
                        <p><i>(Professional Junior Bachelor)</i></p>
                    </article>

                    <hr className='my-[20px]' />

                    <article>
                        <h3 className='text-center mb-[20px] text-[30px] font-bold'>Work experience:</h3>

                        <h4 className='ml-[16px]'><i>Freelance</i></h4>
                        <p>I was developing a website for a tea shop called <i>"Cratom Lounge".</i>
                            The purpose of the site is advertising and promotion in social networks.
                        </p>
                        <p>
                            Now i starting development of site to my school. The purpose of this website is to provide students, parents, and staff with easy access to important information and resources related to the school. It serves as a central hub for communicating news, upcoming events, academic programs, and policies.
                        </p>
                    </article>
                </section>
            </section>
        </main>
    )
}

export default AboutMe
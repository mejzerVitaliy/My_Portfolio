/* eslint-disable */

import React from 'react'
import H3 from '../atoms/H3'
import P from '../atoms/P'
import Hr from '../atoms/Hr'

const Portfolio: React.FC = () => {
    return (
        <main className=" w-[99%] sm:w-[85%] p-[20px] sm:p-[30px] lg:p-[40px] rounded-[40px] border m-[20px_0_100px] lg:m-[40px_0_160px] bg-[#111111c4]">
            <section className='w-full'>
                <article className='w-full px-[10px] mb-[20px]'>
                    <H3><strong>This Website is My Portfolio</strong></H3>

                    <P>
                        This website is my personal portfolio, built to demonstrate my frontend development skills. I created it using modern technologies such as <strong>TypeScript, React, Redux Toolkit (RTK), Tailwind CSS, and Next.js.</strong> These tools showcase my ability to work with a variety of technologies commonly used in frontend development today.
                        Through this site, I aim to highlight my ability to design, build, and deploy responsive, performant, and visually appealing web applications. Each section of this portfolio demonstrates how I apply my technical skills and knowledge to real projects. Whether you’re a potential employer or client, this portfolio gives you a clear picture of what I can do.
                    </P>
                </article>

                <Hr/>

                <article className='w-full px-[10px] mb-[20px]'>
                    <H3><strong>What is a Portfolio and Why is it Important?</strong></H3>

                    <P>
                        A portfolio is an essential tool for frontend developers, especially when you’re searching for a job or looking to impress potential clients. It’s a collection of projects and work that you have built, designed to demonstrate your skills, experience, and expertise.
                        For a frontend developer, a portfolio is like a visual resume where you can show exactly what you are capable of. Instead of just listing your skills, you have the opportunity to prove them through the projects you’ve completed.
                    </P>
                </article>

                <Hr/>

                <article className='w-full px-[10px] mb-[20px]'>
                    <H3><strong>Why Do You Need a Portfolio?</strong></H3>
                    <P>In today’s competitive job market, having a portfolio is crucial for several reasons:</P>
                    
                    <ol className='list-decimal sm:mx-[20px] lg:mx-[40px]'>
                        <li className='m-[10px]'><P><strong>Showcase Your Skills:</strong> It allows employers to see what you can actually do. You can list your skills on a resume, but a portfolio shows them in action.</P></li>
                        <li className='m-[10px]'><P><strong>Demonstrate Your Work Process:</strong> Employers and clients are interested not only in the final product but also in how you approach and solve problems. Describing your role in each project, challenges you faced, and how you overcame them can provide valuable insights.</P></li>
                        <li className='m-[10px]'><P><strong>Highlight Real Projects:</strong> You can include real-world projects you’ve worked on, freelance jobs, or personal projects. This demonstrates hands-on experience.</P></li>
                        <li className='m-[10px]'><P><strong>Stand Out from the Crowd:</strong> Many candidates apply for the same positions, but a well-structured portfolio can make you stand out and leave a lasting impression.</P></li>
                    </ol>
                </article>

                <Hr/>

                <article className='w-full px-[10px]'>
                    <H3><strong>What Should a Frontend Developer Include in a Portfolio?</strong></H3>
                    <P>To build an effective portfolio, make sure to include the following:</P>

                    <ol className=' list-disc sm:mx-[20px] lg:mx-[40px]'>
                        <li className='m-[10px]'><P><strong>Featured Projects:</strong> Choose a few key projects that highlight your strengths. These can be professional projects or personal ones where you’ve applied the skills required for the jobs you’re seeking.</P></li>
                        <li className='m-[10px]'><P><strong>Technology Stack:</strong> For each project, clearly mention the technology stack you used, such as HTML, CSS, JavaScript, React, or other tools relevant to frontend development.</P></li>
                        <li className='m-[10px]'><P><strong>Code Samples:</strong> Include links to code repositories like GitHub where employers can see the source code of your projects.</P></li>
                        <li className='m-[10px]'><P><strong>Descriptions of Your Role:</strong> Explain your contribution to each project, what problems you solved, and how you applied your skills.</P></li>
                    </ol>
                </article>
            </section>
        </main>
    )
}

export default Portfolio
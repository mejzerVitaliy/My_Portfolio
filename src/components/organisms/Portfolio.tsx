import React from 'react'

const Portfolio: React.FC = () => {
    return (
        <main className=" w-[80%]  p-[40px] rounded-[40px] border m-[50px_0_200px] bg-[#111111c4]">
            <section className='w-full'>
                <article className='w-full px-[40px]'>
                    <h3 className='text-center text-[28px] mb-[20px]'><strong>This Website is My Portfolio</strong></h3>

                    <p className=' leading-relaxed'>
                        This website is my personal portfolio, built to demonstrate my frontend development skills. I created it using modern technologies such as <strong>TypeScript, React, Redux Toolkit (RTK), Tailwind CSS, and Next.js.</strong> These tools showcase my ability to work with a variety of technologies commonly used in frontend development today.
                        Through this site, I aim to highlight my ability to design, build, and deploy responsive, performant, and visually appealing web applications. Each section of this portfolio demonstrates how I apply my technical skills and knowledge to real projects. Whether you're a potential employer or client, this portfolio gives you a clear picture of what I can do.
                    </p>
                </article>

                <article className='w-full px-[40px]'>
                    <h3 className='text-center text-[28px] my-[20px]'><strong>What is a Portfolio and Why is it Important?</strong></h3>

                    <p className=' leading-relaxed'>
                        A portfolio is an essential tool for frontend developers, especially when you're searching for a job or looking to impress potential clients. It’s a collection of projects and work that you have built, designed to demonstrate your skills, experience, and expertise.
                        For a frontend developer, a portfolio is like a visual resume where you can show exactly what you are capable of. Instead of just listing your skills, you have the opportunity to prove them through the projects you’ve completed.
                    </p>
                </article>

                <article className='w-full px-[40px]'>
                    <h3 className='text-center text-[28px] my-[20px]'><strong>Why Do You Need a Portfolio?</strong></h3>

                    <ol className='list-decimal'>
                        <p>In today’s competitive job market, having a portfolio is crucial for several reasons:</p>

                        <li className='m-[20px] leading-relaxed'><strong>Showcase Your Skills:</strong> It allows employers to see what you can actually do. You can list your skills on a resume, but a portfolio shows them in action.</li>
                        <li className='m-[20px] leading-relaxed'><strong>Demonstrate Your Work Process:</strong> Employers and clients are interested not only in the final product but also in how you approach and solve problems. Describing your role in each project, challenges you faced, and how you overcame them can provide valuable insights.</li>
                        <li className='m-[20px] leading-relaxed'><strong>Highlight Real Projects:</strong> You can include real-world projects you’ve worked on, freelance jobs, or personal projects. This demonstrates hands-on experience.</li>
                        <li className='m-[20px] leading-relaxed'><strong>Stand Out from the Crowd:</strong> Many candidates apply for the same positions, but a well-structured portfolio can make you stand out and leave a lasting impression.</li>
                    </ol>
                </article>

                <article className='w-full px-[40px]'>
                    <h3 className='text-center text-[28px] my-[20px]'><strong>What Should a Frontend Developer Include in a Portfolio?</strong></h3>

                    <ul className=' list-disc'>
                        <p>To build an effective portfolio, make sure to include the following:</p>

                        <li className='m-[20px] leading-relaxed'><strong>Featured Projects:</strong> Choose a few key projects that highlight your strengths. These can be professional projects or personal ones where you’ve applied the skills required for the jobs you're seeking.</li>
                        <li className='m-[20px] leading-relaxed'><strong>Technology Stack:</strong> For each project, clearly mention the technology stack you used, such as HTML, CSS, JavaScript, React, or other tools relevant to frontend development.</li>
                        <li className='m-[20px] leading-relaxed'><strong>Code Samples:</strong> Include links to code repositories like GitHub where employers can see the source code of your projects.</li>
                        <li className='m-[20px] leading-relaxed'><strong>Descriptions of Your Role:</strong> Explain your contribution to each project, what problems you solved, and how you applied your skills.</li>
                    </ul>
                </article>
            </section>
        </main>
    )
}

export default Portfolio
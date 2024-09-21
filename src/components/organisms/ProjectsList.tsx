/* eslint-disable */

import React from 'react'
import Hr from '../atoms/Hr'
import ProjectItem from '../templates/ProjectItem'
import P from '../atoms/P'
import H3 from '../atoms/H3'

const Projects: React.FC = () => {
    return (
        <main className=" w-[99%] sm:w-[85%] p-[20px] sm:p-[30px] lg:p-[50px] rounded-[40px] border m-[20px_0_100px] sm:m-[40px_0_160px] bg-[#111111c4]">
            <section>
                <H3><span className='scroll-mt-[200px]' id='Top'>My projects</span></H3>

                <P>I&rsquo;ve been studying front-end development for a long time. There are a lot of different technologies that you need to remember well. To do this, it is not enough to become familiar with the technology in theory; the developer must learn to apply this technology in practice, and understand how this technology helps solve the problem. To do this, the engineer must write projects.</P>

                <P>This page contains all my projects, from the very first to now. Also, almost all projects have a link to the GitHub repository and a link to the deployed project. Enjoy watching!</P>

                <Hr />

                <H3>List of projects</H3>
                <ol className='list-decimal mx-[40px]'>
                    <li><P><a className='text-cyan-500' href="#1">Game &rsquo;Stone-Papper-Scissors&rsquo;</a></P></li>
                    <li><P><a className='text-cyan-500' href="#2">Async Code and work with API practice</a></P></li>
                    <li><P><a className='text-cyan-500' href="#3">Currency converter</a></P></li>
                    <li><P><a className='text-cyan-500' href="#4">MinimalMind - notes</a></P></li>
                    <li><P><a className='text-cyan-500' href="#5">Test task to role &rsquo;Junior React Developer&rsquo;</a></P></li>
                    <li><P><a className='text-cyan-500' href="#6">Crypto Currency Exchanger</a></P></li>
                    <li><P><a className='text-cyan-500' href="#7">This Portfolio</a></P></li>
                </ol>

                <Hr />

                <ProjectItem
                    id='1'
                    header="Game &rsquo;Stone-Papper-Scissors&rdquo;"
                    description='This is my first project with logic and JavaScript. This is a popular game where the player plays with a bot. The bot selects a random number from zero to two. These numbers are array indices. Array objects are stone, paper or scissors. As a result, the player chooses one of three options, and the bot randomly selects from the same options. Rock beats scissors, scissors beats paper, paper beats rock. A modal window appears with a message about who won. Statistics with victories and defeats are also kept.'
                    stack='HTML, CSS, JavaScript'
                    linkToGitHub='https://github.com/mejzerVitaliy/stone-papper-scissors'
                    linkToProject='https://mejzervitaliy.github.io/stone-papper-scissors/index.html'
                />

                <Hr />

                <ProjectItem
                    id='2'
                    header="Async Code and work with API practice"
                    description='This is my second project with logic and JavaScript. I did this project using a source for studying API requests. This project taught me how to properly make asynchronous API requests and retrieve information from there.'
                    stack='HTML, CSS, JavaScript'
                    linkToGitHub='https://github.com/mejzerVitaliy/async-await'
                    linkToProject='https://mejzervitaliy.github.io/async-await/'
                />

                <Hr />

                <ProjectItem
                    id='3'
                    header="Currency converter"
                    description='This is my third project in which I also used only JavaScript. There are two selectors for entering currencies and an input for entering quantities. When you enter all the data, the value in another currency automatically appears in the third input. The list of currencies in the selects is obtained from a third-party API. There is also a theme changing function and adaptive design.'
                    stack='HTML, CSS, JavaScript'
                    linkToGitHub='https://github.com/mejzerVitaliy/CurrencyConverter'
                    linkToProject='https://mejzervitaliy.github.io/CurrencyConverter/'
                />

                <Hr />

                <ProjectItem
                    id='4'
                    header="MinimalMind - notes"
                    description='MinimalMind is my first project in which I used React and its libraries. It’s a very important project for me, because in one project I used nine technologies that I hadn’t used before this! This is a notes app, where all users have personal accounts, and they can write and save notes, delete, like, view, and change them. There are also search and filtration options by title, description, date of creation/changes, and liked notes. Also, in this project, I had to write a small server and use a fake API. Therefore, there is a small problem - when rebooting, the server does not understand what route it is on and displays a 404 error. I don’t know backend development well, so I could not solve this problem.'
                    stack='HTML, SCSS, TypeScript, React, React Router, React-Hook-Form, Axios, TailwindCSS, AOS, JSON-server'
                    linkToGitHub='https://github.com/mejzerVitaliy/MinimalMindNotes'
                    linkToProject='https://minimal-mind-notes.vercel.app/signIn'
                />

                <Hr />

                <ProjectItem
                    id='5'
                    header="Test task to role &rsquo;Junior React Developer&rdquo;"
                    description={
                        <>
                            This project is a test task and I had 3 days to complete it. It was difficult, but I successfully completed this task. And here I used RTK and RTK Query for the first time. You can read more about the test task at this link: 
                            <a href="https://deep-surf-d8d.notion.site/React-014caa1f25844f0db541050c54bd4d5d">  https://deep-surf-d8d.notion.site/React-014caa1f25844f0db541050c54bd4d5d</a>
                        </>
                    }
                    stack='HTML, SCSS, TypeScript, React, React Router, Redux Toolkit, RTK Query, TailwindCSS, JSON-server'
                    linkToGitHub='https://github.com/mejzerVitaliy/react-test-task'
                    linkToProject='https://my-react-test-task.onrender.com'
                />

                <Hr />
                
                <ProjectItem
                    id='6'
                    header="Crypto Currency Exchanger"
                    description='This is another test task that I received from another company. It consisted of 3 tasks. The first was a task on knowledge of JavaScript. The second was to write a cryptocurrency translator using the provided API. I had to come up with the design myself. And the third task was to refactor the code. Solutions to all three tasks are available in the repository.'
                    stack='HTML, SCSS, TypeScript, React, Redux Toolkit, RTK Query, TailwindCSS'
                    linkToGitHub='https://github.com/mejzerVitaliy/Mejzer_Vitaliy_Vitalievich/tree/master/secondTask/fancy_form'
                    linkToProject='https://crypto-currency-converter-gamma.vercel.app/'
                />

                <Hr />

                <ProjectItem
                    id='7'
                    header="This Portfolio"
                    description='I decided to make this site to increase my chances of finding a job as a front-end developer. Also, in this project, I used Next.js and SSR for the first time. I plan to update this site in the future, adding my new projects and updating information about myself.'
                    stack='HTML, CSS, TypeScript, React, Next.js, AppRouting, TailwindCSS'                    
                    linkToGitHub='https://github.com/mejzerVitaliy/My_Portfolio'
                    linkToProject=''
                />

            </section>
        </main>
    )
}

export default Projects;

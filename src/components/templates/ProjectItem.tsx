import React, { ReactNode } from 'react'
import H3 from '../atoms/H3'
import P from '../atoms/P'

interface ProjectsItemProps{
    id?: string
    header: string
    description: string | ReactNode
    stack: string
    linkToGitHub?: string
    linkToProject: string
}

const ProjectItem:React.FC<ProjectsItemProps> = ({id, header, description, stack, linkToGitHub, linkToProject}) => {
    return (
        <article className='w-full my-[60px] scroll-mt-[200px] border-white' id={id}>
            <H3>{header}</H3>
            <P>{description}</P>

            <P className='my-[40px] p-[16px] text-center rounded-[16px] bg-gradient-to-r from-slate-900 to-lime-900'><span ><strong>Stack:</strong> <code>{stack}</code></span></P>

            <article className='mt-[40px] gap-[20px]'>
                <P className='my-[20px]'><strong>Link to GitHub repository: </strong>{<a title='Link to GitHub repo' className='text-lime-500 break-words transition-all cursor-default hover:text-lime-300' href={linkToGitHub} target='blank'>{linkToGitHub}</a>}</P>
                <P className='my-[20px]'><strong>Link to deployed project: </strong>{<a title='Link to site' className='text-lime-500 break-words transition-all cursor-default hover:text-lime-300' href={linkToProject} target='blank'>{linkToProject}</a>}</P>
            </article>
        </article>
    )
}

export default ProjectItem
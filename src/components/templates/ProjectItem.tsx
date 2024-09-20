import React, { ReactNode } from 'react'

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
            <h3 className='text-center mb-[20px] text-[30px] font-bold'>{header}</h3>
            <p>{description}</p>

            <p className='my-[40px] p-[16px] text-center rounded-[16px] bg-gradient-to-r from-slate-900 to-lime-900'><strong>Stack:</strong> <code>{stack}</code></p>

            <article className='mt-[40px] gap-[20pxpx]'>
                <p className='my-[20px]'><strong>Link to GitHub repository: </strong>{<a title='Link to GitHub repo' className='text-cyan-400 transition-all cursor-default hover:text-cyan-300' href={linkToGitHub}>{linkToGitHub}</a>}</p>
                <p className='my-[20px]'><strong>Link to deployed project: </strong>{<a title='Link to site' className='text-cyan-400 transition-all cursor-default hover:text-cyan-300' href={linkToProject}>{linkToProject}</a>}</p>
            </article>
        </article>
    )
}

export default ProjectItem
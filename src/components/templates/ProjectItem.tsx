import React from 'react'

interface ProjectsItemProps{
    id?: string
    header: string
    description: string
    stack: string
    linkToGitHub?: string
    linkToProject: string
}

const ProjectItem:React.FC<ProjectsItemProps> = ({id, header, description, stack, linkToGitHub, linkToProject}) => {
    return (
        <article className='w-full my-[60px] scroll-mt-[200px] border-white' id={id}>
            <h3 className='text-center mb-[20px] text-[30px] font-bold'>{header}</h3>
            <p>{description}</p>

            <p>Stack: <code>{stack}</code></p>

            <article className='mt-[40px] gap-[12px]'>
                <p>Link to GitHub repository: {<a href={linkToGitHub}>{linkToGitHub}</a> || 'none'}</p>
                <p>Link to deployed project: {<a href={linkToProject}>{linkToProject}</a>}</p>
            </article>
        </article>
    )
}

export default ProjectItem
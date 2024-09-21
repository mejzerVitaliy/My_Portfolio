import React, { ReactNode } from 'react'

const H3:React.FC<{children: ReactNode}> = ({children}) => {
    return (
        <h3 className='text-center font-karla text-[20px] sm:text-[24px] lg:text-[28px] xl:text-[30px] mb-[20px]'>
            <strong>{children}</strong>
        </h3>
    )
}

export default H3
import React from 'react'

const Footer: React.FC = () => {
    return (
        <footer className='w-full h-[80px] lg:h-[120px] absolute bottom-0 grid place-items-center rounded-t-full bg-[#111] border-t '>
            <section className='w-[70%] flex justify-between items-center'>
                <h2 className='text-center hidden lg:block text-[30px] font-bold '>Contact me!</h2>

                <section className=' w-full lg:w-[70%] flex justify-between lg:justify-end lg:gap-[40px] items-center'>
                    <a title='My Github' className='hover:animate-pulse w-[30px] h-[30px] grid place-items-center cursor-default' href="https://github.com/mejzerVitaliy" target='blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className='w-[30px] lg:w-[40px] h-[30px] lg:h-[40px] ' viewBox="0 0 50 50" style={{fill:'#FFFFFF'}}>
                            <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
                        </svg>
                    </a>
                    
                    <a title='My LinkedIN' className='hover:animate-pulse w-[30px] h-[30px] grid place-items-center cursor-default' href="https://www.linkedin.com/in/vitaliy-mejzer-778735326/" target='blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='w-[30px] lg:w-[40px] h-[30px] lg:h-[40px] ' fill="currentColor">
                            <path d="M100.28 448H7.4V148.9h92.88zm-46.14-335C24.3 113 0 88.6 0 57.5S24.3 2 54.14 2s53.86 24.4 53.86 55.5-24.3 55.5-53.86 55.5zM447.5 448h-92.6V302.4c0-34.7-.7-79.3-48.3-79.3-48.3 0-55.7 37.7-55.7 76.7V448h-92.9V148.9h89.1v40.8h1.3c12.4-23.5 42.6-48.3 87.7-48.3 93.8 0 111.1 61.7 111.1 142V448z"/>
                        </svg>
                    </a>
                    
                    <a title='My Instagram' className='hover:animate-pulse w-[30px] h-[30px] grid place-items-center cursor-default' href="https://www.instagram.com/mvitalik_/" target='blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='w-[30px] lg:w-[40px] h-[30px] lg:h-[40px] ' fill='#fff'>
                            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                        </svg>
                    </a>
                    
                    <a title='My Telegram' className='hover:animate-pulse w-[30px] h-[30px] grid place-items-center cursor-default' href="https://web.telegram.org/k/#@wnckxv" target='blank' >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className='w-[30px] lg:w-[40px] h-[30px] lg:h-[40px] ' fill='#fff'>
                            <path d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z" />
                        </svg>

                    </a>
                    
                    <a title='Call me' className='hover:animate-pulse w-[30px] h-[30px] grid place-items-center cursor-default' href="tel:+380636007473">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='w-[30px] lg:w-[40px] h-[30px] lg:h-[40px] ' fill="currentColor">
                            <path d="M493.4 24.6c-14.2-14.2-33.5-23.6-54.1-23.6-22.4 0-44.7 8.2-62.1 25.6L321.6 82.1c-11.2 11.2-17.4 26.2-17.4 42.2 0 13.4 4.2 26.4 12.1 36.9l41.5 55.1c-17.7 34.9-43.3 65.6-74.3 93.4-28.3 26-59.5 49.8-94.5 71.8l-53.5-40.9c-11-8.4-24.7-12.9-38.7-12.9-16 0-31 6.2-42.2 17.4L10 431.3C-6.8 449-14.6 472.4 0 496.6c14.2 24.3 38.7 37.4 63.9 37.4 31.6 0 61.6-10.5 87.4-30.3 95.8-73 177.7-157.2 245.3-253.7 65.8-93.5 101.1-186 101.1-276.1 0-20.6-9.4-39.9-23.6-54.1z"/>
                        </svg>
                    </a>
                    

                    <a title='My e-mail' className='hover:animate-pulse w-[30px] h-[30px] grid place-items-center cursor-default' href="mailto:mejzervitalik@gmail.com" target='blank'>
                        <svg className='w-[30px] lg:w-[40px] h-[30px] lg:h-[40px] ' viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1V16C0 16.2652 0.105357 16.5196 0.292893 16.7071C0.48043 16.8946 0.734784 17 1 17H21C21.2652 17 21.5196 16.8946 21.7071 16.7071C21.8946 16.5196 22 16.2652 22 16V1C22 0.734784 21.8946 0.48043 21.7071 0.292893C21.5196 0.105357 21.2652 0 21 0ZM20 15H2V2H20V15Z" fill="white" />
                            <path d="M3.50391 5.86821L10.5039 9.86821C10.655 9.95454 10.826 9.99994 11 9.99994C11.174 9.99994 11.345 9.95454 11.4961 9.86821L18.4961 5.86821C18.7234 5.73511 18.889 5.51774 18.9569 5.26328C19.0248 5.00882 18.9897 4.73784 18.859 4.50917C18.7283 4.28049 18.5127 4.1126 18.259 4.04195C18.0053 3.9713 17.734 4.00359 17.5039 4.13181L11 7.84861L4.49611 4.13181C4.38201 4.06499 4.2558 4.02146 4.12478 4.00374C3.99375 3.98602 3.86051 3.99446 3.73277 4.02857C3.60503 4.06268 3.48531 4.12179 3.38056 4.20246C3.27581 4.28314 3.1881 4.38379 3.1225 4.49859C3.05691 4.61339 3.01473 4.74006 2.9984 4.87127C2.98208 5.00247 2.99194 5.13561 3.02741 5.26299C3.06288 5.39036 3.12325 5.50943 3.20504 5.61332C3.28683 5.7172 3.38841 5.80384 3.50391 5.86821Z" fill="white" />
                        </svg>
                    </a>
                    


                </section>
            </section>
            
        </footer>
    )
}

export default Footer
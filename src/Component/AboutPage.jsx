import React from 'react'
import image14 from '../Image/arrow.png'
function AboutPage() {
    return (
        <>
            <div className='bg-[url(/src/Image/aboutimage1.jpg)] bg-no-repeat bg-center h-auto bg-cover opacity-90 pt-5 pb-[17px]'>
                <div className='ml-2.5 mt-5 '>
                    <h1 className='text-8xl text-gray-300 font-serif'>Work with us</h1>
                    <p className='text-2xl ml-2.5 w-[62rem] text-gray-300 mt-4'>We're always looking for passionate, creative, and driven individuals to grow with us. Whether you're a developer, designer, or problem-solver — let's build something amazing together.</p>
                </div>
                <div className='flex mt-5 ml-2.5'>
                    <div className='flex items-center m-2.5'>
                        <h1 className='text-xl text-gray-300 font-medium'>Open roles</h1>
                        <img src={image14} alt="arrow" className='w-5 m-2.5' />
                    </div>
                    <div className='flex items-center m-2.5'>
                        <h1 className='text-xl text-gray-300 font-medium'>Internship program</h1>
                        <img src={image14} alt="arrow" className='w-5 m-2.5' />
                    </div>
                    <div className='flex items-center m-2.5'>
                        <h1 className='text-xl text-gray-300 font-medium'>Our Values</h1>
                        <img src={image14} alt="arrow" className='w-5 m-2.5' />
                    </div>
                    <div className='flex items-center m-2.5'>
                        <h1 className='text-xl text-gray-300 font-medium'>Meet our leadership</h1>
                        <img src={image14} alt="arrow" className='w-5 m-2.5' />
                    </div>
                </div>
                <div className='flex justify-evenly mt-10'>
                    <div>
                        <h1 className='text-4xl text-amber-200 font-medium font-serif'>12</h1>
                        <h1 className='text-2xl text-gray-300 font-medium font-serif'>Offices Worldwide</h1>
                    </div>
                    <div>
                        <h1 className='text-4xl text-amber-200 font-medium font-serif'>300+</h1>
                        <h1 className='text-2xl text-gray-300 font-medium font-serif'>Full-time colleagues</h1>
                    </div>
                    <div>
                        <h1 className='text-4xl text-amber-200 font-medium font-serif'>40</h1>
                        <h1 className='text-2xl text-gray-300 font-medium font-serif'>Hours per week</h1>
                    </div>
                    <div>
                        <h1 className='text-4xl text-amber-200 font-medium font-serif'>Unlimited</h1>
                        <h1 className='text-2xl text-gray-300 font-medium font-serif'>Paid time off</h1>
                    </div>
                </div>
                <div className='flex items-center flex-col mt-10'>
                    <h1 className='text-6xl text-gray-300 font-serif'>Support Center</h1>
                    <h1 className='w-[90rem] text-gray-300 text-center text-3xl font-serif mt-5'>Our Support Center is dedicated to assisting you with any questions or issues you may have. Whether it's technical help or general inquiries, our team is ready to provide fast, reliable solutions to keep things running smoothly</h1>
                </div>
            </div>
        </>
    )
}

export default AboutPage

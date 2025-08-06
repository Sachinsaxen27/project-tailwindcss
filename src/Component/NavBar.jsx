import React from 'react'

function NavBar() {
    return (
        <>
            <div className='flex flex-wrap justify-between  p-4' >
                <h1 className='text-2xl text-sky-950 font-extrabold cursor-pointer'>Desing Tailwind</h1>
                <div className='flex flex-wrap'>
                    <div className='m-2.5 font-mono cursor-pointer hover:text-sky-700'>About US</div>
                    <div className='m-2.5 font-mono cursor-pointer hover:text-sky-700'>Services</div>
                    <div className='m-2.5 font-mono cursor-pointer hover:text-sky-700'>Careers</div>
                    <div className='m-2.5 font-mono cursor-pointer hover:text-sky-700'>Contact</div>
                </div>
            </div>

        </>
    )
}

export default NavBar

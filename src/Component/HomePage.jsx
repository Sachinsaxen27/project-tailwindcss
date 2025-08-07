import React from 'react'
import image1 from '../Image/hero.svg'
import image2 from '../Image/layer.svg'
import image3 from '../Image/wand.svg'
import image4 from '../Image/heart.svg'
import image5 from '../Image/aiml.png'
import image6 from '../Image/app.png'
import image7 from '../Image/check.png'
import image8 from '../Image/future.svg'
import image9 from '../Image/startup.png'
import image10 from '../Image/instagram.png'
import image11 from '../Image/logo.png'
import image12 from '../Image/linkedin.png'
import image13 from '../Image/mail.png'
function HomePage() {
    return (
        <>
            {/* Home Section Part-1 */}
            <div className='bg-linear-to-l  from-sky-200 via-blue-400 to-indigo-900'>
                <div className='flex flex-wrap flex-row justify-between p-2.5'>
                    <div className='flex justify-center flex-col ml-7 max-[430px]:m-auto'>
                        <h1 className='text-5xl text-center text-indigo-200  max-[430px]:text-[25px] max-[430px]:font-[500] max-[430px]:text-black max-[430px]:text-start'>DIGITAL DEVELOPMENT STUDIO</h1>
                        <p className='w-2xl text-center text-indigo-100 m-4  max-[430px]:text-sm max-[430px]:w-88 max-[430px]:text-[rgb(32,31,31)] max-[430px]:m-2.5'>We create high-performance websites and strategic digital solutions that drive growth and deliver tangible business outcomes</p>
                        <div className='flex items-baseline  mt-5 ml-3.5 max-[430px]:m-auto max-[430px]:flex-col'>
                            <button className='bg-indigo-50 mr-3 p-2.5 rounded-md font-bold cursor-pointer text-black hover:bg-sky-700 hover:text-white'>We're Hiring - Join the Team</button>
                            <h4 className='font-bold text-indigo-200 hover:text-sky-400 cursor-pointer max-[430px]:m-auto max-[430px]:mt-2.5 max-[430px]:text-[rgb(32,31,31)] max-[430px]:font-medium' >See all Services</h4>
                        </div>
                    </div>
                    <div className='max-[430px]:m-auto max-[430px]:mt-2.5'>
                        <img src={image1} alt="hero" className='w-2xl max-[430px]:w-75  ' />
                    </div>
                </div>
            </div>
            {/* Home Section Part-2 */}
            <div>
                <div className='flex flex-col items-center pt-5.5 bg-gray-2 00'>
                    <h1 className='text-5xl text-center  max-[430px]:text-3xl max-[430px]:font-medium'>
                        Specializing In
                    </h1>
                    <p className='w-2xl text-center mt-2.5 text-2xl max-[430px]:text-[15px] max-[430px]:w-92'>
                        Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!
                    </p>
                </div>
                <div className='flex justify-center mt-7 max-[430px]:flex-col max-[430px]:p-2.5 max-[430px]:mt-2 max-[430px]:pb-0'>
                    <div className=' m-2.5 flex flex-col items-center border-0 border-black max-w-fit p-5 rounded-xl shadow-[0px_0px_6px_3px] hover:shadow-sky-700 '>
                        <img src={image2} alt="web development" />
                        <div className='flex flex-col items-center '>
                            <h1 className='text-4xl max-[430px]:text-xl max-[430px]:mt-2.5 max-[430px]:font-medium'>Web Development</h1>
                            <p className='w-96 text-center max-[430px]:mt-2.5 max-[430px]:w-92'>We build fast, secure, and responsive websites tailored to your business goals</p>
                        </div>
                    </div>
                    <div className=' m-2.5 flex flex-col items-center border-1 border-black max-w-fit p-5 rounded-xl shadow-[0px_0px_6px_3px] hover:shadow-sky-700'>
                        <img src={image3} alt="web development" />
                        <div className='flex flex-col items-center '>
                            <h1 className='text-4xl max-[430px]:text-xl max-[430px]:mt-2.5 max-[430px]:font-medium'>Web Desinging</h1>
                            <p className='w-96 text-center max-[430px]:mt-2.5 max-[430px]:w-92'>Bringing ideas to life with modern, intuitive, and eye-catching web designs</p>
                        </div>
                    </div>
                    <div className=' m-2.5 flex flex-col items-center border-1 border-black max-w-fit p-5 rounded-xl shadow-[0px_0px_6px_3px] hover:shadow-sky-700'>
                        <img src={image4} alt="web development" />
                        <div className='flex flex-col items-center '>
                            <h1 className='text-4xl max-[430px]:text-xl max-[430px]:mt-2.5 max-[430px]:font-medium'>Digital Marketing</h1>
                            <p className='w-96 text-center max-[430px]:mt-2.5 max-[430px]:w-[22.4rem]'>Fueling business growth through targeted ads, content strategies, and powerful online campaigns.</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center max-[430px]:flex-col max-[430px]:p-2.5 max-[430px]:pt-0 '>
                    <div className='m-2.5 flex flex-col items-center border-1 border-black max-w-fit p-5 rounded-xl  shadow-[0px_0px_6px_3px] hover:shadow-sky-700'>
                        <img src={image5} alt="web development" className='w-10' />
                        <div className='flex flex-col items-center '>
                            <h1 className='text-4xl max-[430px]:text-xl max-[430px]:mt-2.5 max-[430px]:font-medium'>AI & Automation</h1>
                            <p className='w-96 text-center max-[430px]:mt-2.5 max-[430px]:w-92'>Streamline your workflow with smart AI tools and automated processes.</p>
                        </div>
                    </div>
                    <div className='m-2.5 flex flex-col items-center border-1 border-black max-w-fit p-5 rounded-xl shadow-[0px_0px_6px_3px] hover:shadow-sky-700'>
                        <img src={image6} alt="web development" className='w-10' />
                        <div className='flex flex-col items-center '>
                            <h1 className='text-4xl max-[430px]:text-xl max-[430px]:mt-2.5 max-[430px]:font-medium'>App Development</h1>
                            <p className='w-96 text-center max-[430px]:mt-2.5 max-[430px]:w-92'>We build fast, reliable, and user-friendly mobile apps tailored to your business needs.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Home Section Part-3 */}
            <div  className='pt-8 bg-indigo-100 mt-2 max-[430px]:m-0'>
                <div className='flex justify-between'>
                    <div className='ml-8 max-[430px]:m-0px max-[430px]:ml-[7px] '>
                        <h1 className='text-5xl font-bold font-serif w-3xl max-[430px]:w-fit max-[430px]:text-[25px]'>New-age energy of a Startup with a strong foundation.</h1>
                        <p className='m-2 max-[430px]:w-[24.2em] max-[430px]:m-0px max-[430px]:mt-2.5 max-[430px]:text-[15px] max-[430px]:opacity-[0.4]'>We focus on building websites that not only look great but actually deliver business results.</p>
                        <ul className='mt-7 w-xl max-[430px]:w-[24rem] max-[430px]:m-0'>
                            <li className='flex items-center m-2.5 max-[430px]:m-0 max-[430px]:mt-2.5'>
                                <img src={image7} alt="check" className='w-4 mr-1.5' />
                                <div>
                                    Say goodbye to the hassle—our websites are easy to manage, optimized for performance, and built to convert.
                                </div>
                            </li>
                            <li className='flex items-center m-2.5 max-[430px]:m-0 max-[430px]:mt-2.5'>
                                <img src={image7} alt="check" className='w-4 mr-1.5' />
                                <div>
                                    Stop wasting time and money designing and managing.
                                </div>
                            </li>
                            <li className='flex items-center m-2.5 max-[430px]:m-0 max-[430px]:mt-2.5'>
                                <img src={image7} alt="check" className='w-4 mr-1.5' />
                                <div>
                                    We stand by our work with a commitment to quality, performance, and your happiness—guaranteed.
                                </div>
                            </li>
                        </ul>
                        <button className='bg-blue-600 p-2.5 text-white rounded-2xl ml-2 mt-4 max-[430px]:mt-5 max-[430px]:mb-2.5'>Intern With US</button>
                    </div>
                    <div>
                        <img src={image8} alt="future" className='w-lg pr-2.5 max-[430px]:hidden' />
                    </div>
                </div>
            </div>
            {/* Home Section Part-4 */}
            <div  className='flex flex-wrap justify-around mt-5'>
                <div className='border-1 mb-8 p-5 rounded-4xl w-xl max-[430px]:w-sm'>
                    <img src={image9} alt="startup" className='m-auto mt-5 w-lg rounded-4xl shadow-[0px_0px_8px_0px]' />
                    <div className='mt-9'>
                        <h1 className='text-3xl font-serif font-bold text-center max-[430px]:text-xl max-[430px]:w-84'>"A Startup Building for Startups"</h1>
                        <div className='flex justify-center max-[430px]:flex-col'>
                            <div className='m-2.5'>
                                <h5 className='text-3xl text-amber-200 font-medium font-sans max-[430px]:text-xl'>15+</h5>
                                <p className='text-2xl font-sans font-medium max-[430px]:text-lg'>Tech Stack Masterd</p>
                                <p className='w-64 text-sm max-[430px]:text-xs max-[430px]:w-50'>We hold deep expertise in 15+ production-grade technology stacks.</p>
                            </div>
                            <div className='m-2.5'>
                                <h5 className='text-3xl text-amber-200 font-medium font-sans max-[430px]:text-xl'>100%</h5>
                                <p className='text-2xl font-sans font-medium max-[430px]:text-lg'>Founder-Led</p>
                                <p className='w-65 text-sm max-[430px]:text-xs max-[430px]:w-50'>By founders who've raised funding, for founders building the future.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border-1 mb-8 p-5 rounded-4xl max-[430px]:w-sm'>
                    <img src={image9} alt="startup" className='m-auto mt-5 w-lg rounded-4xl shadow-[0px_0px_8px_0px]' />
                    <div className='mt-9'>
                        <h1 className='text-3xl font-serif font-bold w-xl max-[430px]:text-xl max-[430px]:w-90'>Empowering growth through Smart Digital Solutions</h1>
                        <p className='text-amber-300 text-lg mt-10 cursor-pointer hover:underline'> See all services</p>
                    </div>
                </div>
            </div>
            {/* Home Section Part-5 */}
            <div className='pt-5 bg-sky-50 mt-5 flex justify-around max-[430px]:flex-col '>
                <div className='ml-5'>
                    <h1 className='text-3xl'>DesignHacker</h1>
                    <div className='flex mt-2.5'>
                        <img src={image10} className='w-8 m-2 max-[430px]:w-5 max-[430px]:m-1' alt="instagram" />
                        <img src={image11} className='w-8 m-2 max-[430px]:w-5 max-[430px]:m-1' alt="whatsapp" />
                        <img src={image12} className='w-8 m-2 max-[430px]:w-5 max-[430px]:m-1' alt="LinkedIn" />
                        <img src={image13} className='w-8 m-2 max-[430px]:w-5 max-[430px]:m-1' alt="Mail" />
                    </div>
                </div>
                <div>
                    <h2 className='font-bold max-[430px]:ml-5 max-[430px]:mt-5'>Quick Link</h2>
                    <ul className='max-[430px]:flex  max-[430px]:justify-around'>
                        <li className='m-1 cursor-pointer hover:text-blue-500 '>About Us</li>
                        <li className='m-1 cursor-pointer hover:text-blue-500 '>Service</li>
                        <li className='m-1 cursor-pointer hover:text-blue-500 '>Careers</li>
                        <li className='m-1 cursor-pointer hover:text-blue-500 '>Contact</li>
                    </ul>
                </div>
                <div className='max-[430px]: hidden'>
                    <h2 className='font-bold'>Service</h2>
                    <ul>
                        <li className='m-1 cursor-pointer hover:text-blue-500'>Web Design</li>
                        <li className='m-1 cursor-pointer hover:text-blue-500'>Web Development</li>
                        <li className='m-1 cursor-pointer hover:text-blue-500'>Digital Marketing</li>
                        <li className='m-1 cursor-pointer hover:text-blue-500'>AI & Automation</li>
                        <li className='m-1 cursor-pointer hover:text-blue-500'>App Development</li>
                    </ul>
                </div>
                <div className= 'flex-col    max-[430px]: flex max-[430px]:items-center max-[430px]:flex-col max-[430px]:mt-2.5'>
                    <h1 className='font-bold text-center'>Join Us</h1>
                    <button className='bg-amber-300 p-2 rounded-xl mt-2 max-[430px]:mb-2.5'>Apply For Internship</button>
                </div>
            </div>
        </>
    )
}

export default HomePage

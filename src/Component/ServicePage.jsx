import React from 'react'
import image15 from '../Image/service.png'
import image16 from '../Image/layout.png'
import image17 from '../Image/design.png'
import image18 from '../Image/digital.png'
import image19 from '../Image/ai.png'
import image20 from '../Image/app.png'
import image21 from '../Image/user1.jpg'
import image22 from '../Image/user2.jpeg'
import image23 from '../Image/user3.avif'
import image24 from '../Image/user4.avif'
function ServicePage() {
    return (
        <>
            <div className='bg-linear-to-r/srgb from-indigo-500 to-teal-400 w-[100%]'>
                <div className='pt-2.5'>
                    <h1 className='text-4xl text-center font-medium text-indigo-100 max-[430px]:text-[30px] max-[430px]:pt-5'>We serve clients with ground breaking solutions</h1>
                    <p className='text-center text-lg text-indigo-50 max-[430px]:text-[15px] max-[430px]:mt-5 max-[430px]:font-medium max-[430px]:p-2.5'>We offer a full range of digital services—each crafted to drive growth, boost efficiency, and elevate your brand.</p>
                </div>
                <div className='flex justify-around mt-[40px] flex-wrap' >
                    <div className='grid grid-cols-2 gap-5 max-[430px]:grid-cols-1 max-[430px]:m-auto'>
                        <div className='w-[23rem] shadow-[0px_0px_8px_2px_yellow] p-3 rounded-2xl'>
                            <div className='bg-black w-fit p-2.5 rounded-[18px]'>
                                <img src={image16} alt="layout" className='w-10' />
                            </div>
                            <div>
                                <h1 className='text-3xl font-medium'>Web Designing</h1>
                                <p className='text-[15px] tracking-[1px] font-medium mt-2' >We craft visually engaging and responsive websites that not only look great but also provide seamless user experiences.</p>
                            </div>
                        </div>
                        <div className='w-[23rem] shadow-[0px_0px_8px_2px_yellow] p-3  rounded-2xl'>
                            <div className='bg-black w-fit p-2.5 rounded-[18px]'>
                                <img src={image17} alt="layout" className='w-10' />
                            </div>
                            <div>
                                <h1 className='text-3xl font-medium'>Web Development</h1>
                                <p className='text-[15px] tracking-[1px] font-medium mt-2 ' >We craft visually engaging and responsive websites that not only look great but also provide seamless user experiences.</p>
                            </div>
                        </div>
                        <div className='w-[23rem] shadow-[0px_0px_8px_2px_yellow] p-3   rounded-2xl'>
                            <div className='bg-black w-fit p-2.5 rounded-[18px]'>
                                <img src={image18} alt="layout" className='w-10' />
                            </div>
                            <div>
                                <h1 className='text-3xl font-medium'>Digital Marketing</h1>
                                <p className='text-[15px] tracking-[1px] font-medium mt-2' >We craft visually engaging and responsive websites that not only look great but also provide seamless user experiences.</p>
                            </div>
                        </div>
                        <div className='w-[23rem] shadow-[0px_0px_8px_2px_yellow] p-3   rounded-2xl'>
                            <div className='bg-black w-fit p-2.5 rounded-[18px]'>
                                <img src={image19} alt="layout" className='w-10' />
                            </div>
                            <div>
                                <h1 className='text-3xl font-medium'>AI & Automation</h1>
                                <p className='text-[15px] tracking-[1px] font-medium mt-2' >We craft visually engaging and responsive websites that not only look great but also provide seamless user experiences.</p>
                            </div>
                        </div>
                        <div className='w-[23rem] shadow-[0px_0px_8px_2px_yellow] p-3 m-auto rounded-2xl relative left-[12rem] max-[430px]:static'>
                            <div className='bg-black w-fit p-2.5 rounded-[18px]'>
                                <img src={image20} alt="layout" className='w-10' />
                            </div>
                            <div>
                                <h1 className='text-3xl font-medium'>App Development</h1>
                                <p className='text-[15px] tracking-[1px] font-medium mt-2' >We craft visually engaging and responsive websites that not only look great but also provide seamless user experiences.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={image15} alt="service" className='max-[430px]:hidden' />
                    </div>
                </div>
                <div className='mt-10'>
                    <h1 className='text-4xl text-center font-medium text-indigo-100 max-[430px]:text-[30px]'>Watch Our Promo Video</h1>
                    <p className='text-center text-md mb-5 text-indigo-50 max-[430px]:text-[15px] max-[430px]:mt-2'>Grab exclusive deals and limited-time offers to boost your business. Don’t miss out—unlock your savings today!</p>
                    <iframe className='m-auto mt-2.5 max-[430px]:w-[400px] ' width="560" height="315" src="https://www.youtube.com/embed/aAvDI1qae-U?si=H47fH02mw6I9hdxX" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
                <div className="mt-10">
                    <h1 className='text-4xl text-center font-medium text-indigo-100 max-[430px]:text-[30px]'>Our Technical Team</h1>
                    <p className='text-center text-md mb-5 text-indigo-50 m-auto w-[35rem] mt-2.5 max-[430px]:w-fit max-[430px]:text-[15px]'>A passionate group of designers, developers, and strategists dedicated to delivering innovative solutions. Together, we combine creativity, technology, and experience to help your business grow.</p>
                    <div className='flex justify-center flex-wrap'>
                        <div className='shadow-[0px_0px_8px_2px] ml-3 mr-3  w-[22rem] rounded-2xl hover:shadow-[0px_0px_8px_2px_yellow] max-[430px]:mb-7'>
                            <div>
                                <img src={image21} alt="user" className='w-55 p-5 rounded-4xl m-auto' />
                                <div className='bg-yellow-300 w-[100%] rounded-br-2xl rounded-bl-2xl p-5 text-center'>
                                    <h1 className='text-2xl font-medium'>Monkey.D.Luffy</h1>
                                    <p className='text-black font-bold'>Web Developer</p>
                                </div>
                            </div>
                        </div>
                        <div className='shadow-[0px_0px_8px_2px] ml-3 mr-3  w-[22rem] rounded-2xl hover:shadow-[0px_0px_8px_2px_yellow] max-[430px]:mb-7'>
                            <div>
                                <img src={image22} alt="user" className='w-55 p-5 rounded-4xl m-auto' />
                                <div className='bg-yellow-300 w-[100%] rounded-br-2xl rounded-bl-2xl p-5 text-center'>
                                    <h1 className='text-2xl font-medium'>Monkey.D.Luffy</h1>
                                    <p className='text-black font-bold'>Web Developer</p>
                                </div>
                            </div>
                        </div>
                        <div className='shadow-[0px_0px_8px_2px] ml-3 mr-3  w-[22rem] rounded-2xl hover:shadow-[0px_0px_8px_2px_yellow] max-[430px]:mb-7'>
                            <div>
                                <img src={image23} alt="user" className='w-55 p-5 rounded-4xl m-auto' />
                                <div className='bg-yellow-300 w-[100%] rounded-br-2xl rounded-bl-2xl p-5 text-center'>
                                    <h1 className='text-2xl font-medium'>Monkey.D.Luffy</h1>
                                    <p className='text-black font-bold'>Web Developer</p>
                                </div>
                            </div>
                        </div>
                        <div className='shadow-[0px_0px_8px_2px] ml-3 mr-3  w-[22rem] rounded-2xl hover:shadow-[0px_0px_8px_2px_yellow] max-[430px]:mb-7'>
                            <div>
                                <img src={image24} alt="user" className='w-55 p-5 rounded-4xl m-auto' />
                                <div className='bg-yellow-300 w-[100%] rounded-br-2xl rounded-bl-2xl p-5 text-center'>
                                    <h1 className='text-2xl font-medium'>Monkey.D.Luffy</h1>
                                    <p className='text-black font-bold'>Web Developer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServicePage

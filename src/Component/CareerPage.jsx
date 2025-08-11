import React from 'react'
import image25 from '../Image/career.png'
import image26 from '../Image/grow.png'
import image27 from '../Image/idea.png'
import image28 from '../Image/heart.png'
function CareerPage() {
    const rolearray = [
        {
            job: 'Web Developer Intern',
            remote: "Part Time"
        },
        {
            job: 'UI/UX Design Intern',
            remote: "Part Time"
        },
        {
            job: 'Digital Marketing Intern',
            remote: "Part Time"
        },
        {
            job: 'AI Intern',
            remote: "Part Time"
        },
        {
            job: 'App Development Intern',
            remote: "Part Time"
        },
    ]
    return (
        <>
            <div className='bg-linear-to-r/srgb from-indigo-500 to-teal-400 w-[100%] font-serif'>
                <div className='text-center pt-2 max-[430px]:pt-3'>
                    <h1 className='text-4xl font-medium mb-2 max-[430px]:text-[30px]'>Join a Team That Builds with Purpose</h1>
                    <button className='bg-amber-400 p-1 rounded-lg text-indigo-800 font-medium'>See Open role</button>
                    <img src={image25} alt="career" className='m-auto mt-5' />
                </div>
                <div className='flex justify-around mt-5 flex-wrap'>
                    <div className='shadow-[0px_0px_8px_2px_#FFD43B] w-fit p-5 rounded-2xl max-[430px]:w-[19rem] max-[430px]:p-2 max-[430px]:mb-5'>
                        <div className='flex items-baseline'>
                            <img src={image26} alt="grow" className='w-5 mr-2' />
                            <h1 className='text-xl font-medium max-[430px]:text-[20px]'>Growth & Learning Opportunities</h1>
                        </div>
                        <p className='w-[360px] text-[13px] mt-2 font-medium text-black max-[430px]:w-[18rem]'>Unlock endless opportunities to upskill through workshops</p>
                    </div>
                    <div className='shadow-[0px_0px_8px_2px_#FFD43B] w-fit p-5 rounded-2xl max-[430px]:w-[19rem] max-[430px]:p-2 max-[430px]:mb-5'>
                        <div className='flex items-baseline'>
                            <img src={image27} alt="grow" className='w-5 mr-2' />
                            <h1 className='text-xl font-medium max-[430px]:text-[20px]'>Collaborative & Inclusive Culture</h1>
                        </div>
                        <p className='w-[360px] text-[13px] mt-2 font-medium text-black max-[430px]:w-[19rem]'>Work in a supportive, diverse environment where collaboration and innovation thrive
                        </p>
                    </div>
                    <div className='shadow-[0px_0px_8px_2px_#FFD43B] w-fit p-5 rounded-2xl max-[430px]:w-[19rem] max-[430px]:p-2 max-[430px]:mb-5'>
                        <div className='flex items-baseline'>
                            <img src={image27} alt="grow" className='w-5 mr-2' />
                            <h1 className='text-xl font-medium max-[430px]:text-[20px]'>Meaningful Work with Real Impact</h1>
                        </div>
                        <p className='w-[360px] text-[13px] mt-2 font-medium text-black max-[430px]:w-[19rem]'>Contribute to real-world solutions that make a difference for people, businesses, and communities.
                        </p>
                    </div>
                </div>
                <div className='mt-5'>
                    <h1 className='text-3xl text-center font-medium font-serif mb-5 mt-5 '>Open Role</h1>
                    <div className='flex m-auto w-[70rem] flex-wrap max-[430px]:w-[25rem] max-[430px]:ml-5'>
                        {rolearray?.map((value, index) => {
                            return <div key={index} className='w-[22rem] m-2.5 p-5 rounded-3xl shadow-[0px_0px_8px_2px_#FFD43B] hover:shadow-[0px_0px_12px_4px_#FFD43B]'>
                                <h1 className='text-2xl font-bold'>{value.job}</h1>
                                <p className='mt-2'>Remote:{value.remote}</p>
                                <button className='text-amber-400 cursor-pointer mt-2'> Apply Now</button>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default CareerPage

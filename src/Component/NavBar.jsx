import { Link } from 'react-router-dom'
import image0 from '../Image/menu.png'

function NavBar() {
    const handleshowmenu = () => {
        console.log("hit")
        const element = document.getElementById('menushow')
        if (element.style.display === 'none') {
            element.style.display = 'flex'
        } else {
            element.style.display = 'none'
        }
    }
    return (
        <>
            <div className='flex flex-wrap justify-between  p-4' >
                <div className='max-[430px]:flex max-[430px]:justify-between  max-[430px]:w-[-webkit-fill-available] border-b-amber-300'>
                    <h1 className='text-2xl text-sky-950 font-extrabold cursor-pointer'><Link to='/'>Desing Tailwind</Link></h1>
                    <img src={image0} alt="menu" className='hidden w-[30px] max-[430px]:flex' onClick={handleshowmenu} />
                </div>
                <div className='flex flex-wrap'>
                    <div className=' flex max-[430px]:hidden max-[430px]:flex-col max-[430px]:items-center max-[430px]:justify-center' id='menushow'>
                        <div className='m-2.5 font-mono cursor-pointer hover:text-sky-700'><Link to='/about'> About US</Link></div>
                        <div className='m-2.5 font-mono cursor-pointer hover:text-sky-700'>Services</div>
                        <div className='m-2.5 font-mono cursor-pointer hover:text-sky-700'>Careers</div>
                        <div className='m-2.5 font-mono cursor-pointer hover:text-sky-700'>Contact</div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default NavBar

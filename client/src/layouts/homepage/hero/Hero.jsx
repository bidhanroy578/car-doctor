import { useState } from 'react'
import banner1 from './../../../assets/images/banner/1.jpg'
import banner2 from './../../../assets/images/banner/2.jpg'
import banner3 from './../../../assets/images/banner/3.jpg'
import banner4 from './../../../assets/images/banner/4.jpg'
import banner5 from './../../../assets/images/banner/5.jpg'
import banner6 from './../../../assets/images/banner/6.jpg'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'


const Hero = () => {
    const images = [banner1, banner2, banner3, banner4, banner5, banner6]
    const [imageindex, setImageindex] = useState(0)
    const btnLeftClick = () => {
        if (imageindex === 0) {
            setImageindex(images.length - 1)
        } else {
            setImageindex(imageindex - 1)
        }
    }
    const btnRightClick = () => {
        if (imageindex === images.length - 1) {
            setImageindex(0)
        } else {
            setImageindex(imageindex + 1)
        }
    }
    return (
        <div className="h-screen relative text-white">
            <img className='object-cover object-center w-full h-full' src={images[imageindex]} alt={`banner image ${imageindex + 1}`} />
            <div className='absolute top-0 p-10 left-0 h-screen w-full bg-linear-to-r from-[#151515] to-[#15151500] flex flex-col justify-center space-y-5'>
                <h2 className='text-6xl font-bold'>Affordable <br /> Price For Car <br /> Servicing</h2>
                <p className='text-lg'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                <div>
                    <button className='btn btn-secondary m-4'>Discover More</button>
                    <button className='btn btn-outline'>Latest Project</button>
                </div>
                <div className='absolute text-3xl bottom-5 right-0'>
                    <button onClick={btnLeftClick} className='bg-white/25 hover:bg-red-500 p-5 rounded-full m-4'><FaArrowLeft className='text-white ' /></button>
                    <button onClick={btnRightClick} className='bg-white/25 hover:bg-red-500 p-5 rounded-full m-4'><FaArrowRight className='text-white ' /></button>
                </div>
            </div>
        </div >
    );
};

export default Hero;
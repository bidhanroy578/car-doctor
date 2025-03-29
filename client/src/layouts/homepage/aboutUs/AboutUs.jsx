import person from './../../../assets/images/about_us/person.jpg'
import parts from './../../../assets/images/about_us/parts.jpg'


const AboutUs = () => {
    return (
        <div className='my-20 flex h-[80vh] gap-10'>
            <div className='flex-1/2 relative'>
                <img src={person} className='rounded-lg h-[80%] object-cover' />
                <img src={parts} className='absolute top-1/2 left-1/2 h-1/2 w-1/2 object-cover border-8 rounded-2xl' />
            </div>
            <div className='space-y-6 flex-1/2'>
                <h6 className='text-red-500 font-bold text-xl'>About Us</h6>
                <h3 className='font-bold text-5xl'>We are qualified <br />& of experience <br /> in this field</h3>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <button className='btn btn-error'>Get More Info</button>
            </div>
        </div>
    );
};

export default AboutUs;
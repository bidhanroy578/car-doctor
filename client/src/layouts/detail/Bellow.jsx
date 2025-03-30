import img from './../../assets/images/homeCarousel/2.jpg'
const Bellow = () => {
    return (
        <div className="space-y-5">
            <h1 className='font-bold text-4xl'>3 Simple Steps to Process</h1>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text</p>
            <div className="rounded-lg grid grid-cols-3 gap-5 text-center">
                <div className="p-10 rounded-lg flex items-center flex-col gap-3 shadow-red-400 shadow">
                    <h4 className="p-4 w-fit border-[25px] border-[#ffebe7] font-bold text-xl bg-red-500 rounded-full">01</h4>
                    <h4 className="font-bold text-xl">Step One</h4>
                    <p>It uses a dictionary of over 200 .</p>
                </div>
                <div className="p-10 rounded-lg flex items-center flex-col gap-3 shadow-red-400 shadow">
                    <h4 className="p-4 w-fit border-[25px] border-[#ffebe7] font-bold text-xl bg-red-500 rounded-full">02</h4>
                    <h4 className="font-bold text-xl">Step Two</h4>
                    <p>It uses a dictionary of over 200 .</p>
                </div>
                <div className="p-10 rounded-lg flex items-center flex-col gap-3 shadow-red-400 shadow">
                    <h4 className="p-4 border-[25px] border-[#ffebe7] font-bold text-xl bg-red-500 rounded-full">03</h4>
                    <h4 className="font-bold text-xl">Step Three</h4>
                    <p>It uses a dictionary of over 200 .</p>
                </div>
            </div>
            <div className='relative mb-10'>
                <img src={img} className='rounded-lg' />
                <div className='w-full h-full absolute top-0 left-0 flex justify-center items-center'>
                    <svg className='cursor-pointer hover:scale-105 active:scale-100 transition-transform' width="126" height="126" viewBox="0 0 126 126" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M110.25 63C110.25 69.205 109.028 75.3492 106.653 81.0818C104.279 86.8144 100.798 92.0232 96.4108 96.4108C92.0232 100.798 86.8144 104.279 81.0818 106.653C75.3492 109.028 69.205 110.25 63 110.25C56.795 110.25 50.6508 109.028 44.9182 106.653C39.1856 104.279 33.9768 100.798 29.5892 96.4108C25.2016 92.0232 21.7212 86.8144 19.3467 81.0818C16.9722 75.3492 15.75 69.205 15.75 63C15.75 50.4685 20.7281 38.4503 29.5892 29.5892C38.4503 20.7281 50.4685 15.75 63 15.75C75.5315 15.75 87.5497 20.7281 96.4108 29.5892C105.272 38.4503 110.25 50.4685 110.25 63Z" stroke="#FF3811" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M83.5275 61.278C83.8349 61.4484 84.0911 61.6979 84.2695 62.0007C84.4479 62.3035 84.5419 62.6486 84.5419 63C84.5419 63.3515 84.4479 63.6965 84.2695 63.9993C84.0911 64.3021 83.8349 64.5517 83.5275 64.722L54.1118 81.0653C53.812 81.2316 53.474 81.3169 53.1312 81.3125C52.7884 81.3082 52.4527 81.2143 52.1573 81.0404C51.8618 80.8664 51.617 80.6183 51.4469 80.3207C51.2768 80.023 51.1874 79.6861 51.1875 79.3433V46.6568C51.1875 45.1553 52.7993 44.2103 54.1118 44.94L83.5275 61.278Z" stroke="#FF3811" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Bellow;
import { PiArrowRight, PiFilesDuotone } from "react-icons/pi";
import logo from './../../assets/logo.svg'
import { Link } from "react-router";

const Aside = ({ price, service_id, serviceList, loading }) => {

    return (
        <div className=" space-y-5">
            <div className="p-10 bg-[#f3f3f3] dark:bg-[#444444] rounded-lg">
                <h3 className=" font-bold text-2xl mb-2">Services</h3>
                <div className="space-y-3">
                    {loading ?
                        <div className="animate-pulse space-y-3">
                            <button className="w-full py-6 bg-white rounded-lg"></button>
                            <button className="w-full py-6 bg-white rounded-lg"></button>
                            <button className="w-full py-6 bg-white rounded-lg"></button>
                            <button className="w-full py-6 bg-white rounded-lg"></button>
                            <button className="w-full py-6 bg-white rounded-lg"></button>
                        </div>
                        :
                        serviceList.map(item =>
                            <button className="w-full py-3 flex justify-between items-center px-4 bg-white dark:bg-[#151515] rounded-lg hover:text-white hover:bg-red-500 hover:scale-105  cursor-pointer transition-transform" key={item.service_id}>
                                <span className=" font-semibold">{item.title}</span>
                                <PiArrowRight className="text-xl " />
                            </button>
                        )
                    }
                </div>
            </div>
            <div className="bg-[#151515] text-white p-10 rounded-lg space-y-5">
                <h3 className=" font-bold text-2xl">Download</h3>
                <div className="flex items-center justify-between text-3xl">
                    <div className="flex items-center gap-1">
                        <PiFilesDuotone />
                        <div>
                            <h4 className=" font-semibold text-lg">Our Brochure</h4>
                            <h6 className=" text-base">Download</h6>
                        </div>
                    </div>
                    <button className=" text-xl p-3 bg-red-500 rounded-sm  hover:scale-110 active:scale-100 transition-transform"><PiArrowRight /></button>
                </div>
                <div className="flex items-center justify-between text-3xl">
                    <div className="flex items-center gap-1">
                        <PiFilesDuotone />
                        <div>
                            <h4 className=" font-semibold text-lg">Company Details</h4>
                            <h6 className=" text-base">Download</h6>
                        </div>
                    </div>
                    <button className=" text-xl p-3 bg-red-500 rounded-sm  hover:scale-110 active:scale-100 transition-transform"><PiArrowRight /></button>
                </div>
            </div>
            <div className="p-10 pb-20 text-center bg-[#151515] text-white flex flex-col items-center gap-4 rounded-xl">
                <img src={logo} />
                <h4 className=" font-bold text-xl">Need Help? We Are Here <br /> To Help You</h4>
                <div className="p-3 bg-white rounded-lg text-black w-full">
                    <h4 className=" font-bold text-lg"><span className=" text-red-500">Car Doctor</span> Special</h4>
                    <p className=" font-bold">Save up to <span className=" text-red-500">60% off</span></p>
                    <button className="relative top-9 p-3 font-semibold text-lg rounded-lg text-white px-8 hover:scale-105 active:scale-100 transition-transform bg-red-500 cursor-pointer">Get A Quote</button>
                </div>
            </div>
            <h1 className=" font-bold text-4xl">Price {price}</h1>
            <Link to={`/checkout/${service_id}`} className="block text-center w-full py-3 font-semibold text-lg rounded-lg text-white hover:scale-105 active:scale-100 transition-transform bg-red-500 cursor-pointer">Proceed Checkout</Link>
        </div>
    );
};

export default Aside;
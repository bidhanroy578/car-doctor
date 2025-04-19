import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";

const SignUp = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="">
                <h3 className=" font-semibold text-4xl text-center">Sign Up</h3>
                <label className="block text-gray-700 text-lg font-semibold mb-2" htmlFor="name">
                    Name
                    <input type="name" className="w-full mt-4 block text-sm p-3 px-5 border-2 border-[#E8E8E8] rounded-md" name="name" id="name" placeholder='Your Name' />
                </label>
                <label className="block text-gray-700 text-lg font-semibold mb-2" htmlFor="email">
                    Email
                    <input type="email" className="w-full mt-4 block text-sm p-3 px-5 border-2 border-[#E8E8E8] rounded-md" name="email" id="email" placeholder='Your Email' />
                </label>
                <label className="block text-gray-700 text-lg font-semibold mb-2" htmlFor="password">
                    Confirm Password
                    <input type="password" className="w-full mt-4 block text-sm p-3 px-5 border-2 border-[#E8E8E8] rounded-md" name="password" id="password" placeholder='Your Password' />
                </label>
                <input type="submit" className="mt-4 py-3 rounded-md bg-red-500 font-semibold text-xl text-white w-full relative hover:translate-y-1 active:scale-95 transition-transform" value="Sign Up" />
            </form>
            <div className="text-center mt-5 space-y-5">
                <p>Or Sign Up with</p>
                <div className="flex gap-5 justify-center">
                    <FcGoogle className="text-4xl cursor-pointer hover:scale-105 active:scale-95 transition-transform" />
                    <FaGithub className="text-4xl cursor-pointer hover:scale-105 active:scale-95 transition-transform" />
                </div>
                <p>Already have an account? <Link to='/login' className="btn text-red-500 btn-link ">Sign In</Link></p>
            </div>
        </div>
    );
};

export default SignUp;
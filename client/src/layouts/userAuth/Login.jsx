import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { Link } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../../context_providers/Contexts";

const Login = () => {

    const { loginWithEmail } = useContext(AuthContext);

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        if (password.length < 6) {
            alert('Password must be at least 6 characters long');
            return;
        }
        loginWithEmail(email, password)
            .then(data => {
                console.log(data.user);
                alert('Login Successful');
            }).catch(err => alert(err.message));
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="">
                <h3 className=" font-semibold text-4xl text-center">Login</h3>
                <label className="block text-gray-700 text-lg font-semibold mb-2" htmlFor="email">
                    Email
                    <input type="email" className="w-full mt-4 block text-sm p-3 px-5 border-2 border-[#E8E8E8] rounded-md" name="email" id="email" placeholder='Your Email' />
                </label>
                <label className="block text-gray-700 text-lg font-semibold mb-2" htmlFor="password">
                    Confirm Password
                    <input type="password" className="w-full mt-4 block text-sm p-3 px-5 border-2 border-[#E8E8E8] rounded-md" name="password" id="password" placeholder='Your Password' />
                </label>
                <input type="submit" className="mt-4 py-3 rounded-md bg-red-500 font-semibold text-xl text-white w-full relative hover:translate-y-1 active:scale-95 transition-transform" value="Sign In" />
            </form>
            <div className="text-center mt-5 space-y-5">
                <p>Or Sign In with</p>
                <div className="flex gap-5 justify-center">
                    <FcGoogle className="text-4xl cursor-pointer hover:scale-105 active:scale-95 transition-transform" />
                    <FaGithub className="text-4xl cursor-pointer hover:scale-105 active:scale-95 transition-transform" />
                </div>
                <p>Don't have an account? <Link to='/login/signup' className="btn text-red-500 btn-link ">Sign Up</Link></p>
            </div>
        </div>
    );
};

export default Login;
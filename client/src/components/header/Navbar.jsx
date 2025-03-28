import { Link } from 'react-router';
import logo from './../../assets/logo.svg'
import { AiOutlineShopping } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";


const Navbar = () => {
    const navLinks = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/services'>Services</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-xl"><img src={logo} alt="logo" className='h-14' /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end gap-5 hidden sm:flex">
                <button className='text-xl transition-transform hover:scale-115 active:scale-100'><AiOutlineShopping /></button>
                <button className='transition-transform hover:scale-115 active:scale-100'><FaSearch /></button>
                <button className='btn btn-secondary hover:scale-110 active:scale-100 transition-transform btn-outline'>Appointment</button>
            </div>
        </div>
    );
};

export default Navbar;
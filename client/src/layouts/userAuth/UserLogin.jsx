import { Outlet } from 'react-router';
import img1 from './../../assets/images/login/login.svg'

const UserLogin = () => {
    return (
        <div className='mt-20 grid grid-cols-2 gap-4 mb-10'>
            <img src={img1} alt="login image" />
            <Outlet />
        </div>
    );
};

export default UserLogin;
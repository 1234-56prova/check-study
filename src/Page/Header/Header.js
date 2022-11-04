import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {

    const [user] = useAuthState(auth);



    return (

        <div className=' bg-slate-50 h-20'>

            <nav className='flex flex-row-reverse'>
{
            user ? <Link to='/' className='text-2xl text-center p-4'>Logout</Link> :  <Link to='/' className='text-2xl text-center p-4'>Login</Link>
}
            </nav>

        </div>

    );

};

export default Header;
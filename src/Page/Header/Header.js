import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {

    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const handleSignOut = () => {
        signOut(auth);
        navigate('/')
    }

    return (

        <div className=' bg-slate-50'>
            <header className='pt-10 flex '>
                <h1 className='text-4xl grow text-center'>STUDY-FORM</h1>
                {
                    user ? <Link to='/' className='text-2xl p-4' onClick={() => {handleSignOut()}}>Logout</Link> : <Link to='/' className='text-2xl '></Link>
                }
            </header>
        </div>

    );

};

export default Header;
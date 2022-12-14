import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Home = () => {

    const {handleSubmit, register} = useForm();

    const [
        signInWithEmailAndPassword,
        user,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const [navigate] = useNavigate();
    const [data, setData] = useState([]);

    if (user) {

        navigate('/home');

    }
    return (

        <div className=' bg-black text-slate-50'>

            <p className='text-6xl mt-48'>Who are you?</p>

            <form onSubmit={
                handleSubmit ((data) => {
                    setData(JSON.stringify(data))
                    console.log('done!');
                })
            }>
             
                <input className='m-10 pl-20 p-4 w-96 rounded-md text-black' {...register("email")} placeholder="Email"  type='email'/> <br/>

                <input className='m-10 pl-20 p-4 w-96 rounded-md text-black' {...register("password")} placeholder="Password" type='password' /> <br/>

                <input type="submit" onClick={signInWithEmailAndPassword(data.email, data.password)} className='p-4 bg-slate-50 w-96 rounded-md text-black m-2' />

            </form>

        </div>

    );

};

export default Home;
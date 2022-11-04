import React, { useState } from 'react';

import { useForm } from "react-hook-form";

const Home = () => {

    const {handleSubmit, register} = useForm();

    const [setData] = useState([]);

    return (

        <div className=' bg-black text-slate-50'>

            <p className='text-6xl mt-48'>Who are you?</p>

            <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
             
                <input className='m-10 pl-20 p-4 w-96 rounded-md' {...register("firstName")} placeholder="First name" /> <br/>

                <input className='m-10 pl-20 p-4 w-96 rounded-md' {...register("lastName")} placeholder="Last name" /> <br/>

                <textarea className='w-96 pb-12 rounded-md' {...register("aboutYou")} placeholder="About you" /><br/>

                <input type="submit" className='p-4 text-black bg-slate-50 w-96 rounded-md m-2' />

            </form>

        </div>

    );

};

export default Home;
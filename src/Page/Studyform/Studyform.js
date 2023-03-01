import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
const Studyform = () => {

    const [data, setData] = useState([]);
    const [numTopics, setnumTopics] = useState(1);
    const { register, handleSubmit } = useForm();

    const handleNumofTopicsChange = (event) => {
        setnumTopics(event.target.value);
    };

    let topics = [];
    for (let i = 0; i < numTopics; i++) {
        topics.push
            (
                <div>
                    <label className='rounded bg-white text-black p-2 m-2'>{`topic-${i + 1}`}</label><br/>
                    <input
                        className='p-4 m-1 bg-black rounded w-72'
                        type="text"
                        id={`topics-${i + 1}`}
                        placeholder={`topic ${i + 1}`}
                        {...register(`topics-${i + 1}`, { required: true })}
                    /><br></br>
                    <label>how long did you study this topic?</label>
                    <input placeholder={'how long did you study this topic?'} className='p-4 m-1 bg-black rounded w-72' type={'time'}></input><br></br>
                    <label className=''>What do you remember?</label>
                    <textarea className='p-4 mt-5 bg-black rounded w-72'></textarea>
                </div>
            );
    };

    return (
        <div className='text-slate-50 mt-20'>
            <form onChange={handleNumofTopicsChange} onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
                <label htmlFor="num-inputs">Number of topics:</label>
                <input
                    className='p-4 m-1 bg-black rounded w-72'
                    type="number"
                    id="num-topics"
                    name="numTopics"
                    {...register("numTopics")}
                />
                {topics}<br />
                <input className='hover:text-black hover:bg-slate-50 p-4 m-1 bg-black rounded w-72' type="submit" />
            </form>
        </div>
    );
};

export default Studyform;
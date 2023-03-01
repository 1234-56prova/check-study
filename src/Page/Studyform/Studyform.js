import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
const Studyform = () => {

    const [data, setData] = useState([]);
    const [numTopics, setnumTopics] = useState(1);
    const { register, handleSubmit } = useForm();

    const handleNumofTopicsChange = (event) => {
        console.log(event.target.value);
        setnumTopics(event.target.value);
    };

    let topics = [];
    for (let i = 0; i < numTopics; i++) {
        console.log(topics);
        topics.push
            (
                <div>
                    <input
                        className='p-4 m-1 bg-black rounded w-72'
                        type="text"
                        id={`topics-${i + 1}`}
                        placeholder={`topic ${i + 1}`}
                        {...register(`topics-${i + 1}`, { required: true })}
                    />
                </div>
            );
    };

    return (
        <div className='text-slate-50'>
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
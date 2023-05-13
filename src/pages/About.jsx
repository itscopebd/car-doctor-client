import React from 'react';
import person from "../assets/images/about_us/person.jpg"
import parts from "../assets/images/about_us/parts.jpg"
const About = () => {
    return (
        <>
            <div className="bg-base-100 my-20 flex p-7">
                <div className='w-6/12 relative'>
                <img src={person} className='w-9/12 rounded-lg'  alt="Movie" />
                <img src={parts} className='w-6/12 rounded-lg absolute top-1/2 right-0 p-2 border bg-white border-white' alt="Movie" />
                </div>
                <div className="w-6/12 pl-10 space-y-10">
                    <h2 className="text-4xl leading-7 text-secondary">About Us</h2>
                    <h1 className='text-6xl text-black'>We are qualified & of experience in this field</h1>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className='btn btn-secondary'>Get More Info</button>
                    
                </div>
            </div>
        </>
    );
};

export default About;
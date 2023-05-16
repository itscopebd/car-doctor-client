import React from 'react';
import { Link } from 'react-router-dom';
const ServicesCard = ({ service }) => {
    const { _id,title, price,img } = service;
    return (
        <div className="card bg-base-100 shadow-sm">
            <figure><img src={img} className='h-72 w-full' alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl font-bold">{title}</h2>
                <p className='text-secondary text-2xl'>Price : ${price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/book/${_id}`}><button className='text-secondary'>Book Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;
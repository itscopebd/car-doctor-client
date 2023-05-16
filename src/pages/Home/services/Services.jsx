import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {
    const [services, setService] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/services")
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    return (
        <div className='my-20'>
            <div className='text-center space-y-4'>
                <h4 className='text-secondary text-4xl'>Service</h4>
                <h3 className='text-5xl font-bold'>Our Service Area</h3>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid md:grid-cols-3 gap-8 my-10'>
                {
                    services.map(service => <ServicesCard key={service._id} service={service}></ServicesCard>)
                }
            </div>

        </div>
    );
};

export default Services;
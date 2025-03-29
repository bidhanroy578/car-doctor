import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/services')
            .then(res => {
                setServices(res.data)
            })
    }, [])

    return (
        <div className=' text-center space-y-5 my-20'>
            <h6 className='text-red-500 font-bold text-xl'>Service</h6>
            <h3 className='font-bold text-5xl'>Our Service Area</h3>
            <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            <div className='grid grid-cols-3 justify-self-center gap-5'>
                {
                    services.map(service => <ServiceCard key={service.service_id} service={service} />)
                }
            </div>
        </div >
    );
};

export default Services;
import React from 'react';
import floride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import Service from '../Service/Service';



const Services = () => {

    const servicesData = [
    {
        id : 1,
        name : 'Fluoride Treatment',
        description : 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
        img: floride
    },
    {
        id : 2,
        name : 'Cavity Filling',
        description : 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
        img: cavity
    },
    {
        id : 3,
        name : 'Teeth Whitening',
        description : 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
        img: whitening
    },



    ]
    return (
        <div className='p-10 text-center'>
            <div className='my-10'>
                <h2 className=' uppercase text-2xl '>Our Services</h2>
                <h1 className=' text-4xl'>Services We Provide</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:gird-cols-3 gap-6'>
                {
                    servicesData.map(service =><Service key = {service.id} service = {service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;
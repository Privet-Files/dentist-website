import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';
const Testimonial = () => {

    const reviews = [
        {
            id : 1,
            name : "Winson Herry",
            review : "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            location : 'California',
            img : people1
        },
        {
            id : 2,
            name : "Winson Herry",
            review : "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            location : 'California',
            img : people2
        },
        {
            id : 3,
            name : "Winson Herry",
            review : "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            location : 'California',
            img : people3
        },
       
    ]
    return (
        <section className='my-16'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-xl text-primary font-bold'> Testimonila</h4>
                    <h2 className="text-4xl">What Our Patients Says</h2>
                </div>
                <figure>
                    <img className='md:w-48 lg:w-48 w-24' src= {quote} alt="" />
                </figure>
            </div>
            <div className='grid md:grid-cols-3 lg:grid-cols-3 gap-6'>
               {
                reviews.map(reviews => <Review key = {reviews.id} reviews = {reviews}></Review>)
               }
            </div>
        </section>
    );
};

export default Testimonial;
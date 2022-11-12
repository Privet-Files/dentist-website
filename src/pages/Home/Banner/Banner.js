import React from 'react';
import chair from '../../../assets/images/chair.png'
import PrimaryBtn from '../../../Sortcomponent/PrimaryBtn';
import bgimg from '../../../assets/images/bg.png'

const Banner = () => {
    return (
        <div className="hero my-5 p-10" style={{ background: `url(${bgimg})` }} >
        <div className="hero-content justify-between flex-col lg:flex-row-reverse">
          <img src= {chair} alt='' className="md:w-1/2 sm:w-full rounded-lg shadow-2xl" />
          <div className='md:w-1/2'>
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
            <PrimaryBtn>Get Started</PrimaryBtn>
          </div>
        </div>
      </div>
    );
};

export default Banner;
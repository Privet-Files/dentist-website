import React from 'react';
import ContactForm from '../../component/ContactForm/ContactForm';
import MakeAppoinment from '../../component/MakeAppoinment/MakeAppoinment';
import Services from '../../component/services/Services';
import Tearms from '../../component/Tearms/Tearms';
import Testimonial from '../../component/Testimonila/Testimonial';
import Banner from './Banner/Banner';
import InfoCards from './InfoCards/InfoCards';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <Tearms></Tearms>
            <MakeAppoinment></MakeAppoinment>
            <Testimonial></Testimonial>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Home;
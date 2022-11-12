import React from 'react';
import MakeAppoinment from '../../component/MakeAppoinment/MakeAppoinment';
import Services from '../../component/services/Services';
import Tearms from '../../component/Tearms/Tearms';
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
        </div>
    );
};

export default Home;
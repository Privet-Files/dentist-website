import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import InfoCard from './InfoCard';
const InfoCards = () => {

    const cardData = [
        {
            id : 1,
            name : 'Opening Hours',
            descriptio : 'Open 9.00 am to 5.00pm EveryDay',
            icon : marker,
            bgClass : 'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id : 2,
            name : 'Our Location',
            descriptio : 'Open 9.00 am to 5.00pm EveryDay',
            icon : phone,
            bgClass : ' bg-gradient-to-r from-neutral to-secondary'
        },
        {
            id : 3,
            name : 'Contact Us',
            descriptio : 'Open 9.00 am to 5.00pm EveryDay',
            icon : clock,
            bgClass : 'bg-gradient-to-r from-primary to-secondary'
        },
    ]
    return (
        <div className='grid lg:grid-cols-3 gap-5 md:grid-cols-3'>
            {
               cardData.map(card => <InfoCard key = {card.id} card = {card}></InfoCard>) 
            }
        </div>
    );
};

export default InfoCards;
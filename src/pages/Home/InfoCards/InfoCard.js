import React from 'react';

const InfoCard = ({card}) => {
    const {name, descriptio,icon,bgClass} = card
 

    return (
        <div className= {`card card-side bg-base-100 p-5 shadow-xl text-white ${bgClass}`}>
        <figure><img src= {icon} alt="Movie"/></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{descriptio}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    );
};

export default InfoCard;
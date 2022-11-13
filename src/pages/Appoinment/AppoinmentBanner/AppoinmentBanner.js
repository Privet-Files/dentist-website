import React from "react";
import chair from '../../../assets/images/chair.png'
import bgimg from '../../../assets/images/bg.png'
import { DayPicker } from "react-day-picker";
const AppoinmentBanner = ({setSelectDate,selectDate}) => {
  return (
    <header style={{ background: `url(${bgimg})`, height : '60vh'}}>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src= {chair}
            className=" w-1/2 rounded-lg shadow-2xl"
            alt="Appoinment Banner"
          />
          <div className="w-1/2">
            <DayPicker mode="single" selectDate ={selectDate} onSelect={setSelectDate}>
              
            </DayPicker>
           
          </div>
          
        </div>
      </div>
    </header>
  );
};

export default AppoinmentBanner;




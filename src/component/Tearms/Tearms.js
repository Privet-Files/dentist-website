import React from "react";
import treatment from '../../assets/images/treatment.png'
import PrimaryBtn from "../../Sortcomponent/PrimaryBtn";
const Tearms = () => {
  return (
    <div className="hero px-10">
      <div className="hero-content justify-between flex-col lg:flex-row">
        <img
          src= {treatment}
          className="md:w-1/3 sm:w-full rounded-lg shadow-2xl"
          alt=""
        />
        <div className="md:w-2/3 ml-10 sm:w-full">
          <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
          <p className="py-6">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
          </p>
          <PrimaryBtn>Get Started</PrimaryBtn>
        </div>
      </div>
    </div>
  );
};

export default Tearms;

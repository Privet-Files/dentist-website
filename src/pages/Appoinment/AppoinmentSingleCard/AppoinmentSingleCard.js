import React from "react";
const AppoinmentSingleCard = ({ appoinment,settreatment }) => {
  const { name, slots } = appoinment;
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="text-center text text-primary text-2xl">{name}</h2>

        <div className="text-center">
          <p> {slots[0] ? slots[0] : "No Schdule Found"} </p>
          <p>
            {" "}
            {slots?.length > 0 ? `${slots.length}` : "0"}{" "}
            {slots.length <= 1 ? "SPACE" : "SPACES"} AVAILABLE
          </p>
        </div>
        <div className="w-1/2 mx-auto">
          <label
            htmlFor="open-modal"
            onClick={()=>settreatment(appoinment)}
            className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white"
          >
            open modal
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppoinmentSingleCard;

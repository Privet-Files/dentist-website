import React, { useState } from "react";
import AppoinmentBanner from "../AppoinmentBanner/AppoinmentBanner";
import AppoinmentCards from "../AppoinmentCard/AppoinmentCard";

const AppoinmentPage = () => {
  const [selectDate, setSelectDate] = useState(new Date());
  

  return (
    <section>
      <div>
        <h1>Appoinment Page</h1>
        <AppoinmentBanner
          selectDate={selectDate}
          setSelectDate={setSelectDate}
        ></AppoinmentBanner>

        <AppoinmentCards selectDate={selectDate}></AppoinmentCards>
      </div>
     
    </section>
  );
};

export default AppoinmentPage;

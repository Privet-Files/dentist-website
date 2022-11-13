import { format } from "date-fns";
import React,{useState,useEffect} from "react";
import ModalPage from "../../../Sortcomponent/ModalPage";
import AppoinmentSingleCard from "../AppoinmentSingleCard/AppoinmentSingleCard";


const AppoinmentCards = ({selectDate,setgetoption}) => {
    const [appoinments, setappoinments] = useState([])
    const [treatment, settreatment] = useState(null)
     
    useEffect(() => {
      fetch('appoinmentOption.json')
      .then(res => res.json())
      .then(data => setappoinments(data))
    }, [])

  return (
    <section className="w-9/12 mx-auto my-10">
        <h4 className="text-center text-4xl my-10 text-primary">Available Appointments on {format(selectDate, 'PP')}</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {
                appoinments.map(appoinment => <AppoinmentSingleCard  settreatment = {settreatment} setgetoption = {setgetoption} key = {appoinment._id} appoinment = {appoinment}></AppoinmentSingleCard>)
            }
        </div>
        {
          treatment && 
          <ModalPage selectDate = {selectDate} treatment = {treatment}></ModalPage>
        }
    </section>
  );
};

export default AppoinmentCards;

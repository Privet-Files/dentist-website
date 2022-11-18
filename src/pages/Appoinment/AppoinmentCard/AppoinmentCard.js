import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React,{useState} from "react";
import ModalPage from "../../../Sortcomponent/ModalPage";
import AppoinmentSingleCard from "../AppoinmentSingleCard/AppoinmentSingleCard";


const AppoinmentCards = ({selectDate,setgetoption}) => {
    // const [appoinments, setappoinments] = useState([])
    const [treatment, settreatment] = useState(null)
    const date = format(selectDate, 'PP')
    const {data:appoinments= [], refetch,isLoading} =  useQuery({
      queryKey : ['appoinmentOpiton',date],
      queryFn : async ()=>{
        const res = await  fetch(`http://localhost:5000/appoinmentOpiton?date=${date}`)
        const data = await res.json()
        return data
      }
    })
     
    if(isLoading){
      return <p>Loadding...</p>
    }

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
          <ModalPage refetch = {refetch} selectDate = {selectDate} settreatment = {settreatment} treatment = {treatment}></ModalPage>
        }
    </section>
  );
};

export default AppoinmentCards;

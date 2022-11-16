import { format } from 'date-fns';
import React from 'react';

const ModalPage = ({treatment,selectDate,settreatment}) => {
    const {name,slots} = treatment
    const date = format(selectDate,'PP')
    const handlegetdata = (event) =>{
        event.preventDefault()
        const form = event.target;
        const time = form.time.value;
        const patentName = form.name.value;
        const phone = form.number.value;
        const email = form.email.value; 
        const slote = form.slote.value;
        

        const data = {
           selectedData : time,
           treatmentName:name,
           pataint : patentName,
           slote,
           phone,
           email,  
        }
        form.reset()
        console.log(data)
        settreatment(null)

        
    }
    return (
        <div>
       <input type="checkbox" id="open-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="open-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>


            <form onSubmit={handlegetdata}>
            <h3 className="text-lg font-bold text-center">
            {name}
            <input name='time' type="text" value={date}  className="input input-bordered w-full my-5" required />
            <select  name='slote' className="input input-bordered w-full">
                {
                    slots.map((optn,index) => <option value = {optn} key = {index}> {optn} </option>)
                }
            </select>
            <input type="text" placeholder='your name' name = 'name' className="input input-bordered w-full my-5" required />
            <input type="text" placeholder='your number' name = 'number' className="input input-bordered w-full my-5"  required/>
            <input type="email" placeholder='your email' name = 'email' className="input input-bordered w-full my-5" required />
            <button className='btn '>Sumbit</button>
          </h3>
            </form>

         
           
        </div>
      </div>
        </div>
    );
};

export default ModalPage;
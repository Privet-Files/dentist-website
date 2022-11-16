
import { createBrowserRouter } from "react-router-dom"
import Main from "../../Layout/Main"
import AppoinmentPage from "../../pages/Appoinment/AppoinmentPage/AppoinmentPage"
import DashBoard from "../../pages/Dashboard/dashborad/DashBoard"
import Home from "../../pages/Home/Home"
import Login from "../../pages/Login/Login"
import Signpu from "../../pages/Signup/Signpu"
import PrivetRouter from "../PrivetRouter/PrivetRouter"

const router = createBrowserRouter([
    {
        path : '/', element : <Main></Main> , children : [
            {
               path : '/', element : <Home></Home> 
            },
            {
               path : '/login', element : <Login></Login>
            },
            {
               path : '/singup', element : <Signpu></Signpu>
            },
            {
               path : '/appoinment', element : <AppoinmentPage></AppoinmentPage>
            },
           
        ]
    },
    {
      path : '/dashboard', element : <PrivetRouter><DashBoard></DashBoard></PrivetRouter>
   },
])
export default router
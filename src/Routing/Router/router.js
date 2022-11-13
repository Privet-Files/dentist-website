
import { createBrowserRouter } from "react-router-dom"
import Main from "../../Layout/Main"
import AppoinmentPage from "../../pages/Appoinment/AppoinmentPage/AppoinmentPage"
import Home from "../../pages/Home/Home"
import Login from "../../pages/Login/Login"

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
               path : '/appoinment', element : <AppoinmentPage></AppoinmentPage>
            },
        ]
    }
])
export default router
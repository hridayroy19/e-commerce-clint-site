import { createBrowserRouter } from "react-router-dom";
import MainLeout from "../MainLaout/MainLeout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import NewProduct from "../Components/NewProduct/NewProduct";



const Router = createBrowserRouter([
    {
        path:"/",
        element:<MainLeout></MainLeout>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/about",
                element:<About></About>
            },
            {
                path:"/contact",
                element:<Contact></Contact>
            },
            {
                path:"/newProduct",
                element:<NewProduct/>
            }
          
        ]
      

    },
    {
        path:"/Login",
        element:<Login/>
    },
    {
        path:"register",
        element:<Register/>
    }
])


export default Router;
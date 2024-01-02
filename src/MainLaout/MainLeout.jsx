import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import { Toaster } from "react-hot-toast";


const MainLeout = () => {
    return (
        <div>
         <div className=""><Header></Header></div>
           <div className="px-9">
           <Outlet/>
           </div>
            <Toaster />
        </div>
    );
};

export default MainLeout;
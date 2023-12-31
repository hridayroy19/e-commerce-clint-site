import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import { Toaster } from "react-hot-toast";


const MainLeout = () => {
    return (
        <div>
         <Header></Header>
            <Outlet/>
            <Toaster />
        </div>
    );
};

export default MainLeout;
import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";


const MainLeout = () => {
    return (
        <div>
         <Header></Header>
            <Outlet/>

        </div>
    );
};

export default MainLeout;
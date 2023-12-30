import { Link, NavLink } from "react-router-dom";
// import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { Authcontext } from "../Authprovider/AuthProvider";


const Header = () => {

  const { user ,logOut} = useContext(Authcontext);


  const handelLogOut =()=>{
    logOut()
    .then(()=>{ })
    .catch( error => console.log(error));
  }




    return (
        <div className="navbar px-7  bg-base-300">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            {/* phoner  */}
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Item 1</a></li>             
              <li><a>Item 3</a></li>
            </ul>
          </div>
          {/* <img src={logo} alt="" className=" w-16 opacity- " /> */}
          <h1 className="text-3xl font-bold font-serif uppercase"> VivaBuy</h1>
        </div>
        <div className="navbar-center hidden lg:flex">
            {/* desktop */}
          <ul className="menu menu-horizontal px-1">
            <li>
            <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-[#4441f0] underline text-[17px] font-semibold" : ""
            }
          >
            HOME
          </NavLink>
            </li>
            <li>
            <NavLink
            to="/contact"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-[#4441f0] underline text-[17px] font-semibold" : ""
            }
          >
            CONTACT
          </NavLink>
            </li>
            <li>
            <NavLink
            to="/about"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-[#4441f0] underline text-[17px] font-semibold" : ""
            }
          >
            ABOUT
          </NavLink>
            </li>
            {/* <li>
            <NavLink
            to="/contact"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-[#4441f0] underline text-[17px] font-semibold" : ""
            }
          >
            CONTACT
          </NavLink>
            </li> */}
          </ul>
        </div>
        <div className="navbar-end flex gap-5  px-4">
          <a className="relative text-[28px] "> <FaShoppingCart/> 
            <p className=" absolute -top-1 -right-1 text-white bg-red-600 items-start h-4 w-4 rounded-full p-0 text-sm text-center"> 0</p>
           </a>
          {/* <a className=""> <FaUser/>  </a> */}
          {/* <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-[38px] rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div> */}


<div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          {/* <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" /> */}
          {
            
            user &&
            <img src={user.photoURL} alt="" />  
              
          
          }
          <img src="https://i.ibb.co/p3vCR2s/istockphoto-1300845620-612x612.jpg" alt="" />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li><a>New Product</a></li>
        {/* <li><a> <Link to={"/login"}>LogIn</Link> </a></li> */}
        <li> <a >
        {
          user ? <> <button className=" bg-blue-200 border py-2 px-2 p-2 font-bold rounded-md " onClick={handelLogOut} >  LOGUT </button> </> :
          
          <><> <Link to={"/login"}>
          <button className="font-bold text-xl  "> LOGIN </button>
        </Link></></>
        }
          
          </a></li>
      </ul>
    </div>
        </div>
      </div>
    );
};

export default Header;
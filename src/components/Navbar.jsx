import React,{useContext} from "react";
import { Link,useNavigate } from "react-router-dom";
import ProfileContext from "../context/notes/profile/ProfileContext";

const Navbar = () => {
  const {userDetails} = useContext(ProfileContext)
  const navigate = useNavigate()
 const handleLogout=()=>{
  localStorage.removeItem('token')
  navigate('/login')
 }

  return (
    <>
      <div className="navbar bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-black rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
          <a className=" text-xl font-creepster mx-2">INotebook</a>
        </div>

        <div className="navbar-center hidden lg:flex font-creepster  ">
          <ul className=" menu menu-horizontal px-1 ">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
        {localStorage.getItem("token") ? (
          <div className="navbar-end flex gap-2">
          <button onClick={handleLogout} className="p-2 flex  rounded-lg bg-[#1a6e84] hover:scale-105 hover:bg-[#274851]">
            Logout
          </button>
          <div className="bg-[#1a6e84] rounded-full w-10 p-2 py-2 flex justify-center">
          <Link to='/profile' className="font-bold">
            {userDetails? userDetails.name.charAt(0).toUpperCase(): "?"}
           </Link>
        </div>
          </div>
        ) : (
          <div className="navbar-end flex gap-2">
            <Link
              to="/login"
              className="p-2 rounded-lg bg-[#1a6e84] hover:scale-105 hover:bg-[#274851]"
            >
              LogIn
            </Link>
            <Link
              to="/signup"
              className="p-2 rounded-lg bg-[#1a6e84] hover:scale-105 hover:bg-[#274851]"
            >
              SignUp
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;

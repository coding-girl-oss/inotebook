import React, { useState } from "react";
import { toast } from 'react-toastify';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const host = 'http://localhost:5000';
  const navigate = useNavigate();
  const [form, setform] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `${host}/api/auth/createuser`;
    const headers = {
      "Content-Type": "application/json",
    };

    try {
      const response = await axios.post(url, form, { headers });
      localStorage.setItem("token", response.data.authtoken); 
      navigate("/login");
      toast.success("Account created successfully!");
    } catch (error) {
      toast.error("Error creating account. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="h-[80vh] flex justify-center items-center text-white">
      <div className="h-[400px] w-[350px] bg-black border-spacing-1 rounded-lg shadow-2xl p-5">
        <h1 className="text-[#aeccf2] font-creepster text-5xl text-center my-4">
          Sign Up
        </h1>
        <form onSubmit={handleSubmit}> 
          <div className="flex flex-col gap-4 my-4">
            <label className="input input-bordered flex items-center gap-2 bg-[#1a6e84] shadow-lg border-[2px] outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input onChange={handleChange} type="text" name="name" id="name" value={form.name} className="grow" placeholder="Name" />
            </label>
            <label className="input input-bordered flex items-center gap-2 bg-[#1a6e84] shadow-lg border-[2px] outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input onChange={handleChange} type="email" name="email" id="email" value={form.email} className="input w-full" placeholder="Email" aria-label="Email" />
            </label>
            <label className="input input-bordered flex items-center gap-2 bg-[#1a6e84] shadow-lg border-[2px] outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
                <path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" />
              </svg>
              <input onChange={handleChange} type="password" name="password" id="password" value={form.password} className="input w-full" placeholder="Password" aria-label="Password" />
            </label>
          </div>

          <div className="flex justify-center mb-3">
            <button className="w-[320px] py-3 rounded-md bg-[#1a6e84] hover:bg-[#2f5560] transform font-bold hover:scale-105 hover:shadow-xl">
              Sign Up
            </button>
          </div>

          <div className="flex justify-center text-white gap-1 text-sm">
            <p>Already have an account?</p>
            <Link className="underline" to="/login">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;


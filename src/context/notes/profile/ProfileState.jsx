import ProfileContext from "./ProfileContext";
import { useState,useEffect } from "react";
import axios from "axios";
const ProfileState = (props)=>{
    const host = 'http://localhost:5000';
    const [userDetails, setUserDetails] = useState("");

    const fetchDetails = async () => {
        const url = `${host}/api/auth/getuser`;
        const headers = {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token'), 
        };
    
        if (localStorage.getItem('token')) {
          try {
            const response = await axios.post(url, {}, { headers });
            setUserDetails(response.data); 
          } catch (error) {
            console.error("Error:", error);
          }
        }
      };

      
  useEffect(() => {
    fetchDetails(); 
  }, []);

    return (
        <ProfileContext.Provider value={{userDetails}} >
          {props.children}
        </ProfileContext.Provider>
      );
}

export default ProfileState;
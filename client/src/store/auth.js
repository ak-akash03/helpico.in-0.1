import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const AuthContext = createContext();
// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("")
  const [services, setServices] = useState("")
  const AuthorizationToken = `Bearer ${token}`
  //function to stored the token in local storage
  const storeTokenInLS  = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };

  //   this is the get the value in either true or false in the original state of token
  let isLoggedIn = !!token;
  
  const LogoutUser = () => {
    setToken("");
    toast("Logout Successfully : ")
    return localStorage.removeItem("token");
  };



  // to get thhe user datta 

  const userAuthentication = async() => {
    try {
      const responce = await fetch("http://localhost:5000/api/auth/user",{
        method: "GET",
        headers: {
          Authorization: AuthorizationToken,
        }
      })

      if(responce.ok){
        const data = await responce.json();
        // console.log(data);
        setUser(data.userData)
      }




    } catch (error) {
      console.error("error fetching user data:");
    }
  }



  const getServices = async () =>{
    try {
      const responce = await fetch("http://localhost:5000/api/data/worker",{
        method:"GET",
      })


      if(responce.ok){
        const data = await responce.json();
        // console.log(data.msg);
        setServices(data.msg)
      }

    } catch (error) {
      console.log("Eroor From : Service Page");
    }
  }

  useEffect(()=>{
    userAuthentication();
    getServices();
  }, [])


  return (
    <AuthContext.Provider value={{ isLoggedIn,services, storeTokenInLS,AuthorizationToken, LogoutUser , user}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
};
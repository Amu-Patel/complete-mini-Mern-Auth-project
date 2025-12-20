import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

  axios.defaults.withCredentials = true;

  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [userData, setUserData] = useState(null);

  const getAuthState = async () => {
    try {
      const { data } = await axios.get(
        backendUrl + "/api/auth/is-auth",
        { withCredentials: true }
      );

      if (data.success) {
        setIsLoggedin(true);
        getUserData();
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const getUserData = async () => {
    try {
      const res = await axios.get(
        `${backendUrl}/api/user/data`,
        { withCredentials: true }
      );

      if (res.data.success) {
        setUserData(res.data.userData);
      }
    } catch {
      setUserData(null);
    }
  };

  useEffect(() => {
    getAuthState();
  }, []);

  return (
    <AppContext.Provider
      value={{
        backendUrl,
        isLoggedin,
        userData,
        getUserData,
        setIsLoggedin,
        setUserData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

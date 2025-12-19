import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [isLoggedin, setIsLoggedin] = useState(false);
  const [userData, setUserData] = useState(null);

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

  const getAuthState = async () => {
    try {
      const res = await axios.get(
        `${backendUrl}/api/auth/is-auth`,
        { withCredentials: true }
      );

      if (res.data.success) {
        setIsLoggedin(true);
        getUserData();
      } else {
        setIsLoggedin(false);
      }
    } catch {
      setIsLoggedin(false);
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

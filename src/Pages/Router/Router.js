import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Homepage from "../Homepage/Homepage";
import { Profile } from "../Profile/Profile";
import { ReqUserPostCard } from "../../Components/Profile/ReqUserPostCard";
import { Provider } from "react-redux";
import store from "../../Components/Store/Store";

import Signin from "../Auth/Signin";
import Signup from "../Auth/Signup";

const Router = () => {
  const isLoggedIn = localStorage.getItem("token") !== null;
  const location = useLocation();
  return (
    <div>
      {location.pathname !== "/login" && location.pathname !== "/signup" ? (
        <div className="flex">
          <div className=" w-[25%] border-e">
            <Sidebar></Sidebar>
          </div>
          <Provider store={store}>
            <Routes>
              <Route
                path="/Home"
                element={isLoggedIn ? <Homepage /> : <Navigate to="/login" />}
              />
              <Route
                path="/Profile"
                element={isLoggedIn ? <Profile /> : <Navigate to="/login" />}
              />
            </Routes>
          </Provider>
        </div>
      ) : (
        <div>
          <Routes>
            <Route path="/signup" element={<Signup></Signup>} />
            <Route path="/login" element={<Signin></Signin>} />
          </Routes>
        </div>
      )}
    </div>
  );
};

export default Router;

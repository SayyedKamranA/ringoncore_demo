import React, { useEffect, useState } from "react";
import { Routes as Switch, Route, BrowserRouter } from "react-router-dom";
import Router from "./route";
import Home from "../components/home/homepage";
import PrivateRoute from "./PrivateRoute";
import Login from "../components/login/Login";
function All_Route() {
  const [user, setUser] = useState("");
  useEffect(() => {
    const user = localStorage.getItem("user");
    setUser(user);
  }, []);

  return (
    <>
      <BrowserRouter>
        <Switch>
          {/* {user === "" || user === null ? ( */}
          <>
            <Route path={Router.HOME} element={<Home />} />
            <Route exact path={Router.LOGIN} element={<Login />} />
          </>
          {/* ) : (  */}
          <>
            <Route exact path={Router.MAIN} element={<PrivateRoute />} />
          </>
          {/* )}
           */}
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default All_Route;

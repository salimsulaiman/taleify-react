import React from "react";
import NavApp from "./NavApp";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <NavApp />
      <Outlet />
    </>
  );
}

export default Layout;

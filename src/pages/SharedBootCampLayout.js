import React from "react";
import { Outlet } from "react-router-dom";
export default function SharedBootCampLayout() {
  return (
    <div>
      {/* <h2>Boot Camps</h2> */}
      <Outlet />
    </div>
  );
}

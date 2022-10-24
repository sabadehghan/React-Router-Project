import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import BootCamps from "./pages/BootCamps";
import Contact from "./pages/Contact";
import SharedLayout from "./pages/SharedLayout";
import SharedBootCampLayout from "./pages/SharedBootCampLayout";
import SingleBootCamp from "./pages/SingleBootCamp";
function App() {
  const [user, setUser] = useState({});

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route
            path="/contactUs"
            element={<ContactUs setUser={setUser} user={user} />}
          />
          <Route path="/bootCamps" element={<SharedBootCampLayout />}>
            <Route index element={<BootCamps />} />
            <Route path=":bootCampId" element={<SingleBootCamp />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

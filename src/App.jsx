import React, { useEffect, useState } from "react";
// import Header from "./components/header/Header";
// import Nav from "./components/nav/Nav";
// import About from "./components/about/About";
// import Contact from "./components/contact/Contact";
// import Experience from "./components/experience/Experience";
// import Footer from "./components/footer/Footer";
// import Portfolio from "./components/portfolio/Portfolio";
// import Services from "./components/services/Services";
// import Testimonials from "./components/testimonials/Testimonials";
// import Aos from "aos";
// import Welcome from "./components/welcome/Welcome";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Home";
import Privacy from "./components/document/Privacy";
import Terms from "./components/document/Terms";
import Shipping from "./components/document/Shipping";
import Cancelation from "./components/document/Cancelation";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />

          <Route path="/privacy-policy" Component={Privacy} />
          <Route path="/term-condition" Component={Terms} />
          <Route path="/refund" Component={Cancelation} />
          <Route path="/shipping" Component={Shipping} />
          <Route path="/contact" Component={Contact} />
          
        </Routes>
        {/* Toast container must be mounted once */}
      <ToastContainer 
        position="top-right" 
        autoClose={3000} 
        hideProgressBar={false} 
        newestOnTop={false} 
        closeOnClick 
        rtl={false} 
        pauseOnFocusLoss 
        draggable 
        pauseOnHover 
        theme="dark"
      />

      </BrowserRouter>
    </>
  );
};

export default App;

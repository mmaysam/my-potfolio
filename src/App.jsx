import React from "react";
import "./index.css";
import Header from "./component/header/Header.jsx";
import Nav from "./component/nav/Nav.jsx";
import About from "./component/about/About.jsx";
import Experience from "./component/experience/Experience.jsx";
import Services from "./component/services/Services.jsx";
import Portfolio from "./component/portfolio/Portfolio.jsx";
import Testmonials from "./component/testmonials/Testmonials.jsx";
import Contact from "./component/contact/Contact.jsx";
import Footer from "./component/footer/Footer.jsx";
const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testmonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;

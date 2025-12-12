// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Skills from "./Components/Skills/Skills";
import Project from "./Components/Project/Project";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";
import Card from "./Components/Card/Card";
import Govdocument from "./Components/Govdocument/Govdocument";
import Castcertificate from "./Components/Castcertificate/Castcertificate";
import Nclcertificate from "./Components/Nclcertificate/Nclcertificate";
import Income from "./Components/Income";
import Validity from "./Components/Validity";
import Pancard from "./Components/Pancard";
import Domicile from "./Components/Domicile";
import Gumastha from "./Components/Gumastha";
import Onlineforms from "./Components/Onlineforms";
import Insurence from "./Components/Insurence/Insurence";
import Security from "./Components/Security/Security";
import Loans from "./Components/Loans/Loans";
import Rtoservices from "./Components/Rtoservices";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import Terms from "./Components/Terms";
import Aadhar from "./Components/Aadhar";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
        <Route path="/terms" element={<Terms/>}/>
        <Route path="/" element={<Card/>}/>
        <Route path="/govdocument" element={<Govdocument/>}/>
         <Route path="/" element={<Govdocument />} />
        <Route path="/castcertificate" element={<Castcertificate />} />
        <Route path="/nclcertificate" element={<Nclcertificate/>}/>
       <Route path="/income" element={<Income/>}/>
       <Route path="/validity" element={<Validity/>}/>
       <Route path="/pancard" element={<Pancard/>}/>
       <Route path="/domicile" element={<Domicile/>}/>
       <Route path="/gumastha" element={<Gumastha/>}/>
       <Route path="/aadhar" element={<Aadhar/>}></Route>
       <Route path="/onlineforms" element={<Onlineforms/>}/>
       <Route path="/insurence" element={<Insurence/>}/>
       <Route path="/security" element={<Security/>}/>
       <Route path="/loans" element={<Loans/>}/>
      <Route path="/rtoservices" element={<Rtoservices/>}/>
      
      </Routes>
      <Card/>
      {/* <Govdocument/> */}
      <Footer />
    </>
  );
}
export default App;

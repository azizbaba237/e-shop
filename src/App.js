import React from "react";
//import react router dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetils from "./pages/ProductDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/login/Login";
import Register from "./pages/login/Register";
// import components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import NewsLetter from "./components/NewsLetter";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetils />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Sidebar />
        <NewsLetter />
        <Footer />
      </Router>
    </div>
  );
};

export default App;

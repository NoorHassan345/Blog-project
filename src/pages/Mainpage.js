import "../App.css";
import React from "react";
import Blog from "../components/blogs/blogmain/Blog";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

function Mainpage() {
  return (
    <>
      <Header />
      <Blog />
      <Footer />
    </>
  );
}

export default Mainpage;

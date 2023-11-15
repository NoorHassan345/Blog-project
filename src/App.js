import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";  
import "bootstrap/dist/css/bootstrap.min.css";
import Mainpage from "./pages/Mainpage";
import Singleblog from "./pages/Singleblog";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {

  return (
    <>
      <Router>  
      <Header />
        <Routes>
          <Route path="/" Component={Mainpage} />
          <Route path="/a" Component={Singleblog}  />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

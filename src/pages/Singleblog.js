import React from "react";
import Header from "../components/header/Header";
import Blog from "../components/blogs/blogmain/Blog";
import Footer from "../components/footer/Footer";
import "../components/selectedBlog/Singleblog.scss";
import "../common.scss";
import { useSelector } from "react-redux";
import Selectedblog from "../components/selectedBlog/Selectedblog";

function Singleblog() {
  const selectedBlog = useSelector((state) => state.blog.selectedBlog);
  console.log(selectedBlog);

  return (
    <>
      <Header />
      <div className="single-Blog-Main">
        <div className="Single-Blog">
          <div className="max-width">
            <Blog />
          </div>
          <div className="w1">
            {selectedBlog && <Selectedblog selectedBlog={selectedBlog} />}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Singleblog;

import React, { useState, useEffect } from "react";
import "../../../common.scss";
import "../blogList/Bloglist.scss";
import ArrowIcon from "../../../assets/images/arrow-up-right.svg";
import { useDispatch } from "react-redux";
import { blogClick } from "../blogList/Blogslice";

import { Link } from "react-router-dom";

function Bloglist({ item }) {
  const dispatch = useDispatch();
  const date = new Date(item.publishedAt);
  const year = date.getFullYear();
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.getDate().toString().padStart(2, "0");
  const formatedDate = `${day} ${month} ${year}`;

  const [state, setState] = useState(false);

  useEffect(() => {
    const currentURL = window.location.href;
    if (currentURL === "http://localhost:3000/a") {
      setState(true);
    }
  }, []);

  const toggleclass = state ? "blog-post-card-low-secreen" : "Blog-post-card";
  const handleBlogsClick = () => {
    dispatch(blogClick(item));
  };
  return (
    <>
   
      <div  className={`box ${toggleclass} `}>
        <Link className="Link" to="/a">
          <div onClick={handleBlogsClick}>
            <img src={item.urlToImage} alt="" className="img " />{" "}
          </div>
          <div>
            <p className="author">
              {" "}
              {item.author} • {formatedDate}{" "}
            </p>
            <div className="heading-and-icon">
              <h3 className="heading"> {item.title} </h3>{" "}
              <img src={ArrowIcon} alt="a" className="icon" />{" "}
            </div>
            <p className=" description"> {item.description} </p>
          </div>
        </Link>
      </div>
      
    </>
  );
}
export default Bloglist;

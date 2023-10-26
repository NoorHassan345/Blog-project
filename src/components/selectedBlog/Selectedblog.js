import React from "react";
import "../selectedBlog/Singleblog.scss";

function Selectedblog({ selectedBlog }) {
  return (
    <div>
      {" "}
      <p className="author"> {selectedBlog.author} </p>
      <h1 className=" heading-SingleBlog "> {selectedBlog.title} </h1>
      <img className="image" src={selectedBlog.urlToImage} alt="img" />
      <div className="description-SingleBlog">
        <p> {selectedBlog.description} </p>
        <p> {selectedBlog.content} </p>
        <a href={selectedBlog.url}> click for more details </a>
      </div>
    </div>
  );
}
export default Selectedblog;

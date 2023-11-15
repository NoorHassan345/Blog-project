import React  from "react";

import "../components/selectedBlog/Singleblog.scss";
import "../common.scss";
import { useSelector } from "react-redux";
import Selectedblog from "../components/selectedBlog/Selectedblog";
import { useGetSingleQuery } from "../features/api/apiSlice";

import Bloglist from "../components/blogs/blogList/Bloglist";

function Singleblog() {
  const pageSize = 10
  const { data: todo } = useGetSingleQuery({pageSize} ); 
  const selectedBlog = useSelector((state) => state.reducer.selectedBlog);
 
 
if (todo) {
 const array = todo.articles

  return (
    <>
    
      <div className="single-Blog-Main">  
        <div className="Single-Blog">
          <div className="max-width">
          {array.map((item, index) => (
                  <Bloglist key={index} item={item} selectedBlog={selectedBlog} />
                ))}
          </div>
          <div className="w1">
            {selectedBlog &&  <Selectedblog selectedBlog={selectedBlog} />}
          </div>
        </div>
      </div>
      
    </>
  );
}
}
export default Singleblog;

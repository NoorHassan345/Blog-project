import React from "react";
import { useGetBlogsQuery } from "../../../features/api/apiSlice";
import Bloglist from "../blogList/Bloglist";
import "../blogmain/Blog.scss";
import "../../../common.scss";
import { useState } from "react";
import Paginantion from "../pagination/Pagination.";

function Blog() {
  
  const [Page, setPage] = useState(1); 
  const pageSize = 6;

  const { data: todo, error, isLoading } = useGetBlogsQuery({ Page, pageSize });
  

   

  if (isLoading) {
    return (
      <>
        <h1> is Loading </h1>
      </>
    );
  }
  if (error) {
    console.log(error);
  }
  const total = Math.ceil(todo.totalResults / pageSize);
  const arrayOfArticles = todo.articles;

  return (
    <>
      <div className="Section">
        <div className="container">
          <div className=" Blog-Main">
            <div className="Heading-and-content ">
              <p className="heading"> All blog posts </p>

              <div className=" Row">
                {arrayOfArticles.map((item, index) => (
                  <Bloglist key={index} item={item}  />
                ))}
              </div>
            </div>
          </div>
        </div>
       
        <div className="container">
         <Paginantion Page = {Page} total={total} setPage={setPage} pageSize={pageSize} />  
        </div>
      </div>
    </>
  );
}

export default Blog;

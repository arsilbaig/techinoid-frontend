import React, { useState, useEffect } from "react";
// blog component
import Breadcrumb from "../../common/Breadcrumb";
import BlogCart from "./BlogCart";
import SidebarSearch from "./SidebarSearch";
import ServiceList from "./ServiceList";
import NewsPost from "./NewsPost";
import PopularTag from "./PopularTag";
import BannerWiget from "./BannerWiget";
import Pagination from "../../common/Pagination";
import LetsTalkArea from "../../common/LetsTalkArea";
import axios from 'axios'

function BlogPage() {

  const [blogs ,setBlogs] = useState([]);

  useEffect(() => {
    getBlogsAPI();
  }, [])
  
    const getBlogsAPI = async () => {
     const data = await axios.get('http://localhost:3001/blogs')
     setBlogs(data.data)

      // .then(response =>{
      //   setBlogs(response.blogs)
      //   console.warn(response, "data get successfully ")
      // })
      // .catch(error => {
      //     this.setState({ errorMessage: error.message });
      //     console.error('There was an error!', error);
      // });

     

    }
    console.warn(blogs,"blogs")
       
  return (
    <>
      <Breadcrumb pageName="Blog" />

      <div className="blog-news sec-mar">
        <div className="container">
          <div className="blog-wrapper">
            <div className="row">
              <div className="col-md-6 col-lg-4 col-xl-4">
                <SidebarSearch />
                <ServiceList />
                <NewsPost />
                <PopularTag />
                <BannerWiget />
              </div>

              <div className="col-md-6 col-lg-8 col-xl-8">
                <div className="row g-4">
                  <BlogCart
                    blogsData={blogs}
                  />
       
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LetsTalkArea />
    </>
  );
}

export default BlogPage;

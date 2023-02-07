import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Data from "../data/Data";
import { SRLWrapper } from "simple-react-lightbox";
import axios from "axios";
import LoadingSpinner from "./LoadingSpinner";

function CartFilter({ active, props }) {
  const [items, setItems] = useState(Data);
  const [isLoading, setIsLoading] = useState(false);



  const filterItem = (catagoryItem) => {
    const updateItems = Data.filter((curentElemet) => {
      return curentElemet.category === catagoryItem;
    });
    // setItems(updateItems);
  };
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [projects, setProjects] = useState([]);

  // const handleFetch = () => {
  //   setIsLoading(true);
  //   fetch("https://reqres.in/api/users?page=0")
  //     .then((respose) => respose.json())
  //     .then((respose) => {
  //        setUsers(respose.data)
  //        setIsLoading(false)
  //        // Optional code to simulate delay
  //        // setTimeout(() => {
  //        //   setUsers(respose.data);
  //        //   setIsLoading(false);
  //        // }, 3000);
  //     })
  //     .catch(() => {
  //        setErrorMessage("Unable to fetch user list");
  //        setIsLoading(false);
  //     });
  // };

  const getAllProjects = async () => {
    setIsLoading(true);
    await axios.get('http://localhost:3001/portfolios').then((respose) => {    
         setTimeout(() => {
          setProjects(respose.data)
          setItems(respose.data.portfolios)
           setIsLoading(false);
         }, 2000);
      })
  }

  useEffect(() => {

    getAllProjects()
 

  }, [])

  return (
    <>
      {/* <div className="row">
        <div className="col-12">
          <div className="project-tab">
            <ul className="project-filter-tab">
              <li
                className={`${active ? "" : "active"}`}
                onClick={() => setItems(Data)}
              >
                All
              </li>
              <li onClick={() => filterItem("UI/UX")}>UI/UX</li>
              <li onClick={() => filterItem("Web Design")}>Web Design</li>
              <li onClick={() => filterItem("Developing")}>Developing</li>
              <li onClick={() => filterItem("Graphic Design")}>
                Graphic Design
              </li>
            </ul>
          </div>
        </div>
      </div> */}
      {isLoading ? <LoadingSpinner />


        :

        <div className="row g-4 project-items-wrapper">
          {projects.portfolios?.map((element) =>

            <div
              key={element.id}
              className="col-md-6 col-lg-4 col-xl-4 project-single-item uiux"
            >
              <div className="single-portfolio">
                <SRLWrapper>
                  <div className="portfolio-data">
                    <a href={element.title}>
                      <img src={element.image} alt="images" />
                    </a>
                  </div>
                  <div className="portfolio-inner">
                    <span>{element.title}</span>
                    <h4>{new Date(element.createdAt).toDateString()}</h4>
                    <div className="portfolio-hover">
                      <Link
                        onClick={scrollTop}
                        to={`${process.env.PUBLIC_URL}/project-details/${element.id}`}
                        className="case-btn"
                      >
                        Case Study
                      </Link>

                      <a data-lightbox="image1" href={element.heading}>
                        <div className="isotop"></div>
                      </a>

                      <a data-lightbox="image1" href={element.image}>
                        <img
                          alt="images"
                          src={
                            process.env.PUBLIC_URL +
                            "/images/portfolio/search-2.svg"
                          }
                        />
                      </a>
                    </div>
                  </div>
                </SRLWrapper>
              </div>
            </div>
          )
          }
        </div>
      }
    </>
  );
}

export default CartFilter;

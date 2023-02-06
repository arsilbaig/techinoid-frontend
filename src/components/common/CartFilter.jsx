import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Data from "../data/Data";
import { SRLWrapper } from "simple-react-lightbox";
import axios from "axios";

function CartFilter({ active, props }) {
  const [items, setItems] = useState(Data);
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

    const getAllProjects = async () => {
      const data = await axios.get('http://localhost:3001/portfolios')
      setProjects(data.data)
      setItems(data.data.portfolios)
    }

    useEffect(() => {
    
      getAllProjects()
       
    }, [])

  console.log(projects)
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
    </>
  );
}

export default CartFilter;

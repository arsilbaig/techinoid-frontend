import React from "react";
import { Link } from "react-router-dom";
import "swiper/css/autoplay";
// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
SwiperCore.use([Navigation, Pagination, EffectFade, Autoplay]);
// install Swiper modules
function HeroArea() {
  const HeroSlider = {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 0,
    loop: "true",
    clickable: true,
    autoplay: true,
    effect: "fade",
    centeredSlides: true,
    roundLengths: true,
    fadeEffect: {
      crossFade: true,
    },
  };
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  
  const reloadFb =()=> {
    window.open("https://www.facebook.com/techinoidpk?mibextid=LQQJ4d")
  }

  const reloadInsta = () =>{
    window.open("https://instagram.com/techinoid?igshid=Zjc2ZTc4Nzk=")
  }

  const reloadLinkdln = () =>{
    window.open("https://www.linkedin.com/company/techinoid/")
  }

  return (
    <>
      <section className="hero-area">
        <div className="swiper hero-slider">
          <Swiper
            pagination={{
              type: "bullets",
              clickable: true,
            }}
            {...HeroSlider}
            loop={true}
            className="swiper-wrapper"
          >
            <SwiperSlide className="swiper-slide">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12">
                    <div className="hero-content-wrapper">
                      <div className="hero-content-wrap">
                        <div className="hero-content-img">
                          <img
                          style={{height:450}}
                            src={
                              process.env.PUBLIC_URL +
                              "/images/crypto.png"
                            }
                            alt="images"
                          />
                        </div>
                        <div className="hero-content">
                          <h2>Techinoid</h2>
                          <h1>
                          Cryptocurrency  
                          </h1>
                          <p>
                          Cryptocurrency is a digital payment system that doesn't rely on banks to verify transactions. It’s a peer-to-peer system that can enable anyone anywhere to send and receive payments. Instead of being physical money carried around and exchanged in the real world.
                          </p>
                          {/* <Link
                            onClick={scrollTop}
                            to={`${process.env.PUBLIC_URL}/about`}
                            className="about-btn"
                          >
                            About us
                          </Link>
                          <Link
                            onClick={scrollTop}
                            to={`${process.env.PUBLIC_URL}/project-details`}
                            className="work-btn"
                          >
                            How we work
                          </Link> */}
                          <div className="slider-num">
                            <span>01</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12">
                    <div className="hero-content-wrapper">
                      <div className="hero-content-wrap">
                        <div className="hero-content-img">
                          <img
                              style={{height:450}}
                            src={
                              process.env.PUBLIC_URL +
                              "/images/heath.jpg"
                            }
                            alt="images"
                          />
                        </div>
                        <div className="hero-content">
                          <h2>Techinoid</h2>
                          <h1>
                          Health care 
                          </h1>
                          <p>
                          Create a system for storing, managing and sharing patient health information securely between
                           healthcare providers.Develop software that provides physicians and other 
                           healthcare providers with information and guidance to assist in making informed medical decisions
                          </p>
                          {/* <Link
                            onClick={scrollTop}
                            to={`${process.env.PUBLIC_URL}/about`}
                            className="about-btn"
                          >
                            About us
                          </Link>
                          <Link
                            onClick={scrollTop}
                            to={`${process.env.PUBLIC_URL}/project-details`}
                            className="work-btn"
                          >
                            How we work
                          </Link> */}
                          <div className="slider-num">
                            <span>02</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12">
                    <div className="hero-content-wrapper">
                      <div className="hero-content-wrap">
                        <div className="hero-content-img">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/images/fianance.jpg"
                            }
                            alt="images"
                          />
                        </div>
                        <div className="hero-content">
                          <h2>Techinoid</h2>
                          <h1>
                            Best solution for your <span>Finance</span>
                          </h1>
                          <p>
                          Create a system to help financial institutions quantify and manage
                           risks associated with various investment products. Explore the use of 
                           blockchain technology in areas such as payments, digital assets,
                            supply chain finance, and trade finance.
                          </p>
                       
                          <div className="slider-num">
                            <span>03</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="swiper-pagination" />
        </div>
        <div className="social-media">
          <ul className="social-list">
            <li>
              <a rel="noopener noreferrer" onClick={reloadFb}>
                Facebook
              </a>
            </li>
            <li>
              <a rel="noopener noreferrer"  onClick={reloadInsta}>
                instagram
              </a>
            </li>
            <li>
              <a rel="noopener noreferrer" onClick={reloadLinkdln}>
                Linked in
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default HeroArea;

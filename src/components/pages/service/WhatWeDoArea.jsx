import React from "react";
import { Link } from "react-router-dom";

function WhatWeDoArea() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <section className="service-area sec-pad">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-12 col-lg-4 col-xl-4">
              <div className="title">
                <span>what we do</span>
                <h2>we work performed for client happy.</h2>
                <div className="cmn-btn">
                  <Link
                    onClick={scrollTop}
                    to={`${process.env.PUBLIC_URL}/service`}
                  >
                    view all services
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-8 col-xl-8">
              <div className="row g-4">
                <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                  <div className="single-service">
                    <span className="count">01</span>
                    <div className="service-icon">
                      <i>
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/images/icons/service-icon-1.png"
                          }
                          alt="images"
                        />
                      </i>
                    </div>
                    <div className="service-content">
                      <h4>Web Development</h4>
                      <p>
                        Our web app development services offer modern and responsive solutions for cross-platform and cross browser apps.
                      </p>
                      <Link
                        onClick={scrollTop}
                        to={`${process.env.PUBLIC_URL}/service-details`}
                      >
                        read more
                        <i>
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/images/icons/arrow-circle.png"
                            }
                            alt="images"
                          />
                        </i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                  <div className="single-service">
                    <span className="count">02</span>
                    <div className="service-icon">
                      <i>
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/images/icons/service-icon-2.png"
                          }
                          alt="images"
                        />
                      </i>
                    </div>
                    <div className="service-content">
                      <h4>ECOMMERECE & SHOPPING CART</h4>
                      <p>
                        The Online shopping trends are rising in post covid times so our eCommerce services
                      </p>
                      <Link
                        onClick={scrollTop}
                        to={`${process.env.PUBLIC_URL}/ecommerce-details`}
                      >
                        read more
                        <i>
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/images/icons/arrow-circle.png"
                            }
                            alt="images"
                          />
                        </i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                  <div className="single-service">
                    <span className="count">03</span>
                    <div className="service-icon">
                      <i>
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/images/icons/service-icon-3.png"
                          }
                          alt="images"
                        />
                      </i>
                    </div>
                    <div className="service-content">
                      <h4>CLOUD COMPUTING</h4>
                      <p>
                        We offer a complete range of cloud-based automated migration solutions for safely migrating your enterprise.
                      </p>
                      <Link
                        onClick={scrollTop}
                        to={`${process.env.PUBLIC_URL}/cloud-computing-details`}
                      >
                        read more
                        <i>
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/images/icons/arrow-circle.png"
                            }
                            alt="images"
                          />
                        </i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                  <div className="single-service">
                    <span className="count">04</span>
                    <div className="service-icon">
                      <i>
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/images/icons/service-icon-4.png"
                          }
                          alt="images"
                        />
                      </i>
                    </div>
                    <div className="service-content">
                      <h4>MOBILE
                        APP
                        DEVELOPMENT</h4>
                      <p>
                      We at Visnext offer advanced and feature-rich mobile development.
                      </p>
                      <Link
                        onClick={scrollTop}
                        to={`${process.env.PUBLIC_URL}/mobile-details`}
                      >
                        read more
                        <i>
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/images/icons/arrow-circle.png"
                            }
                            alt="images"
                          />
                        </i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-4">
              <div className="single-service">
                <span className="count">05</span>
                <div className="service-icon">
                  <i>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/images/icons/service-icon-5.png"
                      }
                      alt="images"
                    />
                  </i>
                </div>
                <div className="service-content">
                  <h4>APP PROTOTYPE & STRATEGY</h4>
                  <p>
                  We strive to create high-fidelity prototypes that enable our clients.
                  </p>
                  <Link
                    onClick={scrollTop}
                    to={`${process.env.PUBLIC_URL}/prototype-details`}
                  >
                    read more
                    <i>
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/images/icons/arrow-circle.png"
                        }
                        alt="images"
                      />
                    </i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-4">
              <div className="single-service">
                <span className="count">06</span>
                <div className="service-icon">
                  <i>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/images/icons/service-icon-6.png"
                      }
                      alt="images"
                    />
                  </i>
                </div>
                <div className="service-content">
                  <h4>BLOCKCHAIN TECHNOLOGY</h4>
                  <p>
                  We work with startups and enterprises to integrate security infrastructures with data safety.
                  </p>
                  <Link
                    onClick={scrollTop}
                    to={`${process.env.PUBLIC_URL}/blockchain-details`}
                  >
                    read more
                    <i>
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/images/icons/arrow-circle.png"
                        }
                        alt="images"
                      />
                    </i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-4">
              <div className="single-service">
                <span className="count">07</span>
                <div className="service-icon">
                  <i>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/images/icons/service-icon-7.png"
                      }
                      alt="images"
                    />
                  </i>
                </div>
                <div className="service-content">
                  <h4>INTERNET OF THINGS</h4>
                  <p>
                  Our IoT services help you reinvent your business and achieve your business goals.
                  </p>
                  <Link
                    onClick={scrollTop}
                    to={`${process.env.PUBLIC_URL}/IOT-details`}
                  >
                    read more
                    <i>
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/images/icons/arrow-circle.png"
                        }
                        alt="images"
                      />
                    </i>
                  </Link>
                </div>
                
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-4">
              <div className="single-service">
                <span className="count">08</span>
                <div className="service-icon">
                  <i>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/images/icons/service-icon-7.png"
                      }
                      alt="images"
                  />
                  </i>
                </div>
                <div className="service-content">
                  <h4>ARTIFICIAL INTELLIGENCE</h4>
                  <p>
                  our clients are offered Ai services that combine cloud computing.
                  </p>
                  <Link
                    onClick={scrollTop}
                    to={`${process.env.PUBLIC_URL}/AI-details`}
                  >
                    read more
                    <i>
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/images/icons/arrow-circle.png"
                        }
                        alt="images"
                      />
                    </i>
                  </Link>
                </div>
                
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-4">
              <div className="single-service">
                <span className="count">09</span>
                <div className="service-icon">
                  <i>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/images/icons/service-icon-7.png"
                      }
                      alt="images"
                    />
                  </i>
                </div>
                <div className="service-content">
                  <h4>CYBER SECURITY</h4>
                  <p>
                  We offer our clients testing and monitoring to improve the resilience.
                  </p>
                  <Link
                    onClick={scrollTop}
                    to={`${process.env.PUBLIC_URL}/cyber-secuity-details`}
                  >
                    read more
                    <i>
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/images/icons/arrow-circle.png"
                        }
                        alt="images"
                      />
                    </i>
                  </Link>
                </div>
                
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-4">
              <div className="single-service">
                <span className="count">10</span>
                <div className="service-icon">
                  <i>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/images/icons/service-icon-7.png"
                      }
                      alt="images"
                    />
                  </i>
                </div>
                <div className="service-content">
                  <h4>OFFSHORE STAFFING</h4>
                  <p>
                  You can consult our developers to stat on your groundbreaking project.
                  </p>
                  <Link
                    onClick={scrollTop}
                    to={`${process.env.PUBLIC_URL}/offshore-details`}
                  >
                    read more
                    <i>
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/images/icons/arrow-circle.png"
                        }
                        alt="images"
                      />
                    </i>
                  </Link>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhatWeDoArea;

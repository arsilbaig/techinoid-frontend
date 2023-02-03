import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
function About2Area() {
  const Singlepercentage = 95;
  const singleXmPercentage = 85;
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <section className="about-area sec-mar">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-xl-6">
              <div className="about-left dark">
                <div className="title">
                  <span>About us</span>
                  <h2 className="mb-15">Direction with our company.</h2>
                </div>
                <p>
                Focus on providing quality software products 
                or services that meet the needs and wants of your
                 target customers.Build and maintain a strong, professional,
                  and efficient team of software developers, 
                  designers, and support staff.
                </p>
                <div className="our-mission">
                  <div className="msn-icon">
                    <i>
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/images/icons/mission-icon.png"
                        }
                        alt="images"
                      />
                    </i>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <div className="msn-content">
                      <h5>Our Mission</h5>
                      <p>
                      create innovative software solutions that simplify and improve the lives of our customers.
                      </p>
                    </div>
                    <div className="msn-content" style={{ paddingTop: 20 }}>
                      <h5>Our Vision</h5>
                      <p>
                      create innovative software solutions that simplify and improve the lives of our customers.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="cmn-btn">
                  <Link onClick={scrollTop} to={`${process.env.PUBLIC_URL}/about`}>About more</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-6">
              <div className="about-right">
                <div className="group-images">
                  <img
                    src={process.env.PUBLIC_URL + "/images/m1.jpg"}
                    alt="images"
                  />
                  {/* <div className="about-top">
                    <img
                      src={process.env.PUBLIC_URL + "/images/about-top.png"}
                      alt="images"
                    />
                  </div> */}
                  {/* <div className="about-skills">
                    <div className="signle-skill">
                      <CircularProgressbar
                        value={Singlepercentage}
                        text={`${Singlepercentage}%`}
                        className="progress-bar-circle"
                      />

                      <div className="skill-content">
                        <h6>web</h6>
                        <p>Clean Design</p>
                      </div>
                    </div>
                    <div className="signle-skill xsm">
                      <CircularProgressbar
                        value={singleXmPercentage}
                        text={`${singleXmPercentage}%`}
                        className="progress-bar-circle"
                      />
                      <div className="skill-content">
                        <h6>App</h6>
                        <p>Developing</p>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          {/* <div className="features-count">
            <div className="row">
              <div className="col-sm-6 col-md-3 col-lg-3 col-xl-3">
                <div className="single-count">
                  <i>
                    <img
                      src={process.env.PUBLIC_URL + "/images/icons/count-1.png"}
                      alt="images"
                    />
                  </i>
                  <div className="counter">
                    <CountUp end={250} delay={2} duration={5} /> <sup>+</sup>
                  </div>
                  <p>Project Completed</p>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 col-lg-3 col-xl-3">
                <div className="single-count">
                  <i>
                    <img
                      src={process.env.PUBLIC_URL + "/images/icons/count-2.png"}
                      alt="images"
                    />
                  </i>
                  <div className="counter">
                    <CountUp end={150} delay={1} duration={5} /> <sup>+</sup>
                  </div>
                  <p>Satisfied Clients</p>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 col-lg-3 col-xl-3">
                <div className="single-count">
                  <i>
                    <img
                      src={process.env.PUBLIC_URL + "/images/icons/count-3.png"}
                      alt="images"
                    />
                  </i>
                  <div className="counter">
                    <CountUp end={150} delay={3} duration={5} /> <sup>+</sup>
                  </div>
                  <p>Expert Teams</p>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 col-lg-3 col-xl-3">
                <div className="single-count xsm">
                  <i>
                    <img
                      src={process.env.PUBLIC_URL + "/images/icons/count-4.png"}
                      alt="images"
                    />
                  </i>
                  <div className="counter">
                    <CountUp end={100} delay={4} duration={5} /> <sup>+</sup>
                  </div>
                  <p>Win Awards</p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
}

export default About2Area;

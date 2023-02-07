import React from "react";
import { Link } from "react-router-dom";
function MobileAppDevelopmentWrapper() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <section className="service-details sec-mar">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-8 col-xl-8 or2">
              <div className="signle-service-details">
                <h3>
                  {/* <img
                                        src={
                                            process.env.PUBLIC_URL +
                                            "/images/icons/service-details-icon.svg"
                                        }
                                        alt="images"
                                    /> */}
                  Mobile App Development
                </h3>
                <p>
                  Mobile app development refers to the process of creating software applications that run on mobile devices, such as smartphones and tablets. The process involves designing, coding, testing, and deploying mobile apps to app stores or marketplaces. The goal of mobile app development is to create applications that are user-friendly, visually appealing, and provide value to users by solving a specific problem or meeting a need.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-4 or1">
              {/* <div className="sidebar-search">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  action="#"
                  method="post"
                >
                  <input
                    type="search"
                    name="search"
                    placeholder="Search Here"
                  />
                  <button type="submit">
                    <i className="bi bi-search" />
                  </button>
                </form>
              </div> */}
              {/* <div className="sidebar-widget">
                <h4>Services</h4>
                <ul className="service-list">
                  <li>
                    <Link
                      onClick={scrollTop}
                      to={`${process.env.PUBLIC_URL}/service-details`}
                    >
                      <i>
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/images/icons/dash-circle-icon.svg"
                          }
                          alt="images"
                        />
                      </i>
                      Web Design <span>(15)</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={scrollTop}
                      to={`${process.env.PUBLIC_URL}/service-details`}
                    >
                      <i>
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/images/icons/dash-circle-icon.svg"
                          }
                          alt="images"
                        />
                      </i>
                      Apps Development <span>(18)</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={scrollTop}
                      to={`${process.env.PUBLIC_URL}/service-details`}
                    >
                      <i>
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/images/icons/dash-circle-icon.svg"
                          }
                          alt="images"
                        />
                      </i>
                      Software Development <span>(21)</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={scrollTop}
                      to={`${process.env.PUBLIC_URL}/service-details`}
                    >
                      <i>
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/images/icons/dash-circle-icon.svg"
                          }
                          alt="images"
                        />
                      </i>
                      Motion Graphics <span>(25)</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={scrollTop}
                      to={`${process.env.PUBLIC_URL}/service-details`}
                    >
                      <i>
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/images/icons/dash-circle-icon.svg"
                          }
                          alt="images"
                        />
                      </i>
                      UI/UX Design <span>(29)</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={scrollTop}
                      to={`${process.env.PUBLIC_URL}/service-details`}
                    >
                      <i>
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/images/icons/dash-circle-icon.svg"
                          }
                          alt="images"
                        />
                      </i>
                      Graphic Design <span>(31)</span>
                    </Link>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
          <div className="single-service-work-process">
            <h3>How We Work in our services</h3>
            <div className="single-step">
              <div className="row">
                <div className="col-md-8 col-xl-8 or2">
                  <div className="step">
                    <div className="step-count">
                      <span>01</span>
                    </div>
                    <h4>Wireframe &amp; Design</h4>
                    <p>
                      Determine the idea and concept behind the app and validate it with market research and user feedback.

                      Requirements Gathering: Identify and document the features, functionality, and technical requirements of the app.

                      Design: Create a visually appealing and user-friendly design for the app, including the interface and user experience.

                      Prototyping: Develop a working prototype of the app to demonstrate the concept and gather feedback from users.
                    </p>
                  </div>
                </div>
                <div className="col-md-4 col-xl-4 or1">
                  <div className="step-img">
                    <img
                      src={process.env.PUBLIC_URL + "/images/step-1.png"}
                      alt="images"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="single-step">
              <div className="row">
                <div className="col-md-4 col-xl-4">
                  <div className="step-img">
                    <img
                      src={process.env.PUBLIC_URL + "/images/step-2.jpg"}
                      alt="images"
                    />
                  </div>
                </div>
                <div className="col-md-8 col-xl-8">
                  <div className="step">
                    <div className="step-count">
                      <span>02</span>
                    </div>
                    <h4>Developing</h4>
                    <p>
                      Write the code for the app, using programming languages and tools that are appropriate for the platform (e.g., iOS, Android, etc.).

                      Testing: Conduct thorough testing of the app to ensure that it functions correctly and meets the technical and quality requirements.

                      Deployment: Launch the app on the app stores (e.g., Apple App Store, Google Play Store) and make it available to users.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-step">
              <div className="row">
                <div className="col-md-8 col-xl-8 or2">
                  <div className="step">
                    <div className="step-count">
                      <span>03</span>
                    </div>
                    <h4>Checkup &amp; Launch</h4>
                    <p>
                      Maintenance and Support: Continuously monitor and maintain the app to address any bugs, security issues, and user feedback, and to add new features and updates over time..
                    </p>
                  </div>
                </div>
                <div className="col-md-4 col-xl-4 or1">
                  <div className="step-img">
                    <img
                      src={process.env.PUBLIC_URL + "/images/step-3.jpg"}
                      alt="images"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MobileAppDevelopmentWrapper;

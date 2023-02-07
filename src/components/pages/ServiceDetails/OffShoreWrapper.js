import React from "react";
import { Link } from "react-router-dom";
function OffShoreWrapper() {
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
                  Offshore Staffing
                </h3>
                <p>
                  Offshore staffing refers to the practice of hiring employees for a company located in another country, typically for the purpose of reducing labor costs. This practice is often utilized by businesses in developed countries to take advantage of lower wages and less stringent labor regulations in developing countries. The employees in the foreign country work remotely or on-site, performing tasks such as customer service, data entry, and software development. Offshore staffing can present a number of challenges, including communication difficulties and cultural differences, but can also provide benefits such as increased flexibility and access to a larger pool of skilled workers.
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
                      The first step is to assess the company's staffing needs and determine which tasks can be outsourced.

                      Finding a provider: The next step is to find a staffing provider or company that specializes in offshore staffing. The company should be reliable, offer competitive rates, and have a proven track record of delivering quality work.

                      Negotiating the contract: Once a provider has been selected, the company should negotiate the terms of the contract, including the scope of work, payment terms, and any legal or regulatory requirements.

                      Establishing communication channels: Effective communication is key to the success of offshore staffing. The company should set up clear communication channels, such as regular conference calls, email, and instant messaging, to ensure that the offshore team is able to effectively communicate with the company.
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
                      The offshore team may require training on the company's processes and systems. The company should provide the necessary training to ensure that the offshore team is able to deliver quality work.

                      Monitoring progress: Regular monitoring is necessary to ensure that the offshore team is delivering work to the required standards. The company should establish a system for monitoring the offshore team's progress and addressing any issues that arise.
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
                      Offshore staffing often involves working with people from different cultural backgrounds. The company should be aware of and prepared to manage any cultural differences that may arise.
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

export default OffShoreWrapper;

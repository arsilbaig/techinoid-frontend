import React from "react";
import { Link } from "react-router-dom";
function AIWrapper() {
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
                                    Artificial Intelligence
                                </h3>
                                <p>
                                Artificial Intelligence (AI) refers to the development of computer systems that can perform tasks that typically require human intelligence, such as visual perception, speech recognition, decision-making, and language translation.

AI systems can be divided into two main categories: narrow AI and general AI. Narrow AI is designed to perform specific tasks and is used in a wide range of applications, such as recommendation systems, speech recognition, and fraud detection. General AI, on the other hand, is designed to perform any intellectual task that a human can.
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
                                        Determine the specific use case for AI, such as improving customer service through chatbots or optimizing supply chain management through predictive analytics.

Conduct a feasibility study: Evaluate the potential benefits and limitations of AI for the identified use case, and determine if it is the right solution.

Choose the appropriate AI technology: Select the AI techniques and tools that meet the requirements of the use case, such as machine learning, deep learning, or natural language processing.

Prepare the data: Gather and prepare the data that will be used to train the AI model, and ensure the data is accurate, diverse, and relevant to the use case.
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
                                        Train the model: Use the prepared data to train the AI model using the chosen AI technology. This involves defining the parameters of the model, selecting the algorithms, and adjusting the model to improve its performance.

Validate the model: Validate the performance of the AI model using test data, and fine-tune the model to improve its accuracy and reliability.

Deploy the model: Integrate the AI model into the existing systems and processes, and make it available for use by the stakeholders.
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
                                        Monitor and improve: Monitor the performance and usage of the AI model, and continue to refine and improve it based on feedback and new data.
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

export default AIWrapper;

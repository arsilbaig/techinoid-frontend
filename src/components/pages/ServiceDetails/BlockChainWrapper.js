import React from "react";
import { Link } from "react-router-dom";
function BlockChainWrapper() {
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
                                Blockchain Technology
                                </h3>
                                <p>
                                    An ecommerce shopping cart is a virtual cart that stores the items a shopper wants to purchase. When the shopper is ready to checkout, they enter the necessary information, such as:

                                    Shipping address
                                    Billing address
                                    Payment method (credit card, PayPal, etc.)
                                    Email address
                                    Phone number
                                    Coupon codes or discount codes, if applicable.
                                    This information is used to process the order and complete the transaction. The details entered into the shopping cart help to ensure the accuracy of the order and provide a way for the seller to contact the shopper if necessary.
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
                                            An ecommerce shopping cart is a virtual cart that stores the items a shopper wants to purchase. When the shopper is ready to checkout, they enter the necessary information, such as:

                                            Shipping address
                                            Billing address
                                            Payment method (credit card, PayPal, etc.)
                                            Email address
                                            Phone number
                                            Coupon codes or discount codes, if applicable.
                                            This information is used to process the order and complete the transaction. The details entered into the shopping cart help to ensure the accuracy of the order and provide a way for the seller to contact the shopper if necessary.
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
                                            The shopping cart system securely transmits the payment information to a payment processor for verification and authorization.

                                            The payment processor confirms the payment and sends a confirmation back to the shopping cart system.

                                            The shopping cart system sends an order confirmation to the shopper and notifies the software house of the sale.
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
                                        The software house fulfills the order by delivering the purchased products or services to the shopper.
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

export default BlockChainWrapper;

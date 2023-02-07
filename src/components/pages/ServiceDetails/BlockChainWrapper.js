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
                  Blockchain technology is a decentralized, distributed ledger that records transactions across a network of computers. It was originally developed as the underlying technology for the digital currency, Bitcoin, but has since been applied to a variety of other use cases.

                  Blockchain technology uses cryptography to secure transactions and ensure that the ledger is tamper-proof. Each transaction is verified and recorded in a block, which is then added to a chain of blocks (hence the name "blockchain"). Once a block is added to the blockchain, the information it contains cannot be altered or deleted.
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
                      Identify the problem or opportunity: Determine the specific use case for blockchain technology, such as improving supply chain transparency, securely storing medical records, or reducing fraud in financial transactions.

                      Conduct a feasibility study: Evaluate the potential benefits and limitations of blockchain technology for the identified use case, and determine if it is the right solution.

                      Define the architecture: Design the architecture of the blockchain system, including the consensus mechanism, the nodes, and the smart contracts that will run on the blockchain.

                      Choose the appropriate platform: Select a blockchain platform that meets the requirements of the use case and the architecture, such as Ethereum, Hyperledger, or Corda.
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
                    Build the network: Develop and launch the blockchain network, including the nodes, the smart contracts, and the tools for accessing and interacting with the network.

Onboard participants: Invite and onboard participants to the blockchain network, including entities that will be using the blockchain for transactions or data storage.

Implement security measures: Ensure the security of the blockchain network through measures such as encryption, key management, and security audits.
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
                    Launch the blockchain network and monitor its performance and usage to ensure it is delivering the desired results.
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

import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function OurPartnerArea() {



  const [getInTouch, setGetInTouch] = useState({
    email:""
  })

  const dataHandler = (e) => {
    setGetInTouch({
        ...getInTouch,
        [e.target.name]: e.target.value
    })
}

const onSubmit = async () => {
  await axios.post(`${process.env.REACT_APP_API_BASE_URL}/connect/create`, getInTouch)
      .then(response => {
          toast.success("Connected", {
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 5000
          })
      
   

          setTimeout(function () {
              window.location.reload();
          }, 5000);
      })
      .catch(error => {
          toast.error(error.message, {
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 5000
          })
      
      })


}

  

  return (
    <>
      <section className="our-partner" style={{paddingTop:10}}>
        <div className="container-fluid g-0 overflow-hidden">
          <div className="row align-items-center g-0">
            <div className="col-12 col-xl-6">
              <div className="newsletter">
                <div className="subscribes">
                  <span>Get In Touch</span>

                  {/* <h1>Subscribe Our</h1>
                  <h2>Newsletter</h2> */}
                  <div className="subscribe-form" >
                    <form
                      onSubmit={(e) => e.preventDefault()}
                      action="#"
                      method="post"
                    >
                      <input
                        type="email"
                        name="email"
                        placeholder="Type Your Email"
                        onChange={dataHandler}
                      />
                      <input type="submit" defaultValue="Connect" onClick={onSubmit}/>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-6">
              <div className="our-clients">
                <div className="row align-items-center">
                  <div className="col-md-6 col-lg-4 col-xl-6" style={{paddingTop:85, paddingBottom:85}}>
                    <div className="title" >
                      <h2>Join our Techinoid community.</h2>
                    </div>
                  </div>
                  {/* <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div className="single-client">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/images/partner-icons/partner-1.png"
                        }
                        alt="images"
                      />
                      <div className="client-hover">
                        <span>www.example.com</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div className="single-client">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/images/partner-icons/partner-2.png"
                        }
                        alt="images"
                      />
                      <div className="client-hover">
                        <span>www.example.com</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div className="single-client">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/images/partner-icons/partner-3.png"
                        }
                        alt="images"
                      />
                      <div className="client-hover">
                        <span>www.example.com</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div className="single-client">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/images/partner-icons/partner-4.png"
                        }
                        alt="images"
                      />
                      <div className="client-hover">
                        <span>www.example.com</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div className="single-client">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/images/partner-icons/partner-5.png"
                        }
                        alt="images"
                      />
                      <div className="client-hover">
                        <span>www.example.com</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div className="single-client">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/images/partner-icons/partner-6.png"
                        }
                        alt="images"
                      />
                      <div className="client-hover">
                        <span>www.example.com</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div className="single-client">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/images/partner-icons/partner-7.png"
                        }
                        alt="images"
                      />
                      <div className="client-hover">
                        <span>www.example.com</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div className="single-client">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/images/partner-icons/partner-8.png"
                        }
                        alt="images"
                      />
                      <div className="client-hover">
                        <span>www.example.com</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div className="single-client">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/images/partner-icons/partner-9.png"
                        }
                        alt="images"
                      />
                      <div className="client-hover">
                        <span>www.example.org</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div className="single-client">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/images/partner-icons/partner-10.png"
                        }
                        alt="images"
                      />
                      <div className="client-hover">
                        <span>www.example.com</span>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer autoClose={5000} />
    </>
  );
}

export default OurPartnerArea;

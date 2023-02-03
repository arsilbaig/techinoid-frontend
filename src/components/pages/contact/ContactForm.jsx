/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContactForm() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    subject: "",
    description: ""
  });

  const dataHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUserData({
      ...userData,
      [name]: value
    })
  }

  const onSubmit = async () => {
    console.log(userData)
    const res = await axios.post('http://localhost:3001/contact/create', userData)
      .then(response => {
        if (response) {
          console.log(response, "ppp")
        }
        toast.success("success", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 7000
        })
      })
      .catch(error => {
        toast.error(error.message, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 7000
        })
        // this.setState({ errorMessage: error.message });
        console.error('There was an error!', error);
      })
  }


  return (
    <>
      <div className="contact-information">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-xl-6">
              <div className="contact-form">
                <h3>Have Any Questions</h3>
                <form>
                  <div className="row">
                    <div className="col-12">
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        onChange={dataHandler}
                      />
                    </div>
                    <div className="col-xl-6">
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        onChange={dataHandler}
                      />
                    </div>
                    <div className="col-xl-6">
                      <input type="text" name="subject" placeholder="Subject" onChange={dataHandler} />

                    </div>
                    <div className="col-12">
                      <textarea
                        name="description"
                        cols={30}
                        rows={10}
                        placeholder="Your message"
                        defaultValue={""}
                        onChange={dataHandler}
                      />
                    </div>
                    <div className="col-12">
                      <input type="button" defaultValue="Send Message" onClick={onSubmit} style={{ backgroundColor: "skyblue", color: "white" }} />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6 col-xl-6">
              <div className="google-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.348018663377!2d74.3426116149667!3d31.51460018137157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190573d80f41bd%3A0x2e5c341b610ea82!2sAl%20Hafeez%20Heights!5e0!3m2!1sen!2s!4v1675344724206!5m2!1sen!2s"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
        <ToastContainer autoClose={5000} />
      </div>
    </>
  );
}

export default ContactForm;

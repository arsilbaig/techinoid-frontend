import React from "react";

function ContactUsArea() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col col-xl-6">
            <div className="title black">
              <span>Get In Touch</span>
              <h2>contact us if you have more questions.</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-4 col-xl-4">
            <div className="office-info">
              <div className="icon">
                <i className="bi bi-geo-alt" />
              </div>
              <h4>Location</h4>
              <p>
                Office 1215,1216 Al-Hafeez Heights Block D1 Gulberg III Lahore, Pakistan
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-4">
            <div className="office-info">
              <div className="icon">
                <i className="bi bi-telephone" />
              </div>
              <h4>Phone</h4>
              <a href="tel:0123456789102">+012-3456-789102</a>
              <a href="tel:013456789102">+012-3456-789102</a>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-4">
            <div className="office-info">
              <div className="icon">
                <i className="bi bi-envelope" />
              </div>
              <h4>Email</h4>
              <a href="mailto:info@techinoid.com">info@techinoid.com</a>
              <a href="mailto:support@techinoid.com">support@techinoid.com</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUsArea;

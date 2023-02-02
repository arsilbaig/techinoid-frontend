import React from "react";
// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";

SwiperCore.use([Navigation, Pagination, EffectFade, Autoplay]);
function TestimonialArea() {
  const testimonialSlider = {
    slidesPerView: 1,
    loop: true,
    speed: 2000,
    autoplay: {
      delay: 5000,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };
  return (
    <>
      <section className="testimonial-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* <div className="swiper testimonial-slider">
                <Swiper
                  pagination={{
                    type: "fraction",
                  }}
                  {...testimonialSlider}
                  className="swiper-wrapper"
                >
                  <SwiperSlide className="swiper-slide">
                    <div className="testimonial-content">
                      <div className="quote">
                        <i className="fas fa-quote-left" />
                      </div>
                      <div className="client-info">
                        <div className="client-pic">
                          <img
                            src={process.env.PUBLIC_URL + "/images/shoaib.jpg"}
                            alt="images"
                          />
                        </div>
                        <div className="client-details">
                          <h4>Shoaib Rafaqat</h4>
                          <span>CEO</span>
                        </div>
                      </div>
                      <p>
                        <i className="fas fa-quote-left" /> 
                        No man can be successful, unless he first loves his work.
                        <i className="fas fa-quote-right" />
                        <br></br>
                        responsible for leading and managing the company's overall strategy and operations.
                      </p>
                      <div className="rating">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="testimonial-content">
                      <div className="quote">
                        <i className="fas fa-quote-left" />
                      </div>
                      <div className="client-info">
                        <div className="client-pic">
                          <img
                            src={
                              process.env.PUBLIC_URL + "/images/client-2.jpg"
                            }
                            alt="images"
                          />
                        </div>
                        <div className="client-details">
                          <h4>Junaid Afzal</h4>
                          <span>CTO Founder</span>
                        </div>
                      </div>
                      <p>
                        <i className="fas fa-quote-left" /> Technology is nothing. What's important is that you have a faith in people, that they're basically good and smart, and if you give them tools, they'll do wonderful things with them.
                        <i className="fas fa-quote-right" />
                      </p>
                      <div className="rating">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="testimonial-content">
                      <div className="quote">
                        <i className="fas fa-quote-left" />
                      </div>
                      <div className="client-info">
                        <div className="client-pic">
                          <img
                            src={
                              process.env.PUBLIC_URL + "/images/client-3.jpg"
                            }
                            alt="images"
                          />
                        </div>
                        <div className="client-details">
                          <h4>Arslan Baig</h4>
                          <span>COO</span>
                        </div>
                      </div>
                      <p>
                        <i className="fas fa-quote-left" /> 
                        The best way to find yourself is to lose yourself in the service of others.
                        <i className="fas fa-quote-right" />
                      </p>
                      <div className="rating">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
                <div className="swiper-button-next" />
                <div className="swiper-button-prev" />
                <div className="swiper-pagination" />
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TestimonialArea;

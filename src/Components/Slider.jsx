import { Swiper, SwiperSlide } from "swiper/react";
import profileImg from "../imags/profile.jpeg";
import "swiper/css";
import "./teamSlider.css"
import 'swiper/swiper-bundle.css';
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
const Slider = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      loop={true}

    >
      <SwiperSlide className="profileRate">
        <div className="thumbWrapperProfile p-2 thumb-wrapper card">
          <div className="img-box">
            <img src={profileImg} className="profileRateImg " alt="" />
          </div>
          <div className="thumb-content">
            <h4>Mutasim Yasser</h4>

            <p className="m-3">
              BackEnd
            </p>
            <div className="social-icons-container  d-flex justify-content-evenly m-2">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon facebook"
              >
                <FaFacebook size={32} />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon linkedin"
              >
                <FaLinkedin size={32} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon instagram"
              >
                <FaInstagram size={32} />
              </a>
            </div>
          </div>

        </div>
      </SwiperSlide>



      <SwiperSlide className="profileRate">
        <div className="thumbWrapperProfile p-2 thumb-wrapper card">
          <div className="img-box">
            <img src={profileImg} className="profileRateImg " alt="" />
          </div>
          <div className="thumb-content">
            <h4>Mutasim Yasser</h4>

            <p className="m-3">
              BackEnd
            </p>
            <div className="social-icons-container  d-flex justify-content-evenly m-2">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon facebook"
              >
                <FaFacebook size={32} />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon linkedin"
              >
                <FaLinkedin size={32} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon instagram"
              >
                <FaInstagram size={32} />
              </a>
            </div>
          </div>

        </div>
      </SwiperSlide>




      <SwiperSlide className="profileRate">
        <div className="thumbWrapperProfile p-2 thumb-wrapper card">
          <div className="img-box">
            <img src={profileImg} className="profileRateImg " alt="" />
          </div>
          <div className="thumb-content">
            <h4>Mutasim Yasser</h4>

            <p className="m-3">
              BackEnd
            </p>
            <div className="social-icons-container  d-flex justify-content-evenly m-2">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon facebook"
              >
                <FaFacebook size={32} />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon linkedin"
              >
                <FaLinkedin size={32} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon instagram"
              >
                <FaInstagram size={32} />
              </a>
            </div>
          </div>

        </div>
      </SwiperSlide>
      <SwiperSlide className="profileRate">
        <div className="thumbWrapperProfile p-2 thumb-wrapper card">
          <div className="img-box">
            <img src={profileImg} className="profileRateImg " alt="" />
          </div>
          <div className="thumb-content">
            <h4>Mutasim Yasser</h4>

            <p className="m-3">
              BackEnd
            </p>
            <div className="social-icons-container  d-flex justify-content-evenly m-2">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon facebook"
              >
                <FaFacebook size={32} />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon linkedin"
              >
                <FaLinkedin size={32} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon instagram"
              >
                <FaInstagram size={32} />
              </a>
            </div>
          </div>

        </div>
      </SwiperSlide>








    </Swiper>
  );
};
export default Slider;

import React from 'react';
import Slider from "react-slick";

const Start = () => {
  // Настройки слайдера (те самые, что были в твоем скрипте)
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    arrows: false,
    pauseOnHover: false,
    pauseOnFocus: false
  };

  return (
    <section className="start-section">
      <div className="container">
        {/* Вместо обычного div используем компонент Slider */}
        <Slider {...settings} className="banner-box shadow-sm">
          
          {/* Слайд 1 */}
          <div>
            <div className="banner-box-img">
              <a href="#">
                <img className="d-none d-lg-block w-100" src="/images/tai-gt-1670-719.jpg" alt="slide" />
                <img className="d-block d-lg-none w-100" src="/images/tai-gt-800-800.jpg" alt="slide" />
              </a>
            </div>
          </div>

          {/* Слайд 2 */}
          <div>
            <div className="banner-box-img">
              <a href="#">
                <img className="d-none d-lg-block w-100" src="/images/1670-719.jpg" alt="slide" />
                <img className="d-block d-lg-none w-100" src="/images/800-800.jpg" alt="slide" />
              </a>
            </div>
          </div>

          {/* Слайд 3 */}
          <div>
            <div className="banner-box-img">
              <a href="#">
                <img className="d-none d-lg-block w-100" src="/images/tai-promo-1670-719.jpg" alt="slide" />
                <img className="d-block d-lg-none w-100" src="/images/tai-promo-800-800.jpg" alt="slide" />
              </a>
            </div>
          </div>

          {/* Слайд 4 */}
          <div>
            <div className="banner-box-img">
              <a href="#">
                <img className="d-none d-lg-block w-100" src="/images/1670-719-1.jpg" alt="slide" />
                <img className="d-block d-lg-none w-100" src="/images/800-800-1.jpg" alt="slide" />
              </a>
            </div>
          </div>

          {/* Слайд 5 */}
          <div>
            <div className="banner-box-img">
              <a href="#">
                <img className="d-none d-lg-block w-100" src="/images/1670-719-2.jpg" alt="slide" />
                <img className="d-block d-lg-none w-100" src="/images/800-800-2.jpg" alt="slide" />
              </a>
            </div>
          </div>

          {/* Слайд 6 */}
          <div>
            <div className="banner-box-img">
              <a href="#">
                <img className="d-none d-lg-block w-100" src="/images/1670-719-3.jpg" alt="slide" />
                <img className="d-block d-lg-none w-100" src="/images/800-800-3.jpg" alt="slide" />
              </a>
            </div>
          </div>

          {/* Слайд 7 (eSim) */}
          <div>
            <div className="banner-box-img">
              <a href="#">
                <img className="d-none d-lg-block w-100" src="/images/hott-big-esim2.jpg" alt="slide" />
                <img className="d-block d-lg-none w-100" src="/images/tbg-small-virt-simcard.png" alt="slide" />
              </a>
            </div>
          </div>

          {/* Слайд 8 */}
          <div>
            <div className="banner-box-img">
              <a href="#">
                <img className="d-none d-lg-block w-100" src="/images/join-1670-719.jpg" alt="slide" />
                <img className="d-block d-lg-none w-100" src="/images/join-800-800.jpg" alt="slide" />
              </a>
            </div>
          </div>

          {/* Слайд 9 */}
          <div>
            <div className="banner-box-img">
              <a href="#">
                <img className="d-none d-lg-block w-100" src="/images/1670-719-7.jpg" alt="slide" />
                <img className="d-block d-lg-none w-100" src="/images/800-800-7.jpg" alt="slide" />
              </a>
            </div>
          </div>

          {/* Слайд 10 */}
          <div>
            <div className="banner-box-img">
              <a href="#">
                <img className="d-none d-lg-block w-100" src="/images/1670-719-5.jpg" alt="slide" />
                <img className="d-block d-lg-none w-100" src="/images/800-800-5.jpg" alt="slide" />
              </a>
            </div>
          </div>

          {/* Слайд 11 */}
          <div>
            <div className="banner-box-img">
              <a href="#">
                <img className="d-none d-lg-block w-100" src="/images/1670-719-4.jpg" alt="slide" />
                <img className="d-block d-lg-none w-100" src="/images/800-800-4.jpg" alt="slide" />
              </a>
            </div>
          </div>

          {/* Слайд 12 */}
          <div>
            <div className="banner-box-img">
              <a href="#">
                <img className="d-none d-lg-block w-100" src="/images/1670-719-6.jpg" alt="slide" />
                <img className="d-block d-lg-none w-100" src="/images/800-800-6.jpg" alt="slide" />
              </a>
            </div>
          </div>

        </Slider>
      </div>
    </section>
  );
};

export default Start;
import React from 'react';

const RecomendedHotels = () => {
  return (
    <>
      <div className="container">
    <div>
      <h2 className="title_index_hott">РЕКОМЕНДОВАННЫЕ ОТЕЛИ</h2>
    </div>
    <div>
      <div className="row hotels-list-box top-hotels-index slick-initialized slick-slider">
        <div className="slick-list draggable">
          <div
            className="slick-track"
            style={{
              opacity: 1,
              width: 1320,
              transform: "translate3d(0px, 0px, 0px)"
            }}
          >
            <div
              className="col-4 box slick-slide slick-current slick-active"
              data-slick-index={0}
              aria-hidden="false"
              tabIndex={0}
              style={{ width: 330 }}
            >
              <div className="card card-hotels shadow-sm hotels-boxs">
                <img src="/images/w-350h-250c-hoteli-7-500-an-1.jpg" />
                <div className="hott-desc">
                  <p className="hott-hotel-title">Astoria Hotel &amp; Spa</p>
                  <p>Турция, Алания</p>
                </div>
              </div>
            </div>
            <div
              className="col-4 box slick-slide slick-active"
              data-slick-index={1}
              aria-hidden="false"
              tabIndex={0}
              style={{ width: 330 }}
            >
              <div className="card card-hotels shadow-sm hotels-boxs">
                <img src="/images/w-350h-250c-hoteli-7-5078-an-1.jpg" />
                <div className="hott-desc">
                  <p className="hott-hotel-title">Carmen Suite</p>
                  <p>Турция, Алания</p>
                </div>
              </div>
            </div>
            <div
              className="col-4 box slick-slide slick-active"
              data-slick-index={2}
              aria-hidden="false"
              tabIndex={0}
              style={{ width: 330 }}
            >
              <div className="card card-hotels shadow-sm hotels-boxs">
                <img src="/images/w-350h-250c-hoteli-7-59779-an-1.jpg" />
                <div className="hott-desc">
                  <p className="hott-hotel-title">Kemer Paradise Hotel</p>
                  <p>Турция, Алания</p>
                </div>
              </div>
            </div>
            <div
              className="col-4 box slick-slide slick-active"
              data-slick-index={3}
              aria-hidden="false"
              tabIndex={0}
              style={{ width: 330 }}
            >
              <div className="card card-hotels shadow-sm hotels-boxs">
                <img src="/images/aska-lara-resort-spa-102307110.jpg" />
                <div className="hott-desc">
                  <p className="hott-hotel-title">Aska Lara Resort &amp; Spa</p>
                  <p>Турция, Алания</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  );
};

export default RecomendedHotels;
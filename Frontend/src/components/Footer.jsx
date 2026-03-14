import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="disclaimer">
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-4">
          <img src="/images/logo-black.png" style={{ width: "95%" }} />
          <p>
            © 2003-2026 Управляющая компания Объединенной сети ТБГ и «Горячие
            туры»
          </p>
          <p className="smail-text-index">
            Представленная на сайте информация носит справочный характер и не
            является публичной офертой
          </p>
        </div>
        <div className="col-12 col-md-4">
          <p className="disclaimer_title">КОНТАКТЫ</p>
          <p />
          <p>
            <img
              src="/images/geo-pink.png"
              style={{ height: 14, paddingRight: 5 }}
            />
            119021, г. Москва, улица Зубовский бульвар, д 16-20, строение 1,
            Помещение Х1, комната 3
          </p>
          <p>
            <img
              src="/images/fon-pink.png"
              style={{ height: 14, paddingRight: 5 }}
            />
            <a href="tel:+78007750220">+7 800 775-02-20</a>
            (для туристов)
          </p>
          <p>
            <img
              src="/images/fon-pink.png"
              style={{ height: 14, paddingRight: 5 }}
            />
            <a href="tel:+74996734131">+7 499 673-41-31</a>
            (для агентств)
          </p>
          <p>
            <img
              src="/images/mail-pink.png"
              style={{ height: 14, paddingRight: 5 }}
            />
            info@hott.ru
          </p>
          <p>
            <a href="#">Политика защиты и обработки персональных данных</a>
          </p>
        </div>
        <div className="col-12 col-md-4">
          <p className="disclaimer_title">МЫ ВСОЦИАЛЬНЫХ СЕТЯХ:</p>
          <div className="soc">
            <a href="#">
              <i className="icon icon-tg" />
            </a>
            <a href="#">
              <i className="icon icon-vk" />
            </a>
            <a href="#">
              <i className="icon icon-facebook" />
            </a>
            <a href="#">
              <i className="icon icon-ok" />
            </a>
            <a href="#">
              <i className="icon icon-photo-camera" />
            </a>
            <a href="#">
              <i className="fa fa-youtube" />
            </a>
            <a href="#">
              <img
                src="/images/rutub.png"
                style={{ height: 40, filter: "grayscale(100%)" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
    </>
  );
};

export default Footer;
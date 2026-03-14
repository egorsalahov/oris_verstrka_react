import React from 'react';

function Header() {
  return (
    <div className="head_menu_bac d-none d-lg-block">
      <div className="container">
        <div className="head_first_menu">
          {/* Логотип */}
          <a href="/">
            <img
              src="/images/logo-1.png"
              alt="Логотип"
              style={{ height: '77px', float: 'left' }}
            />
          </a>

          {/* Верхняя навигация */}
          <ul className="head_first_nav" style={{ float: 'left' }}>
            <li>
              <a href="#">Офисы</a>
            </li>
            <li>
              <a href="#">О компании</a>
            </li>
            <li>
              <a href="#">Вступить в Сеть</a>
            </li>
            <li>
              <a href="#">Трансфер</a>
            </li>
          </ul>

          {/* Телефон */}
          <a className="logo_tel" href="tel:88007750220">
            8 (800) 775-02-20
          </a>
        </div>

        {/* Вторая линия меню */}
        <div className="border-top">
          <div className="head_two_menu">
            <ul className="head_two_nav">
              <li>
                <a href="#">Подбор тура</a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noreferrer">
                  Поиск отелей
                </a>
              </li>
              <li>
                <a href="#">Блог</a>
              </li>
              <li>
                <a href="#">Страхование</a>
              </li>
              <li>
                <a href="#">Горячие туры</a>
              </li>
              <li>
                <a href="#">Агентствам</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
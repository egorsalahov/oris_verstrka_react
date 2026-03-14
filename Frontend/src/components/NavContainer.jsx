import React from 'react';

const NavContainer = () => {
  return (
    <>
      <div className="container" style={{ paddingRight: 0, paddingLeft: 0 }}>
        <div className="head_first_menu">
          <nav className="navbar navbar-expand-lg bg-body-tertiary rounded" aria-label="Eleventh navbar example">
            <div className="container-fluid">
              <a href="/" style={{ display: "block", margin: '0 auto', maxWidth: "67%" }}>
                <img src="/images/logo.png" alt="logo" style={{ maxHeight: "70px" }} />
              </a>
              
              <button 
                className="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarsExample09" 
                aria-controls="navbarsExample09" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarsExample09">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ textAlign: "center", fontSize: "16px", lineHeight: "2.3" }}>
                  <li className="nav-item"><a href="#">Горячие туры</a></li>
                  <li className="nav-item"><a href="#">Офисы</a></li>
                  <li className="nav-item"><a href="#">О компании</a></li>
                  <li className="nav-item"><a href="#">Вступить в Сеть</a></li>
                  <li className="nav-item"><a href="#">Трансфер</a></li>
                  <li className="nav-item"><a href="#">Вакансии</a></li>
                  <li className="nav-item"><a href="#">Подбор тура</a></li>
                  <li className="nav-item">
                    <a href="#" target="_blank" rel="noreferrer">Поиск отелей</a>
                  </li>
                  <li className="nav-item"><a href="#">Блог</a></li>
                  <li className="nav-item"><a href="#">Страхование</a></li>
                  <li className="nav-item"><a href="#">Агентствам</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default NavContainer;
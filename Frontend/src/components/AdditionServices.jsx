import React from 'react';

const AdditionServices = () => {
  return (
    <>
      <div className="container">
    <div>
      <h2 className="title_index_hott">ДОПОЛНИТЕЛЬНЫЕ УСЛУГИ</h2>
    </div>
    <div className="row">
      <div className="col-12 col-md-6 dopuslugi">
        <div className="card shadow-sm strahovka">
          <div
            style={{
              backdropFilter: "brightness(0.5)",
              width: "100%",
              height: "100%",
              textAlign: "center"
            }}
          >
            <span
              className="title_index_hott"
              style={{
                color: "#fff !important",
                paddingTop: 100,
                display: "block"
              }}
            >
              Оформить страховку
            </span>
            <a
              href="#"
              className="btn btn-outline-primary btnW w-100 py-2"
              style={{
                width: "60% !important",
                border: "2px solid",
                paddingTop: "15px !important",
                paddingBottom: "15px !important",
                borderRadius: 15
              }}
            >
              Подробнее
            </a>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6 dopuslugi">
        <div className="card shadow-sm tikets">
          <div
            style={{
              backdropFilter: "brightness(0.5)",
              width: "100%",
              height: "100%",
              textAlign: "center"
            }}
          >
            <span
              className="title_index_hott"
              style={{
                color: "#fff !important",
                paddingTop: 100,
                display: "block"
              }}
            >
              Купить билеты
            </span>
            <a
              href="#"
              className="btn btn-outline-primary btnW w-100 py-2"
              style={{
                width: "60% !important",
                border: "2px solid",
                paddingTop: "15px !important",
                paddingBottom: "15px !important",
                borderRadius: 15
              }}
            >
              Подробнее
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  );
};

export default AdditionServices;
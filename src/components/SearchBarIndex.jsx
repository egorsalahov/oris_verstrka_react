import React from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBarIndex = () => {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    // Переход на страницу поиска внутри React Router
    navigate('/search');
  };

  return (
    <>
      <div className="container conteiner-tourvisor">
        <div className="tv-search-form tv-moduleid-187596 tv-loaded">
          <div className="TVLineForm TVTheme2" style={{ width: "auto" }}>
            <div className="TVInterfaceWrapper" style={{ borderRadius: 0 }}>
              <div
                className="TVMainForm"
                style={{
                  backgroundColor: "rgb(197, 0, 118)",
                  padding: 20,
                  color: "white"
                }}
              >
                <div
                  className="TVMainFilter"
                  style={{
                    display: "flex",
                    alignItems: "stretch",
                    background: "white",
                    borderRadius: 4,
                    overflow: "hidden",
                    minHeight: 54,
                    width: "100%"
                  }}
                >
                  <div
                    className="TVDepartureFilter"
                    style={{
                      padding: "5px 15px",
                      borderRight: "1px solid #e0e0e0",
                      flex: "1 0 auto"
                    }}
                  >
                    <div className="TVMainSelect TVAxisDirection-Column TVStyleTheme2 TVTextAlign-Left">
                      <div
                        className="TVMainSelectPlaceholder"
                        style={{
                          color: "#888",
                          fontSize: 11,
                          textTransform: "uppercase",
                          whiteSpace: "nowrap"
                        }}
                      >
                        Город вылета
                      </div>
                      <div
                        className="TVMainSelectContent"
                        style={{
                          color: "#333",
                          fontWeight: "bold",
                          whiteSpace: "nowrap"
                        }}
                      >
                        Москва
                      </div>
                    </div>
                  </div>
                  <div
                    className="TVCountryFilter"
                    style={{
                      padding: "5px 15px",
                      borderRight: "1px solid #e0e0e0",
                      flex: "1 0 auto"
                    }}
                  >
                    <div className="TVMainSelect TVAxisDirection-Column TVStyleTheme2 TVTextAlign-Left">
                      <div
                        className="TVMainSelectPlaceholder"
                        style={{
                          color: "#888",
                          fontSize: 11,
                          textTransform: "uppercase",
                          whiteSpace: "nowrap"
                        }}
                      >
                        Страна
                      </div>
                      <div
                        className="TVMainSelectContent"
                        style={{
                          color: "#333",
                          fontWeight: "bold",
                          whiteSpace: "nowrap"
                        }}
                      >
                        Турция
                      </div>
                    </div>
                  </div>
                  <div
                    className="TVFlyDatesFilter"
                    style={{
                      padding: "5px 15px",
                      borderRight: "1px solid #e0e0e0",
                      flex: "1 0 auto"
                    }}
                  >
                    <div className="TVMainSelect TVAxisDirection-Column TVStyleTheme2 TVTextAlign-Left">
                      <div
                        className="TVMainSelectPlaceholder"
                        style={{
                          color: "#888",
                          fontSize: 11,
                          textTransform: "uppercase",
                          whiteSpace: "nowrap"
                        }}
                      >
                        Даты вылета
                      </div>
                      <div
                        className="TVMainSelectContent"
                        style={{
                          color: "#333",
                          fontWeight: "bold",
                          whiteSpace: "nowrap"
                        }}
                      >
                        15 фев - 24 фев
                      </div>
                    </div>
                  </div>
                  <div
                    className="TVNightsFilter"
                    style={{
                      padding: "5px 15px",
                      borderRight: "1px solid #e0e0e0",
                      flex: "1 0 auto"
                    }}
                  >
                    <div className="TVMainSelect TVAxisDirection-Column TVStyleTheme2 TVTextAlign-Left">
                      <div
                        className="TVMainSelectPlaceholder"
                        style={{
                          color: "#888",
                          fontSize: 11,
                          textTransform: "uppercase",
                          whiteSpace: "nowrap"
                        }}
                      >
                        Ночей
                      </div>
                      <div
                        className="TVMainSelectContent"
                        style={{
                          color: "#333",
                          fontWeight: "bold",
                          whiteSpace: "nowrap"
                        }}
                      >
                        6 - 14
                      </div>
                    </div>
                  </div>
                  <div
                    className="TVTouristsFilter"
                    style={{ padding: "5px 15px", flex: "1 0 auto" }}
                  >
                    <div className="TVMainSelect TVAxisDirection-Column TVStyleTheme2 TVTextAlign-Left">
                      <div
                        className="TVMainSelectPlaceholder"
                        style={{
                          color: "#888",
                          fontSize: 11,
                          textTransform: "uppercase",
                          whiteSpace: "nowrap"
                        }}
                      >
                        Туристы
                      </div>
                      <div
                        className="TVMainSelectContent"
                        style={{
                          color: "#333",
                          fontWeight: "bold",
                          whiteSpace: "nowrap"
                        }}
                      >
                        2 взрослых
                      </div>
                    </div>
                  </div>
                  <div
                    className="TVSearchButton TVButtonColor TVButtonHover"
                    onClick={handleSearchClick}
                    style={{
                      backgroundColor: "rgb(255, 232, 0)",
                      color: "rgb(92, 102, 114)",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "0 25px",
                      fontWeight: "bold",
                      border: "none",
                      transition: "background 0.2s",
                      marginLeft: "auto",
                      whiteSpace: "nowrap",
                      flexShrink: 0
                    }}
                  >
                    Найти тур
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

export default SearchBarIndex;
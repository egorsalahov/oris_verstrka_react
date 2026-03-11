import React from 'react';
import { Link } from 'react-router-dom';

const SearchResults = () => {
  return (
    <>
      <div
                    className="TVSearchResults"
                    style={{
                      margin: "0 auto",
                      width: "1296px",
                    }}>
                    <div className="TVResultContentListWrapper">
                      <div className="TVResultListView TVStyleTheme2">
                        <div className="TVResultListViewBody TVResultContentList">
                          <div
                            className="TVResultListViewList"
                            id="tour-container">
                            <div
                              className="TVResultListViewItem"
                              data-tour-id="1">
                              <div className="TVHotelResultItem">
                                <div className="TVHotelResulItemInfo">
                                  <div className="TVHotelInfo">
                                    <div className="TVResultItem">
                                      <div className="TVResultItemImageWrapper TVSize-M">
                                        <div className="TVResultItemImage">
                                          <div className="TVGallery TVResultItemGallery">
                                            <div className="TVGallContainer">
                                              <div
                                                className="TVGallList"
                                                style={{
                                                  width: "100%",
                                                }}>
                                                <div
                                                  className="TVPhotoGalleryImage"
                                                  style={{
                                                    backgroundImage:
                                                      "url('https://static.tourvisor.ru/hotel_pics/main400/17444.jpg')",
                                                    backgroundSize: "cover",
                                                    height: "200px",
                                                  }}
                                                />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="TVResultItemBodyWrapper TVResultItemBodyWrapperStretched">
                                        <div className="TVResultItemHeader">
                                          <div className="TVResultItemPreTitle">
                                            <div className="stars-row">
                                              <div className="TVHotelInfoStar TVColorYellow500">
                                                ★
                                              </div>
                                              <div className="TVHotelInfoStar TVColorYellow500">
                                                ★
                                              </div>
                                              <div className="TVHotelInfoStar TVColorYellow500">
                                                ★
                                              </div>
                                            </div>
                                          </div>
                                         <div className="TVResultItemTitle">
                                            <Link
                                              className="TVHotelInfoTitleLink"
                                              to="/tour?id=1" // Заменили href на to и убрали .html
                                            >
                                              Grand Emir 3*
                                            </Link>
                                          </div>
                                          <div className="TVResultItemSubTitle">
                                            Бейазит, Стамбул
                                          </div>
                                          <div className="TVResultItemBeforeDescriptionWrapper">
                                            <div className="TVResultItemDescription">
                                              Городской отель в районе Фатих/
                                              Беязит. Небольшие по площади номера,
                                              бесплатный Wi-Fi. Предлагаются
                                              завтраки по утрам. Подойдет для
                                              бюджетной поездки в Стамбул.
                                            </div>
                                          </div>
                                          <div className="TVResultItemFooter">
                                            <div className="TVResultItemNavButtons">
                                              <div className="TVResultNavButtons">
                                                <Link
                                                  className="TVResultNavButton"
                                                  to="/tour?id=1" // Заменили href на to
                                                >
                                                  Об отеле
                                                </Link>
                                                <div className="TVResultNavButton">
                                                  Отзывы
                                                </div>
                                                <div className="TVResultNavButton">
                                                  Карта
                                                </div>
                                                <Link
                                                  className="TVResultNavButton"
                                                  to="/tour?id=1" // Заменили href на to
                                                >
                                                  Номера
                                                </Link>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="TVResultItemPrice">
                                            <div className="TVResultItemNewPrice">
                                              47 520 РУБ
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <script
                    dangerouslySetInnerHTML={{
                      __html:
                        "/** * Функция управления отображением: Либо список, Либо тур */function checkUrlRoute() {    const hash = window.location.hash; // Получаем \"#1\"    const tourContainer = document.getElementById('tour-container');    const allDetails = document.querySelectorAll('.TVHotelResulItemDetail');    if (hash && hash.startsWith('#')) {        const id = hash.substring(1); // Отрезаем решетку, получаем \"1\"        const targetDetail = document.getElementById('tour-details-' + id);        if (targetDetail) {            // Скрываем список, показываем инфо о туре            tourContainer.classList.add('TVHide');            allDetails.forEach(el => el.classList.add('TVHide'));            targetDetail.classList.remove('TVHide');            window.scrollTo(0, 0); // Поднимаем страницу вверх            return;        }    }    // Если хэша нет или он не верный — показываем список отелей    tourContainer.classList.remove('TVHide');    allDetails.forEach(el => el.classList.add('TVHide'));}// Следим за изменениями в URLwindow.addEventListener('hashchange', checkUrlRoute);// Проверяем при первой загрузкеwindow.addEventListener('DOMContentLoaded', checkUrlRoute);// Кнопка закрытия — просто очищает хэш в URLdocument.addEventListener('click', function(e) {    if (e.target.classList.contains('js-close-tour')) {        window.location.hash = '';     }});",
                    }}
                  />
                  <script
                    dangerouslySetInnerHTML={{
                      __html:
                        "    // Функция открытия тура    function openTour(id) {        const detailsBlock = document.getElementById('tour-details-' + id);        if (detailsBlock) {            detailsBlock.classList.remove('TVHide');            window.location.hash = '/' + id; // Меняем URL на #/1        }    }    // Функция закрытия тура    function closeTour() {        const details = document.querySelectorAll('.TVHotelResulItemDetail');        details.forEach(el => el.classList.add('TVHide'));        window.location.hash = ''; // Очищаем URL    }    // 1. Слушаем клики по кнопкам \"Об отеле\" и названию    document.addEventListener('click', function(e) {        if (e.target.classList.contains('js-open-tour')) {            e.preventDefault();            const tourId = e.target.closest('.TVResultListViewItem').dataset.tourId;            openTour(tourId);        }                if (e.target.classList.contains('js-close-tour')) {            closeTour();        }    });    // 2. Логика для препода: проверка URL при загрузке страницы    window.addEventListener('load', function() {        const currentHash = window.location.hash; // Получаем #/1        if (currentHash.startsWith('#/')) {            const id = currentHash.replace('#/', '');            openTour(id);        }    });    // 3. Чтобы работала кнопка \"Назад\" в браузере    window.addEventListener('hashchange', function() {        if (!window.location.hash) {            closeTour();        }    });",
                    }}
                  />
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        "    /* Служебный класс для скрытия (если его нет в ваших CSS) */    .TVHide { display: none !important; }    .TVResultNavButton {         display: inline-block;         padding: 5px 10px;         margin-right: 5px;         background: #eee;         border-radius: 4px;    }",
                    }}
                  />
                  <br />
                  <br />
    </>
  );
};

export default SearchResults;
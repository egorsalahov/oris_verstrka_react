import React from 'react';

const CardButtons = () => {
  return (
    <>
       <div className="TVTabListControl TVStyleScroll TVStyleTheme3 TVPaddingSize-M TVFontSize-M TVScrollHidden">
          <div className="TVTabListItem TVActive" title="">
            Отель
          </div>
          <div className="TVTabListItem" title="">
            Фото
          </div>
          <div className="TVTabListItem" title="">
            Отзывы
          </div>
          <div className="TVTabListItem" title="">
            На карте
          </div>
          <a
            className="TVTabListItem"
            href="https://www.hott.ru/private/poisk-turov?ts_dosearch=1&s_form_mode=0&s_nights_from=6&s_nights_to=6&s_regular=2&x_hotel_codes=17528%2C17663%2C65057%2C17449%2C70943%2C37524%2C17611%2C28738%2C33629%2C17414%2C103994%2C70107%2C17636%2C54630%2C28497%2C17444&s_j_date_from=01.03.2026&s_j_date_to=01.03.2026&s_adults=2&s_meal=3&s_flyfrom=1&s_country=4"
            rel="nofollow noopener"
            target="_blank"
            title="">
            Похожие отели
          </a>
        </div>
    </>
  );
};

export default CardButtons;
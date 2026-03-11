import React from 'react';
import TourHeader from '../components/TourHeader';
import CardInfoTitle from '../components/CardInfoTitle';
import CardGeneralInfo from '../components/CardGeneralInfo';
import CardDescriptionSlider from '../components/CardDescriptionSlider';
import CardInfoRightBlock from '../components/CardInfoRightBlock';
import CardButtons from '../components/CardButtons';
import CardInfoLeftBlock from '../components/CardInfoLeftBlock';

function TourPage() {
  return (
    <div className="tour-page-wrapper"> 
       {
        <div
  className="TVModalContainer TVFade TVFadeIn TVTourCardWindow"
  data-tvtourlink="https://www.hott.ru/private/poisk-turov#tvtourid=6557594423"
  id=""
  style={{
    top: "215px",
  }}>
  <div className="">
    <TourHeader />
    <div className="TVTourCardWindowInfoBlock TVMainColor">
      <div className="TVTourCardInfoControl">
        <CardInfoTitle />
        <div className="TVTourCardInfoContent">
          <div className="TVTourCardInfoBlock">
            <CardInfoLeftBlock />
            <CardInfoRightBlock />
          </div>
        </div>
      </div>
    </div>
    <div className="TVTourCardWindowDetailBlock">
      <div className="TVTourCardWindowHotelBlock">
        <CardButtons />
        <div className="TVLayerSwitch TVHotelCardBody">
          <div className="TVExcursionTourControl TVHide">
            <div className="TVExcursionTourText" />
            <div className="TVExcursionTourSlider TVHide" />
            <div className="TVExcursionTourDescription TVStyleScroll" />
          </div>
          <div className="TVHotelDescriptionView">
            <CardDescriptionSlider />
            <div>
              <CardGeneralInfo />
            </div>
            <div className="TVUpButton" />
          </div>
        </div>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "    // 1. Берем параметры из адресной строки    const params = new URLSearchParams(window.location.search);    const id = params.get('id');    // 2. Проверяем: если ID нет ИЛИ он не является числом    // Регулярное выражение /^\d+$/ проверяет, что в строке только цифры    if (!id || !/^\d+$/.test(id)) {        // 3. Отправляем на главную        window.location.href = 'index.html';    }",
          }}
        />
      </div>
    </div>
  </div>
</div>
       }
    </div>
  );
}

export default TourPage;
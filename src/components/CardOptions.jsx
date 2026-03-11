import React from 'react';

const CardOptions = () => {
  return (
    <>
      <div className="TVTourCardInfoOptions">
                <div className="TVTourCardOptionsControl TVGapSize-M TVAxisDirection-Row">
                  <div className="TVTourCardOptionsWrapper">
                    <div className="TVTourCardOption TVFontSize-M TVMapMarkerIcon">
                      <div className="TVTourCardOptionContent">
                        <div className="TVTourCardOptionHeader">Турция</div>
                        <div className="TVTourCardOptionFooter">из Москвы</div>
                      </div>
                    </div>
                    <div className="TVTourCardOption TVFontSize-M TVCalendarIcon">
                      <div className="TVTourCardOptionContent">
                        <div className="TVTourCardOptionHeader">1 марта</div>
                        <div className="TVTourCardOptionFooter">6 ночей</div>
                      </div>
                    </div>
                    <div className="TVTourCardOption TVFontSize-M TVMealIcon">
                      <div className="TVTourCardOptionContent">
                        <div className="TVTourCardOptionHeader">Питание</div>
                        <div className="TVTourCardOptionFooter">
                          BB - Только завтрак
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="TVTourCardOptionsWrapper">
                    <div className="TVTourCardOption TVFontSize-M TVBedIcon">
                      <div className="TVTourCardOptionContent">
                        <div className="TVTourCardOptionHeader">
                          <t-span class="TVRoomInfo">standard</t-span>
                        </div>
                        <div className="TVTourCardOptionFooter">2 взрослых</div>
                      </div>
                    </div>
                    <div className="TVTourCardOption TVFontSize-M TVGearIcon">
                      <div className="TVTourCardOptionContent">
                        <div className="TVTourCardOptionHeader">Услуги</div>
                        <div className="TVTourCardOptionFooter">
                          Медицинская страховка
                        </div>
                      </div>
                    </div>
                    <div className="TVTourCardOption TVFontSize-M TVInfoIcon">
                      <div className="TVTourCardOptionContent">
                        <div className="TVTourCardOptionHeader TVHide" />
                        <div className="TVTourCardOptionFooter">
                          Turkey Istanbul MOW GDS (TTE) GDS
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    </>
  );
};

export default CardOptions;
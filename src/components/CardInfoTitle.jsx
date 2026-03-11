import React from 'react';

const CardInfoTitle = () => {
  return (
    <>
      <div className="TVTourCardInfoTitle">
          <div className="TVHotelTitleControl TVGapSize-M">
            <div className="TVHotelTitleType">
              <div className="TVHotelTitleStarsList">
                <div className="TVStarsControl TVSize-L TVStyleTheme1 TVActiveColorInherit TVColorGray900">
                  <div className="TVStarsControlItem TVActive">★</div>
                  <div className="TVStarsControlItem TVActive">★</div>
                  <div className="TVStarsControlItem TVActive">★</div>
                </div>
              </div>
            </div>
            <div className="TVHotelTitleName TVFontSize-XXL TVFontWeightSize-XXL">
              Grand Emir 3*
            </div>
            <div className="TVHotelTitleResort TVFontSize-L">
              Турция, Бейазит, Стамбул
            </div>
          </div>
        </div>
    </>
  );
};

export default CardInfoTitle;
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CardOptions = () => {
  const { id } = useParams();
  const [tour, setTour] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/tours.json')
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then(data => {
        const foundTour = data.find(t => t.id === parseInt(id));
        setTour(foundTour);
        setLoading(false);
      })
      .catch(err => {
        console.error('❌ tours.json:', err);
        setLoading(false);
      });
  }, [id]);

  if (loading || !tour) {
    return (
      <div className="TVTourCardInfoOptions">
        <div className="TVTourCardOptionsControl TVGapSize-M TVAxisDirection-Row">
          <div className="TVTourCardOptionsWrapper">
            <div className="TVTourCardOption TVFontSize-M TVMapMarkerIcon">
              <div className="TVTourCardOptionContent">
                <div className="TVTourCardOptionHeader">Загрузка...</div>
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
                <div className="TVTourCardOptionFooter">BB - Только завтрак</div>
              </div>
            </div>
          </div>
          <div className="TVTourCardOptionsWrapper">
            <div className="TVTourCardOption TVFontSize-M TVBedIcon">
              <div className="TVTourCardOptionContent">
                <div className="TVTourCardOptionHeader">
                  <span className="TVRoomInfo">standard</span>
                </div>
                <div className="TVTourCardOptionFooter">2 взрослых</div>
              </div>
            </div>
            <div className="TVTourCardOption TVFontSize-M TVGearIcon">
              <div className="TVTourCardOptionContent">
                <div className="TVTourCardOptionHeader">Услуги</div>
                <div className="TVTourCardOptionFooter">Медицинская страховка</div>
              </div>
            </div>
            <div className="TVTourCardOption TVFontSize-M TVInfoIcon">
              <div className="TVTourCardOptionContent">
                <div className="TVTourCardOptionHeader TVHide" />
                <div className="TVTourCardOptionFooter">Загрузка...</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ✅ Подсчет туристов
  const totalAdults = tour.tourists.adults;
  const totalChildren = tour.tourists.children.length;
  const touristsText = totalAdults === 1 
    ? `${totalAdults} взрослый` 
    : `${totalAdults} взрослых`;

  // ✅ Питание из tours.json
  const getMealType = () => {
    const meals = [];
    if (tour.meals.breakfast) meals.push('BB');
    if (tour.meals.lunch && tour.meals.dinner) meals.push('AI');
    else if (tour.meals.lunch || tour.meals.dinner) meals.push('HB');
    
    const mealNames = [];
    if (tour.meals.breakfast) mealNames.push('Завтрак');
    if (tour.meals.lunch) mealNames.push('Обед');
    if (tour.meals.dinner) mealNames.push('Ужин');
    
    return `${meals.join(' / ')} - ${mealNames.join(', ') || 'Только завтрак'}`;
  };

  return (
    <div className="TVTourCardInfoOptions">
      <div className="TVTourCardOptionsControl TVGapSize-M TVAxisDirection-Row">
        <div className="TVTourCardOptionsWrapper">
          {/* Страна + Город */}
          <div className="TVTourCardOption TVFontSize-M TVMapMarkerIcon">
            <div className="TVTourCardOptionContent">
              <div className="TVTourCardOptionHeader">{tour.country}</div>
              <div className="TVTourCardOptionFooter">из {tour.departureCity}</div>
            </div>
          </div>
          
          {/* Дата вылета + Ночи */}
          <div className="TVTourCardOption TVFontSize-M TVCalendarIcon">
            <div className="TVTourCardOptionContent">
              <div className="TVTourCardOptionHeader">{tour.outboundDate}</div>
              <div className="TVTourCardOptionFooter">{tour.nights}</div>
            </div>
          </div>
          
          {/* ✅ ПИТАНИЕ ИЗ tours.json */}
          <div className="TVTourCardOption TVFontSize-M TVMealIcon">
            <div className="TVTourCardOptionContent">
              <div className="TVTourCardOptionHeader">Питание</div>
              <div className="TVTourCardOptionFooter">{getMealType()}</div>
            </div>
          </div>
        </div>
        
        <div className="TVTourCardOptionsWrapper">
          {/* Номер + Туристы */}
          <div className="TVTourCardOption TVFontSize-M TVBedIcon">
            <div className="TVTourCardOptionContent">
              <div className="TVTourCardOptionHeader">
                <span className="TVRoomInfo">standard</span>
              </div>
              <div className="TVTourCardOptionFooter">{touristsText}</div>
            </div>
          </div>
          
          {/* Услуги - статично */}
          <div className="TVTourCardOption TVFontSize-M TVGearIcon">
            <div className="TVTourCardOptionContent">
              <div className="TVTourCardOptionHeader">Услуги</div>
              <div className="TVTourCardOptionFooter">Медицинская страховка</div>
            </div>
          </div>
          
          {/* Инфо - статично */}
          <div className="TVTourCardOption TVFontSize-M TVInfoIcon">
            <div className="TVTourCardOptionContent">
              <div className="TVTourCardOptionHeader TVHide" />
              <div className="TVTourCardOptionFooter">
                {tour.country} {tour.city} {tour.departureCity} GDS
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardOptions;

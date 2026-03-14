import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CardGeneralInfo = () => {
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
      <div className="TVHotelDescriptionControl">
        <div className="TVDescriptionContainer">
          <div className="TVDescriptionItem TVHotelGeneralInformation">
            <div>Количество номеров: </div>
            <div className="TVHotelBuild TVDescriptionData">2014</div>
            <div className="TVHotelSquare TVDescriptionData TVHide" />
            <div className="TVHotelPhone TVDescriptionData">+90 212 516 54 01</div>
            <div className="TVHotelSite TVDescriptionData">[www.grandemirhotel.com](https://www.grandemirhotel.com)</div>
            <div className="TVHotelRegistry TVDescriptionData TVHide" />
          </div>
          <div className="TVDescriptionItem TVHotelBeach TVHide" />
          <div className="TVDescriptionItem TVHotelServiceFree TVHide" />
          <div className="TVDescriptionItem TVHotelAnimation TVHide" />
          <div className="TVDescriptionItem TVHotelMeal">
            <ul>
              <li>Завтрак</li>
            </ul>
          </div>
          <div className="TVDescriptionItem TVHotelMealTypes TVHide" />
          <div className="TVDescriptionItem TVHotelInRoom">
            <ul>
              <li>Телевизор</li>
              <li>Тапочки</li>
              <li>Душ</li>
              <li>Кондиционер</li>
              <li>Мини-бар</li>
              <li>Телефон</li>
              <li>Отопление</li>
              <li>Wi-Fi</li>
            </ul>
          </div>
          <div className="TVDescriptionItem TVHotelNode">
            Администрация отеля оставляет за собой право вносить любые изменения в концепцию отеля, в том числе о наборе платных/бесплатных услуг без предварительного уведомления. Мы просим предварительно уточнять интересующую Вас информацию.
          </div>
        </div>
      </div>
    );
  }

  // ✅ Фильтруем удобства и питание по true
  const activeAmenities = [];
  if (tour.amenities.tv) activeAmenities.push('Телевизор');
  if (tour.amenities.slippers) activeAmenities.push('Тапочки');
  if (tour.amenities.shower) activeAmenities.push('Душ');
  if (tour.amenities.airConditioner) activeAmenities.push('Кондиционер');
  if (tour.amenities.miniBar) activeAmenities.push('Мини-бар');
  if (tour.amenities.phone) activeAmenities.push('Телефон');
  if (tour.amenities.heating) activeAmenities.push('Отопление');
  if (tour.amenities.wifi) activeAmenities.push('Wi-Fi');

  const activeMeals = [];
  if (tour.meals.breakfast) activeMeals.push('Завтрак');
  if (tour.meals.lunch) activeMeals.push('Обед');
  if (tour.meals.dinner) activeMeals.push('Ужин');

  return (
    <div className="TVHotelDescriptionControl">
      <div className="TVDescriptionContainer">
        {/* Общая информация отеля */}
        <div className="TVDescriptionItem TVHotelGeneralInformation">
          <div>Количество номеров: {tour.roomsCount}</div>
          <div className="TVHotelSquare TVDescriptionData TVHide" />
          <div className="TVHotelPhone TVDescriptionData">{tour.phone}</div>
          <div className="TVHotelSite TVDescriptionData">
            <a href={tour.website} target="_blank" rel="noopener noreferrer">
              {tour.website.replace('https://', '').replace('http://', '')}
            </a>
          </div>
          <div className="TVHotelRegistry TVDescriptionData TVHide" />
        </div>

        <div className="TVDescriptionItem TVHotelBeach TVHide" />
        <div className="TVDescriptionItem TVHotelServiceFree TVHide" />
        <div className="TVDescriptionItem TVHotelAnimation TVHide" />

        {/* Питание */}
        <div className="TVDescriptionItem TVHotelMeal">
          <ul>
            {activeMeals.map((meal, index) => (
              <li key={index}>{meal}</li>
            ))}
          </ul>
        </div>
        <div className="TVDescriptionItem TVHotelMealTypes TVHide" />

        {/* Удобства в номере */}
        <div className="TVDescriptionItem TVHotelInRoom">
          <ul>
            {activeAmenities.map((amenity, index) => (
              <li key={index}>{amenity}</li>
            ))}
          </ul>
        </div>

        {/* Примечание */}
        <div className="TVDescriptionItem TVHotelNode">
          Администрация отеля оставляет за собой право вносить любые
          изменения в концепцию отеля, в том числе о наборе
          платных/бесплатных услуг без предварительного уведомления.
          Мы просим предварительно уточнять интересующую Вас
          информацию.
        </div>
      </div>
    </div>
  );
};

export default CardGeneralInfo;

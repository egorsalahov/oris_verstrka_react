import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CardInfoTitle = () => {
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
        // Находим тур по ID
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
            Загрузка...
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="TVTourCardInfoTitle">
        <div className="TVHotelTitleControl TVGapSize-M">
          
          {/* ЗВЕЗДЫ */}
          <div className="TVHotelTitleType">
            <div className="TVHotelTitleStarsList">
              <div className="TVStarsControl TVSize-L TVStyleTheme1 TVActiveColorInherit TVColorGray900">
                {[...Array(tour.stars)].map((_, i) => (
                  <div key={i} className="TVStarsControlItem TVActive">★</div>
                ))}
              </div>
            </div>
          </div>

          {/* НАЗВАНИЕ */}
          <div className="TVHotelTitleName TVFontSize-XXL TVFontWeightSize-XXL">
            {tour.title}
          </div>

          {/* КУРОРТ */}
          <div className="TVHotelTitleResort TVFontSize-L">
            {tour.country}, {tour.city}
          </div>
        </div>
      </div>

      {/* Точные стили Tourvisor */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .TVTourCardInfoTitle {
            padding: 20px 0;
          }
          
          .TVHotelTitleControl {
            display: flex;
            flex-direction: column;
            gap: 12px;
          }
          
          .TVHotelTitleType {
            display: flex;
            align-items: center;
          }
          
          .TVHotelTitleStarsList {
            display: flex;
            align-items: center;
          }
          
          .TVStarsControl {
            display: flex;
            gap: 4px;
          }
          
          .TVStarsControlItem {
            font-size: 24px;
            color: #ffc107;
            line-height: 1;
          }
          
          .TVStarsControlItem.TVActive {
            color: #ffc107 !important;
          }
          
          .TVHotelTitleName {
            font-size: 28px;
            font-weight: 700;
            color: #333;
            line-height: 1.2;
          }
          
          .TVHotelTitleResort {
            font-size: 18px;
            color: #666;
            line-height: 1.3;
          }
          
          @media (max-width: 768px) {
            .TVHotelTitleName {
              font-size: 24px;
            }
            .TVHotelTitleResort {
              font-size: 16px;
            }
            .TVStarsControlItem {
              font-size: 20px;
            }
          }
        `
      }} />
    </>
  );
};

export default CardInfoTitle;

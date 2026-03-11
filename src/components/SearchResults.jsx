import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const SearchResults = () => {
  const [allTours, setAllTours] = useState([]);
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();

  const filterTours = (allTours) => {
    let filtered = [...allTours];
    const decodeParam = (param) => decodeURIComponent(param || '');

    console.log('🔍 ФИЛЬТРЫ ИЗ URL:', Object.fromEntries(searchParams));

    // 1. Страна
    const country = decodeParam(searchParams.get('country'));
    if (country) {
      filtered = filtered.filter(tour => tour.country === country);
      console.log(`🌍 Страна: ${country}, осталось: ${filtered.length}`);
    }

    // 2. Город вылета
    const departure = decodeParam(searchParams.get('departure'));
    if (departure) {
      filtered = filtered.filter(tour => tour.departureCity === departure);
      console.log(`✈️ Вылет: ${departure}, осталось: ${filtered.length}`);
    }

    // 3. Даты вылета (диапазон)
    const dates = decodeParam(searchParams.get('dates'));
    if (dates) {
      const [dateFromStr, dateToStr] = dates.split(' - ');
      const dateFrom = parseInt(dateFromStr.split(' ')[0]);
      const dateTo = parseInt(dateToStr.split(' ')[0]);
      
      filtered = filtered.filter(tour => {
        const tourDate = parseInt(tour.outboundDate.split(' ')[0]);
        return tourDate >= dateFrom && tourDate <= dateTo;
      });
      console.log(`📅 Даты ${dateFrom}-${dateTo}, осталось: ${filtered.length}`);
    }

    // 4. Количество ночей (диапазон)
    const nights = decodeParam(searchParams.get('nights'));
    if (nights) {
      const [minNightsStr, maxNightsStr] = nights.split(' - ');
      const minNights = parseInt(minNightsStr.trim());
      const maxNights = parseInt(maxNightsStr.trim());
      
      filtered = filtered.filter(tour => {
        const [tourMinNights, tourMaxNights] = tour.nights.split('-').map(n => parseInt(n.trim()));
        return tourMinNights <= maxNights && tourMaxNights >= minNights;
      });
      console.log(`🛏️ Ночей ${minNights}-${maxNights}, осталось: ${filtered.length}`);
    }

    // 5. Туристы
    const tourists = decodeParam(searchParams.get('tourists'));
    if (tourists) {
      const adultMatch = tourists.match(/(\d+)\s*(взросл|взр)/i);
      const childMatch = tourists.match(/(\d+)\s*реб/i);
      const adults = adultMatch ? parseInt(adultMatch[1]) : 0;
      const children = childMatch ? parseInt(childMatch[1]) : 0;
      const totalFilter = adults + children;
      
      filtered = filtered.filter(tour => {
        const totalTourists = tour.tourists.adults + tour.tourists.children.length;
        return totalTourists >= totalFilter;
      });
      console.log(`👨‍👩‍👧 Туристов ${totalFilter}+, осталось: ${filtered.length}`);
    }

    // 6. Удобства
    const amenities = {
      tv: searchParams.get('amenities_tv') === 'true',
      slippers: searchParams.get('amenities_slippers') === 'true',
      shower: searchParams.get('amenities_shower') === 'true',
      airConditioner: searchParams.get('amenities_airConditioner') === 'true',
      miniBar: searchParams.get('amenities_miniBar') === 'true',
      phone: searchParams.get('amenities_phone') === 'true',
      heating: searchParams.get('amenities_heating') === 'true',
      wifi: searchParams.get('amenities_wifi') === 'true'
    };

    Object.entries(amenities).forEach(([key, enabled]) => {
      if (enabled) {
        filtered = filtered.filter(tour => tour.amenities?.[key] === true);
        console.log(`🛋️ ${key}: true, осталось: ${filtered.length}`);
      }
    });

    console.log('🎯 ИТОГО НАЙДЕНО:', filtered.length);
    return filtered;
  };

  useEffect(() => {
    console.log('📦 Загружаем /api/tours.json...');
    fetch('/api/tours.json')
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then(data => {
        console.log('✅ Загружено:', data.length, 'туров');
        setAllTours(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('❌ Ошибка загрузки /api/tours.json:', err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (allTours.length > 0) {
      const filtered = filterTours(allTours);
      setTours(filtered);
    }
  }, [searchParams, allTours]);

  if (loading) {
    return (
      <div className="TVSearchResults" style={{ margin: "0 auto", maxWidth: "1296px", padding: "20px" }}>
        <div style={{ padding: '40px', textAlign: 'center', color: '#666' }}>
          Загрузка туров...
        </div>
      </div>
    );
  }

  return (
    <div className="TVSearchResults" style={{ margin: "0 auto", maxWidth: "1296px", padding: "20px" }}>
      <div className="TVResultContentListWrapper">
        <div className="TVResultListView TVStyleTheme2">
          <div className="TVResultListViewBody TVResultContentList">
            
            <div style={{ 
              padding: '15px', 
              background: '#f8f9fa', 
              borderRadius: '6px',
              marginBottom: '20px',
              fontSize: '14px',
              textAlign: 'center'
            }}>
              <strong>Найдено туров: {tours.length}</strong>
            </div>

            <div className="TVResultListViewList" id="tour-container">
              {tours.length === 0 ? (
                <div style={{ padding: '60px 20px', textAlign: 'center', color: '#666' }}>
                  <h3>❌ Туры не найдены</h3>
                  <p><strong>Текущие фильтры:</strong></p>
                  <ul style={{ textAlign: 'left', display: 'inline-block', fontSize: '14px' }}>
                    <li>Страна: {decodeURIComponent(searchParams.get('country') || 'любая')}</li>
                    <li>Вылет: {decodeURIComponent(searchParams.get('departure') || 'любой')}</li>
                    <li>Даты: {decodeURIComponent(searchParams.get('dates') || 'любые')}</li>
                    <li>Ночей: {decodeURIComponent(searchParams.get('nights') || 'любое')}</li>
                  </ul>
                  <p style={{ fontSize: '14px', marginTop: '20px' }}>
                    <strong>Попробуйте:</strong><br/>
                    Турция ← Москва | Египет ← СПб
                  </p>
                </div>
              ) : (
                tours.map((tour) => (
                  <div key={tour.id} className="TVResultListViewItem">
                    <div className="TVHotelResultItem">
                      <div className="TVHotelResulItemInfo">
                        <div className="TVHotelInfo">
                          <div className="TVResultItem">
                            
                            <div className="TVResultItemImageWrapper TVSize-M">
                              <div className="TVResultItemImage">
                                <div className="TVGallery TVResultItemGallery">
                                  <div className="TVGallContainer">
                                    <div 
                                      className="TVGallList TVPhotoSwitchingTransform" 
                                      style={{ width: "100%", transform: "translate(0%, 0px)" }}
                                    >
                                      <div 
                                        className="TVPhotoGalleryImage TVBackgroundSize-Cover"
                                        style={{
                                          backgroundImage: `url('${tour.image || `https://picsum.photos/400/200?random=${tour.id}`}')`,
                                        }}
                                      />
                                    </div>
                                    <div className="TVGallLeft TVDisabled TVHide TVSize-M"></div>
                                    <div className="TVGallRight TVDisabled TVHide TVSize-M"></div>
                                    <div className="TVGallCount TVPhotoGalleryShape-Dots TVHide">
                                      <div className="TVPhotoGalleryCountDot TVActive"></div>
                                    </div>
                                    <div className="TVGallLoupe"></div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="TVResultItemBodyWrapper TVResultItemBodyWrapperStretched">
                              <div className="TVResultItemHeader">
                                
                                {/* ЗВЕЗДЫ */}
                                <div className="TVResultItemPreTitle">
                                  <div className="stars-row">
                                    {[...Array(tour.stars)].map((_, i) => (
                                      <div key={i} className="TVHotelInfoStar TVSize-M TVColorYellow500">★</div>
                                    ))}
                                  </div>
                                </div>

                                <div className="TVResultItemTitle">
                                  <Link 
                                    className="TVHotelInfoTitleLink" 
                                    to={`/tour/${tour.id}`}
                                  >
                                    {tour.title}
                                  </Link>
                                </div>

                                <div className="TVResultItemSubTitle">
                                  {tour.city}, {tour.country}
                                </div>

                                <div className="TVResultItemBeforeDescriptionWrapper">
                                  <div className="TVResultItemDescription TVLineClampEnabled TVLineClamp-M">
                                    {tour.country === 'Турция' ? 'Городской отель в центре.' : 
                                     tour.country === 'Египет' ? 'Отель на первой линии.' : 
                                     'Комфортный отдых для всей семьи.'}
                                  </div>
                                </div>

                                <div className="TVResultItemFooter">
                                  <div className="TVResultItemNavButtons">
                                    <div className="TVResultNavButtons">
                                      <Link className="TVResultNavButton TVButtonHover TVStyleTheme2 TVPaddingSize-M" to={`/tour/${tour.id}`}>
                                        Об отеле
                                      </Link>
                                      <div className="TVResultNavButton TVButtonHover TVStyleTheme2 TVPaddingSize-M">Отзывы</div>
                                      <div className="TVResultNavButton TVButtonHover TVStyleTheme2 TVPaddingSize-M">Карта</div>
                                      <Link className="TVResultNavButton TVButtonHover TVStyleTheme2 TVPaddingSize-M" to={`/tour/${tour.id}`}>
                                        Номера
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="TVResultItemPrice">
                                    <div className="TVResultItemPriceValueWrapper">
                                      <div className="TVResultItemOldPrice TVHide"></div>
                                      <div className="TVResultItemNewPrice">
                                        <div className="TVResultItemPriceValue">
                                          {tour.price.toLocaleString()}
                                        </div>
                                        <div className="TVResultItemPriceKilo"></div>
                                        <div className="TVResultItemPriceSuffix">
                                          <div className="TVResultItemPriceCurrency">РУБ</div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="TVResultItemPriceValueArrow"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="TVHotelResulItemDetail">
                        <div className="TVHotelResulItemAbout TVHide"></div>
                        <div className="TVHotelResulItemMap TVHide"></div>
                        <div className="TVHotelResulItemReviews TVHide"></div>
                        <div className="TVHotelResulItemGroupedTours TVHide"></div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          .TVResultListViewList { display: grid; gap: 20px; }
          .TVResultListViewItem { 
            border: 1px solid #e0e0e0; 
            border-radius: 8px; 
            overflow: hidden;
            background: white;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          }
          .TVHotelInfoStar.TVColorYellow500 { 
            color: #ffc107 !important; 
            font-size: 16px; 
            display: inline-block; 
            margin-right: 2px;
          }
          .stars-row { display: flex; gap: 2px; }
          .TVHotelInfoTitleLink { 
            font-size: 18px; font-weight: bold; color: #333; 
            text-decoration: none; 
          }
          .TVHotelInfoTitleLink:hover { color: #c50076; }
          .TVResultItemSubTitle { 
            color: #666; font-size: 14px; margin: 8px 0; 
          }
          .TVResultItemDescription { 
            color: #666; font-size: 14px; line-height: 1.4; 
            display: -webkit-box; -webkit-line-clamp: 2; 
            -webkit-box-orient: vertical; overflow: hidden;
          }
          .TVResultNavButton { 
            display: inline-block; padding: 6px 12px; 
            margin-right: 8px; background: #f8f9fa; 
            border-radius: 4px; cursor: pointer; 
            text-decoration: none; color: #666; 
            font-size: 13px; border: 1px solid #e0e0e0;
          }
          .TVResultNavButton:hover { background: #e9ecef; }
          .TVResultItemNewPrice { font-weight: bold; color: #c50076; }
          .TVResultItemPriceValue { font-size: 24px; }
          .TVResultItemPriceCurrency { font-size: 14px; color: #c50076; }
          .TVPhotoGalleryImage { 
            height: 200px; background-size: cover !important; 
            background-position: center; background-repeat: no-repeat;
          }
          .TVResultItemImageWrapper { flex: 0 0 300px; }
          .TVResultItemBodyWrapper { 
            flex: 1; padding: 20px; display: flex; 
            flex-direction: column; 
          }
          .TVResultItem { display: flex; }
        `
      }} />
    </div>
  );
};

export default SearchResults;

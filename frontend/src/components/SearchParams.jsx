import React, { useState, useRef, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const SearchParams = () => {
  // 🔥 useSearchParams — синхронизируем с URL!
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Состояние фильтров — всегда синхронизировано с URL
  const [filters, setFilters] = useState({
    departure: searchParams.get('departure') || 'Москва',
    country: searchParams.get('country') || 'Турция', 
    dates: searchParams.get('dates') || '15 фев - 24 фев',
    nights: searchParams.get('nights') || '6 - 14',
    tourists: searchParams.get('tourists') || '2 взрослых'
  });

  // Состояние туристов (из скрипта)
  const [adults, setAdults] = useState(2);
  const [selectedChildren, setSelectedChildren] = useState([]);
  const [tooltip, setTooltip] = useState({ visible: false, type: '', position: {x:0,y:0} });
  const [currentMonthIdx, setCurrentMonthIdx] = useState(0);     
  const [dateSelection, setDateSelection] = useState([]);         
  const [nightSelection, setNightSelection] = useState([]);      
  const containerRef = useRef(null);

  // 🔥 useEffect — синхронизируем filters с URL при изменении searchParams
  useEffect(() => {
    const newFilters = {
      departure: searchParams.get('departure') || 'Москва',
      country: searchParams.get('country') || 'Турция',
      dates: searchParams.get('dates') || '15 фев - 24 фев',
      nights: searchParams.get('nights') || '6 - 14',
      tourists: searchParams.get('tourists') || '2 взрослых'
    };
    setFilters(newFilters);
  }, [searchParams]);

  // 🔥 Функция обновления фильтра в URL
  const updateFilter = (newFilters) => {
    const nextParams = new URLSearchParams(searchParams);
    
    // Устанавливаем новые значения
    Object.entries(newFilters).forEach(([key, value]) => {
      if (value) {
        nextParams.set(key, value);
      } else {
        nextParams.delete(key);
      }
    });
    
    setSearchParams(nextParams, { replace: true });
  };

  // Обработчик клика по фильтрам
  const handleFilterClick = (e, filterType) => {
    e.stopPropagation();
    setTooltip({
      visible: true,
      type: filterType,
      position: { x: e.pageX || e.nativeEvent.pageX, y: e.pageY || e.nativeEvent.pageY }
    });
  };

  // Закрытие tooltip
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setTooltip(prev => ({...prev, visible: false}));
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Логика туристов
  const updateAdults = (val) => {
    setAdults(prev => Math.max(1, prev + val));
  };

  const addChild = (age) => {
    setSelectedChildren(prev => [...prev.slice(0, 3), age]);
  };

  const removeChild = (index) => {
    setSelectedChildren(prev => prev.filter((_, i) => i !== index));
  };

  const applyTourists = () => {
    const txt = `${adults} взросл${adults === 1 ? 'ый' : 'ых'}${selectedChildren.length ? ` ${selectedChildren.length} реб` : ''}`;
    updateFilter({ tourists: txt });
    setTooltip(prev => ({...prev, visible: false}));
  };

  // Tooltip контент
  const renderTooltipContent = () => {
    const countries = ['Турция', 'Египет', 'ОАЭ', 'Таиланд', 'Россия'];
    const monthsData = [
      { name: 'Февраль', short: 'фев', days: Array.from({length: 28}, (_, i) => i + 1) },
      { name: 'Март', short: 'мар', days: Array.from({length: 31}, (_, i) => i + 1) }
    ];

    switch(tooltip.type) {
      case 'tourists':
        return (
          <div>
            <div style={{display: 'flex', justifyContent: 'space-between', background: '#f0f3f5', padding: '10px', borderRadius: '30px'}}>
              <button onClick={() => updateAdults(-1)} style={{background: 'none', border: 'none', fontSize: '20px'}}>—</button>
              <span style={{fontWeight: 'bold'}}>{adults} взрослых</span>
              <button onClick={() => updateAdults(1)} style={{background: 'none', border: 'none', fontSize: '20px'}}>+</button>
            </div>
            {selectedChildren.map((age, idx) => (
              <div key={idx} style={{display: 'flex', justifyContent: 'space-between', padding: '8px 12px', border: '1px solid #eee', borderRadius: '15px', marginBottom: '5px'}}>
                <span>Ребенок {idx+1} ({age})</span>
                <span onClick={() => removeChild(idx)} style={{color: '#c50076', cursor: 'pointer'}}>×</span>
              </div>
            ))}
            <button onClick={() => addChild('5 лет')} style={{width: '100%', padding: '12px', background: '#f0f3f5', border: 'none', borderRadius: '30px'}}>
              + Добавить ребенка
            </button>
            <button onClick={applyTourists} style={{width: '100%', padding: '12px', background: '#007bff', color: 'white', border: 'none', borderRadius: '8px', marginTop: '10px'}}>
              Применить
            </button>
          </div>
        );

      case 'departure':
        return (
          <div>
            {['Москва', 'СПб', 'Казань', 'Екатеринбург', 'Новосибирск'].map(city => (
              <div key={city} onClick={() => {
                updateFilter({ departure: city });
                setTooltip(prev => ({...prev, visible: false}));
              }} style={{padding: '12px', cursor: 'pointer', borderBottom: '1px solid #f0f0f0'}}>
                {city}
              </div>
            ))}
          </div>
        );

      case 'country':
        return (
          <div>
            {countries.map(country => (
              <div key={country} onClick={() => {
                updateFilter({ country });  // 🔥 Автоматически обновляет URL!
                setTooltip(prev => ({...prev, visible: false}));
              }} style={{padding: '12px', cursor: 'pointer', borderBottom: '1px solid #f0f0f0'}}>
                {country}
              </div>
            ))}
          </div>
        );

      case 'dates':
        return (
          <div>
            <div style={{display: 'flex', gap: '10px', marginBottom: '15px'}}>
              <button 
                onClick={() => setCurrentMonthIdx(prev => Math.max(0, prev - 1))}
                style={{flex: 1, padding: '8px', background: '#f0f3f5', border: 'none', borderRadius: '6px'}}
              >
                ← Пред
              </button>
              <button 
                onClick={() => setCurrentMonthIdx(prev => Math.min(1, prev + 1))}
                style={{flex: 1, padding: '8px', background: '#f0f3f5', border: 'none', borderRadius: '6px'}}
              >
                След →
              </button>
            </div>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px'}}>
              {monthsData[currentMonthIdx].days.map(day => (
                <div 
                  key={day}
                  onClick={() => {
                    setDateSelection(prev => {
                      const newSel = [...prev, day];
                      if (newSel.length === 2) {
                        const dateStr = `${newSel[0]} фев - ${newSel[1]} фев`;
                        updateFilter({ dates: dateStr });
                        setTooltip(prev => ({...prev, visible: false}));
                        setDateSelection([]);
                        return [];
                      }
                      return newSel.slice(-2);
                    });
                  }}
                  style={{
                    padding: '12px 4px', 
                    textAlign: 'center', 
                    border: '1px solid #eee', 
                    cursor: 'pointer', 
                    borderRadius: '4px',
                    background: dateSelection.includes(day) ? '#c50076' : '#f8f9fa',
                    color: dateSelection.includes(day) ? 'white' : 'black'
                  }}
                >
                  {day}
                </div>
              ))}
            </div>
          </div>
        );

      case 'nights':
        return (
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '5px'}}>
            {[6,7,8,9,10,11,12,13,14,15,16,17,18,21,25,28].map(night => (
              <div 
                key={night}
                onClick={() => {
                  setNightSelection(prev => {
                    const newSel = [...prev, night].sort((a,b) => a-b);
                    if (newSel.length === 2) {
                      updateFilter({ nights: `${newSel[0]} - ${newSel[1]}` });
                      setTooltip(prev => ({...prev, visible: false}));
                      setNightSelection([]);
                      return [];
                    }
                    return newSel.slice(-2);
                  });
                }}
                style={{
                  padding: '10px', 
                  textAlign: 'center', 
                  border: '1px solid #eee', 
                  cursor: 'pointer', 
                  borderRadius: '6px',
                  background: nightSelection.includes(night) ? '#333' : '#f8f9fa',
                  color: nightSelection.includes(night) ? 'white' : 'black'
                }}
              >
                {night}
              </div>
            ))}
          </div>
        );

      default:
        return <div>Выберите опцию</div>;
    }
  };

  return (
    <>
      <div
        className="TVMainForm"
        ref={containerRef}
        style={{
          backgroundColor: "rgb(197, 0, 118)",
          backgroundImage: "none",
          color: "rgb(255, 255, 255)",
        }}
      >
        <div className="TVSearchFormMode TVHide" />
        <div className="TVMainFilter TVSearchingFormFlexBlock">
          
          {/* Город вылета */}
          <div className="TVDepartureFilter" onClick={(e) => handleFilterClick(e, 'departure')}>
            <div className="TVDepartureSelect">
              <div className="TVMainSelect TVAxisDirection-Column TVStyleTheme2 TVTextAlign-Left">
                <div className="TVMainSelectPlaceholder">
                  <div className="TVMainFilterIcon TVDepartureFilterIcon" />
                  Город вылета
                </div>
                <div className="TVMainSelectContent">{filters.departure}</div>
              </div>
            </div>
          </div>

          {/* Страна */}
          <div className="TVCountryFilter" onClick={(e) => handleFilterClick(e, 'country')}>
            <div className="TVCountrySelect">
              <div className="TVMainSelect TVAxisDirection-Column TVStyleTheme2 TVTextAlign-Left">
                <div className="TVMainSelectPlaceholder">
                  <div className="TVMainFilterIcon TVCountryFilterIcon" />
                  Страна
                </div>
                <div className="TVMainSelectContent">{filters.country}</div>
              </div>
            </div>
          </div>

          {/* Даты */}
          <div className="TVFlyDatesFilter" onClick={(e) => handleFilterClick(e, 'dates')}>
            <div className="TVFlyDatesSelect">
              <div className="TVMainSelect TVAxisDirection-Column TVStyleTheme2 TVTextAlign-Left">
                <div className="TVMainSelectPlaceholder">
                  <div className="TVMainFilterIcon TVFlyDatesFilterIcon" />
                  Даты вылета
                </div>
                <div className="TVMainSelectContent">{filters.dates}</div>
              </div>
            </div>
          </div>

          {/* Ночей */}
          <div className="TVNightsFilter" onClick={(e) => handleFilterClick(e, 'nights')}>
            <div className="TVRangeSelect">
              <div className="TVMainSelect TVAxisDirection-Column TVStyleTheme2 TVTextAlign-Left">
                <div className="TVMainSelectPlaceholder">
                  <div className="TVMainFilterIcon TVNightsFilterIcon" />
                  Ночей
                </div>
                <div className="TVMainSelectContent">{filters.nights}</div>
              </div>
            </div>
          </div>

          {/* Туристы */}
          <div className="TVTouristsFilter TVBorderRightNone" onClick={(e) => handleFilterClick(e, 'tourists')}>
            <div className="TVTouristsSelect">
              <div className="TVMainSelect TVAxisDirection-Column TVStyleTheme2 TVTextAlign-Left">
                <div className="TVMainSelectPlaceholder">
                  <div className="TVMainFilterIcon TVTouristsFilterIcon" />
                  Туристы
                </div>
                <div className="TVMainSelectContent">{filters.tourists}</div>
              </div>
            </div>
          </div>

          {/* Кнопка поиска — теперь не нужна! Фильтры уже в URL */}
          <div
            className="TVSearchButton TVButtonColor TVButtonHover fixed-button"
            style={{
              backgroundColor: "rgb(255, 232, 0)",
              color: "rgb(92, 102, 114)",
              cursor: "pointer",
            }}
          >
            <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#484848" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
              <path d="M21 21L16.65 16.65" stroke="#484848" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
            </svg>
          </div>
        </div>
      </div>

      {/* Tooltip */}
      {tooltip.visible && (
        <div
          style={{
            position: 'fixed',
            left: tooltip.position.x + 'px',
            top: (tooltip.position.y + 10) + 'px',
            zIndex: 9999,
            background: 'white',
            padding: '20px',
            borderRadius: '12px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
            minWidth: '280px',
            maxHeight: '400px',
            overflow: 'auto'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div style={{fontWeight: 'bold', marginBottom: '10px'}}>
            {tooltip.type === 'tourists' ? 'Туристы' : 
             tooltip.type === 'departure' ? 'Город вылета' : 
             tooltip.type === 'country' ? 'Страна' :
             tooltip.type === 'dates' ? 'Даты вылета' :
             tooltip.type === 'nights' ? 'Количество ночей' :
             'Выбор'}
          </div>
          {renderTooltipContent()}
        </div>
      )}
    </>
  );
};

export default SearchParams;

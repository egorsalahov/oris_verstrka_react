import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const AddTourFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState({});

  useEffect(() => {
    // Инициализируем состояние из URL
    const initialFilters = {
      amenities: {
        tv: searchParams.get('amenities_tv') === 'true',
        slippers: searchParams.get('amenities_slippers') === 'true',
        shower: searchParams.get('amenities_shower') === 'true',
        airConditioner: searchParams.get('amenities_airConditioner') === 'true',
        miniBar: searchParams.get('amenities_miniBar') === 'true',
        phone: searchParams.get('amenities_phone') === 'true',
        heating: searchParams.get('amenities_heating') === 'true',
        wifi: searchParams.get('amenities_wifi') === 'true'
      }
    };
    setFilters(initialFilters);
  }, []);

  const toggleFilter = (category, key) => {
    setFilters(prev => {
      const newFilters = {
        ...prev,
        [category]: {
          ...prev[category],
          [key]: !prev[category][key]
        }
      };

      // ✅ ДОПОЛНЯЕМ URL — НЕ перезаписываем!
      const params = new URLSearchParams(searchParams);
      
      if (newFilters[category][key]) {
        params.set(`amenities_${key}`, 'true');
      } else {
        params.delete(`amenities_${key}`);
      }

      // ✅ ОСНОВНЫЕ ФИЛЬТРЫ ОСТАЮТСЯ!
      setSearchParams(params, { replace: true });
      
      return newFilters;
    });
  };

  const resetFilters = () => {
    const params = new URLSearchParams(searchParams);
    
    // ✅ Удаляем ТОЛЬКО удобства, основные НЕ трогаем!
    const amenitiesList = ['tv', 'slippers', 'shower', 'airConditioner', 'miniBar', 'phone', 'heating', 'wifi'];
    amenitiesList.forEach(amenity => {
      params.delete(`amenities_${amenity}`);
    });

    setSearchParams(params, { replace: true });
    
    // Сбрасываем состояние
    setFilters({
      amenities: {
        tv: false, slippers: false, shower: false, airConditioner: false,
        miniBar: false, phone: false, heating: false, wifi: false
      }
    });
  };

  const labels = {
    tv: 'Телевизор',
    slippers: 'Тапочки', 
    shower: 'Душ',
    airConditioner: 'Кондиционер',
    miniBar: 'Мини-бар',
    phone: 'Телефон',
    heating: 'Отопление',
    wifi: 'Wi-Fi'
  };

  return (
    <div className="AddTourFilters" style={{
      width: '280px',
      padding: '20px',
      background: '#f8f9fa',
      borderRadius: '8px',
      marginRight: '20px'
    }}>
      <h3 style={{ marginTop: 0, color: '#333' }}>Фильтры по удобствам</h3>
      
      <div style={{ marginBottom: '20px' }}>
        {Object.entries(filters.amenities || {}).map(([key, value]) => (
          <label key={key} style={{ 
            display: 'block', 
            marginBottom: '12px',
            cursor: 'pointer',
            fontSize: '14px'
          }}>
            <input
              type="checkbox"
              checked={value}
              onChange={() => toggleFilter('amenities', key)}
              style={{ marginRight: '8px' }}
            />
            {labels[key]}
          </label>
        ))}
      </div>

      <button 
        style={{
          width: '100%',
          padding: '10px',
          background: '#c50076',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
        onClick={resetFilters}
      >
        Сбросить
      </button>
    </div>
  );
};

export default AddTourFilters;

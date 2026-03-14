// components/TourFilters.jsx
import { useState, useRef, useEffect } from 'react';
import { useTourFilters } from '../hooks/useTourFilters';  // ← импорт hook
import CustomTooltip from './CustomTooltip';

function TourFilters() {
  const { adults, selectedChildren, updateAdults, addChild, removeChild } = useTourFilters(); // ← деструктуризация
  const [tooltip, setTooltip] = useState({ visible: false, type: '', position: {x:0, y:0} });
  const filtersRef = useRef();

  const handleFilterClick = (e, type) => {
    e.stopPropagation();
    setTooltip({
      visible: true,
      type,
      position: { x: e.nativeEvent.pageX, y: e.nativeEvent.pageY }
    });
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (filtersRef.current && !filtersRef.current.contains(e.target)) {
        setTooltip(prev => ({...prev, visible: false}));
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const renderTouristsUI = () => (
    <div>
      <div style={{display: 'flex', justifyContent: 'space-between', background: '#f0f3f5', padding: '10px', borderRadius: '30px', marginBottom: '15px'}}>
        <button onClick={() => updateAdults(-1)} style={{background: 'none', border: 'none', fontSize: '20px'}}>-</button>
        <span style={{fontWeight: 'bold'}}>{adults} взрослых</span>
        <button onClick={() => updateAdults(1)} style={{background: 'none', border: 'none', fontSize: '20px'}}>+</button>
      </div>
      
      <div>
        {selectedChildren.map((age, idx) => (
          <div key={idx} style={{display: 'flex', justifyContent: 'space-between', padding: '8px 12px', border: '1px solid #eee', borderRadius: '15px', marginBottom: '5px'}}>
            <span>Ребенок {idx+1} ({age})</span>
            <span onClick={() => removeChild(idx)} style={{color: '#c50076', cursor: 'pointer'}}>×</span>
          </div>
        ))}
      </div>
      
      <button 
        onClick={() => {/* TODO: show age selector */}}
        style={{width: '100%', padding: '12px', background: '#f0f3f5', border: 'none', borderRadius: '30px'}}
      >
        + Добавить ребенка
      </button>
      
      <button 
        onClick={() => setTooltip(prev => ({...prev, visible: false}))}
        style={{width: '100%', padding: '12px', background: '#007bff', color: 'white', border: 'none', borderRadius: '8px', marginTop: '10px'}}
      >
        Применить
      </button>
    </div>
  );

  return (
    <div className="tour-filters" ref={filtersRef} style={{padding: '20px'}}>
      <div 
        className="TVTouristsFilter" 
        onClick={(e) => handleFilterClick(e, 'tourists')}
        style={{padding: '10px', border: '1px solid #ddd', borderRadius: '8px', cursor: 'pointer'}}
      >
        
      </div>
      
      <CustomTooltip
        visible={tooltip.visible}
        position={tooltip.position}
        title={tooltip.type === 'tourists' ? 'Туристы' : ''}
        footerVisible={tooltip.type === 'tourists'}
      >
        {tooltip.type === 'tourists' && renderTouristsUI()}
      </CustomTooltip>
    </div>
  );
}

export default TourFilters;

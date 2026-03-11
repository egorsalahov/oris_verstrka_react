// hooks/useTourFilters.js
import { useState, useCallback } from 'react';

export function useTourFilters() {
  const [adults, setAdults] = useState(2);
  const [selectedChildren, setSelectedChildren] = useState([]);
  
  const updateAdults = useCallback((val) => {
    setAdults(prev => Math.max(1, prev + val));
  }, []);
  
  const addChild = useCallback((age) => {
    setSelectedChildren(prev => [...prev, age]);
  }, []);
  
  const removeChild = useCallback((index) => {
    setSelectedChildren(prev => prev.filter((_, i) => i !== index));
  }, []);

  return { adults, selectedChildren, updateAdults, addChild, removeChild };
}

import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import Header from '../components/Header';
import NavContainer from '../components/NavContainer';
import SearchParams from '../components/SearchParams';
import SearchResults from '../components/SearchResults';
import AddTourFilters from '../components/AddTourFilters';
import InfoTextSearch from '../components/InfoTextSearch';
import CustomNews from '../components/CustomNews';
import FooterSearch from '../components/FooterSearch';
import NoscriptSearch from '../components/NoscriptSearch';

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // 🔥 ИНИЦИАЛИЗАЦИЯ ВСЕХ ФИЛЬТРОВ при первом заходе на /search
  useEffect(() => {
    const currentParams = new URLSearchParams(searchParams);
    
    // ✅ БАЗОВЫЕ ФИЛЬТРЫ (если их нет)
    if (!currentParams.get('departure')) currentParams.set('departure', 'Москва');
    if (!currentParams.get('country')) currentParams.set('country', 'Турция');
    if (!currentParams.get('dates')) currentParams.set('dates', '15 фев - 24 фев');
    if (!currentParams.get('nights')) currentParams.set('nights', '6 - 14');
    if (!currentParams.get('tourists')) currentParams.set('tourists', '2 взрослых');

    // ✅ УДОБСТВА = false (обязательно для SearchResults!)
    const amenitiesList = ['tv', 'slippers', 'shower', 'airConditioner', 'miniBar', 'phone', 'heating', 'wifi'];
    amenitiesList.forEach(amenity => {
      if (currentParams.get(`amenities_${amenity}`) !== 'false') {
        currentParams.set(`amenities_${amenity}`, 'false');
      }
    });

    // ✅ Применяем URL если изменили
    if (currentParams.toString() !== searchParams.toString()) {
      setSearchParams(currentParams, { replace: true });
    }
  }, []); // Запускается ТОЛЬКО при первом рендере

  return (
    <>
      <div>
        <Header />
        <NavContainer />

        <div className="start" />
        <div className="content">
          <div className="container">
            <section>
              <ul className="breadcrumb" id="breadcrumbs" itemScope itemType="http://schema.org/BreadcrumbList">
                <li>
                  <span itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
                    <a href="index.html" itemProp="item" title="Главная">
                      <span itemProp="name">Главная</span>
                      <meta content="1" itemProp="position" />
                    </a>
                  </span>
                  / 
                </li>
                <li>
                  <span itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
                    <span itemProp="name">Подбор тура</span>
                    <meta content="2" itemProp="position" />
                  </span>
                </li>
              </ul>
              <h1 className="title_index_hott">Подбор тура</h1>
              <span className="content_link">
                <div className="container conteiner-tourvisor">
                  <div className="tv-search-form tv-moduleid-187596 tv-loaded">
                    <div className="TVWideForm TVTheme2 TVFlightsMode" style={{ width: "auto" }}>
                      <div className="TVInterfaceWrapper" style={{ borderRadius: "0px" }}>
                        
                        {/* ✅ ФИЛЬТРЫ + ОСНОВНОЙ КОНТЕНТ РЯДОМ */}
                        <div style={{ 
                          display: 'flex', 
                          gap: '20px',
                          maxWidth: '1400px',
                          margin: '0 auto',
                          flexWrap: 'wrap'
                        }}>
                          
                          {/* ✅ ЛЕВАЯ ПАНЕЛЬ ФИЛЬТРОВ */}
                          <AddTourFilters />
                          
                          {/* ✅ ОСНОВНОЙ КОНТЕНТ СПРАВА */}
                          <div style={{ flex: 1, minWidth: '600px' }}>
                            <SearchParams />
                            <SearchResults />
                            <InfoTextSearch />
                            <CustomNews />
                          </div>
                          
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </span>
            </section>
          </div>
        </div>
        <FooterSearch />
        <NoscriptSearch />
      </div>
    </>
  );
};

export default SearchPage;

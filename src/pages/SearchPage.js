import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import NavContainer from '../components/NavContainer';
import SearchParams from '../components/SearchParams';
import SearchResults from '../components/SearchResults';
import InfoTextSearch from '../components/InfoTextSearch';
import CustomNews from '../components/CustomNews';
import FooterSearch from '../components/FooterSearch';
import NoscriptSearch from '../components/NoscriptSearch';
import TourFilters from '../components/TourFilters';

const SearchPage = () => {
  return (
    <>
      <div>
        
<Header />
<NavContainer />

  <div className="start" />
  <div className="content">
    <div className="container">
      <section>
        <ul
          className="breadcrumb"
          id="breadcrumbs"
          itemScope
          itemType="http://schema.org/BreadcrumbList">
          <li>
            <span
              itemProp="itemListElement"
              itemScope
              itemType="http://schema.org/ListItem">
              <a href="index.html" itemProp="item" title="Главная">
                <span itemProp="name">Главная</span>
                <meta content="1" itemProp="position" />
              </a>
            </span>
              /  
          </li>
          <li>
            {" "}
            <span
              itemProp="itemListElement"
              itemScope
              itemType="http://schema.org/ListItem">
              <span itemProp="name">Подбор тура</span>
              <meta content="2" itemProp="position" />
            </span>
          </li>
        </ul>
        <h1 className="title_index_hott">Подбор тура</h1>
        <span className="content_link">
          <div className="container conteiner-tourvisor">
            <div className="tv-search-form tv-moduleid-187596 tv-loaded">
              <div
                className="TVWideForm TVTheme2 TVFlightsMode"
                style={{
                  width: "auto",
                }}>
                <div
                  className="TVInterfaceWrapper"
                  style={{
                    borderRadius: "0px",
                  }}>
                  <SearchParams />
                  <SearchResults />
                  <InfoTextSearch />
                  <CustomNews />
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
import React from 'react';

import Header from '../components/Header';
import NavContainer from '../components/NavContainer';
import Start from '../components/Start';
import SearchBarIndex from '../components/SearchBarIndex';
import HotTours from '../components/HotTours';
import RecomendedHotels from '../components/RecomendedHotels';
import Partners from '../components/Partners';
import AdditionServices from '../components/AdditionServices';
import AboutCompany from '../components/AboutCompany';
import Footer from '../components/Footer';

const MainPage = () => {
  return (
    <div className="App">
      <Header />
      <NavContainer />
      <Start />
      <SearchBarIndex />
      <HotTours />
      <RecomendedHotels />
      <Partners />
      <AdditionServices />
      <AboutCompany />
      <Footer />
    </div>
  );
};

export default MainPage;
import React from 'react';
import ParallaxComponent from "../Component/ParallaxComponent";
import SliderComponent from "../Component/SliderComponent";
import MainPoloCollection from '../Sections/MainPoloCollection';
import PumaCollection from '../Sections/PumaCollection';
import AdidasCollection from '../Sections/AdidasCollection';
import LacosteCollection from '../Sections/LacosteCollection';
import CKCollection from '../Sections/CKCollection';
import ScrollToTop from '../Component/ScrollTop';

const MainPage = () => {
  return (
    <>
      <ParallaxComponent/>
     <SliderComponent/>
     <MainPoloCollection/>
     <PumaCollection/>
     <AdidasCollection/>
     <LacosteCollection/>
     <CKCollection/>
     <ScrollToTop/>
    </>
  )
}

export default MainPage

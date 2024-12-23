import React from 'react';
import "./css/style.css";
import Header from './components/Header';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import WelcomeSection from './components/WelcomeSection';
import IndustrySection from './components/IndustrySection';
import SliderSection from './components/SliderSection';
import ServicesSection from './components/ServicesSection';
import BannerSection from './components/BannerSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <VideoSection />
      <WelcomeSection />
      <IndustrySection />
      <SliderSection />
      <ServicesSection />
      <BannerSection />
      <Footer />
    </div>
  );
}

export default App;
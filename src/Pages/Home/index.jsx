import React from "react";
import "./Style.css";
import Card from "../../Components/ui/Card";
import HeroSection from "./HeroSection";
import ProductSection from "./ProductSection";
import FeatureSection from "./FeatureSection";
import AboutSection from "./AboutSection";
import ContentSection from "./ContentSection";
const Home = () => {
  return (
    <>
      <div id="home-layout">
        <HeroSection/>
        <ProductSection/>
        <FeatureSection/>
        <AboutSection/>
        <ContentSection/>
      </div>
    </>
  );
};

export default Home;

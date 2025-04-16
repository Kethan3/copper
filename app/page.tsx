import React from "react";
import NavigationBar from "./components/navigation-bar/NavigationBar";
import FooterBar from "./components/footer-bar/FooterBar";
import HeroBlock from "./hero-block/HeroBlock";

const RootPage = () => {
  return (
    <div className="flex flex-col items-stretch">
      <NavigationBar />
      <HeroBlock/>
      <div  className="h-48 bg-purple-500"/>
     <FooterBar/>
    </div>
  );
};

export default RootPage;

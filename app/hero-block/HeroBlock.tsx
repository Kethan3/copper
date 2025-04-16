import React from "react";
import HeroCode from "../components/hero-code/HeroCode";
import HeroText from "../components/hero-text/HeroText";

const HeroBlock = () => {
  return (
    <div className="container mxauto">
        <div className="flex flex-row justify-evenly">
            <HeroText/>
            <HeroCode/>
            
        </div>
    </div>
  );
};

export default HeroBlock;

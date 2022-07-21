import React from "react";
import style from "./header.module.css";
import Lightmode from "./Lightmode Logo.svg";
import Darkmode from "./Darkmode Logo.svg";
import { useState, useEffect } from "react";
import { FaLightbulb, FaMoon } from "react-icons/fa";
const Header = ({ modeSwitch, lightMode }) => {
  const [width, setWidth] = useState("");

  useEffect(() => {
    function widthDynamic() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", widthDynamic);

    widthDynamic();
    console.log(width);
  }, [width]);
  // console.log(modeSwitch,lightMode)
  return (
    <div className={style.mainBackground} style={{ width: `${width}px` }}>
      <div className={style.logoContainer}>

        <img src={lightMode?Darkmode:Lightmode} alt="header" />
      </div>
      <div className={style.buttonContainer}>
        <button onClick={modeSwitch}>
          {lightMode ? (
            <FaLightbulb className={style.bulb} />
          ) : (
            <FaMoon className={style.moon} />
          )}
        </button>
      </div>
    </div>
  );
};

export default Header;

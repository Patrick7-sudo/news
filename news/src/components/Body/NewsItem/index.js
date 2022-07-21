import React from 'react'
import Style from "./index.module.css"
import {useState,useEffect} from 'react';
import logoImg from "../../header/Lightmode Logo.svg"
import Favbuttons from '../favButtons/favButtons';
const NewsItem = ({title, url, alt, description, link,lightMode}) => {
  console.log(url)
  const [image,setImage]=useState(url);

  useEffect(()=>{
    if(image === null){
      setImage(logoImg)
    }
  },[url,image])

console.log(lightMode)
  return (
    <>
      {/* <img src={logoImg}></img> */}
      <div className={Style.tileWrapper}>
        <div className={Style.imgHolder}>
          <img src={image} alt="news headline"></img>
        </div>
        <div className={Style.infoContainer}>
          <p
            className={Style.infoContainerP}
            style={{ color: `${lightMode ? "white" : "black"}` }}
          >
            {title}
          </p>

          {/* <p className={Style.infoContainerDesc}>{description}</p> */}
          <div className={Style.linkContainer}>
            <Favbuttons />
            <a
              href={link}
              className={Style.infoContainerlinkStyle}
              style={{
                color: `${lightMode ? "white" : "red"}`,
                textDecorationColor: `${lightMode ? "white" : "black"}`,
              }}
            >
              Link to Article
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsItem
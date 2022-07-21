import { FaStar } from "react-icons/fa";
import {useState} from "react";
import style from "./faButtons.module.css"
function Favbuttons() {

    const [toggle,setToggle] =useState(false);

    function toggling(){
        if(toggle){
            setToggle(false)
        }else{setToggle(true)}
    }

  return (
    <button onClick={toggling} className={style.backgroundColor} style={{color:`${toggle?"orange":"grey"}`}} data-testid="buttonFavourite">
      <FaStar></FaStar>
    </button>
  );
}

export default Favbuttons;

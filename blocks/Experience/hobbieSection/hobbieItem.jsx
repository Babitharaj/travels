import React, { useState } from "react";
import styles from "./hobbieSection.module.scss"
import { BsCheckCircleFill } from "react-icons/bs";
export default function HobbieItem(props) {

    const {style,setSelected,selected} = props

    const [isChecked, setIsChecked] = useState(false);

     const data = props?.item;

    function selectItem(e, link){

        if(e.target.checked){
            setIsChecked(true)
            setSelected({
                link:link,
                checked: true
            })
        }
        else{
            setIsChecked(false)
            setSelected({
                link:link,
                checked: false
            })
        }
    }


  return (
    <div
      className={styles["select_hobby_inner"]}
      style={!isChecked ? style.initial : style.active}
    >

      {/* <input type="checkbox" className="store-id" id="local"/> */}
      <label
        className={styles["cont_hobby"]}
        name={"fordCheckBox"}
      >
        {isChecked == true ?
        <span className={styles["check-icon"]} type="checkbox" checked={isChecked}><BsCheckCircleFill style={{color:'red'}}/></span>
       :""}
        <input
          type="checkbox"
          className={styles["check"]}
          onChange={(e, link)=>selectItem(e, link="55")}
        />
        <img className={styles["hobby_img"]} src={data?.expIcons?.value} />
        <span className={styles["text"]}>{data?.itemText?.value}</span>
        {/* <img  alt="Destination" className={styles["hobby_bg"]} src="assets/images/experience/hobbie-bg.avif"/> */}
        {/* <div className={isChecked ? `${styles["overlay"]}` && `${styles["hobby_bg"]}`:''}></div> */}

      </label>
    </div>
  );
}

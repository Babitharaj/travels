import React from 'react'
import styles from "./sliderHeading.module.scss"

export default function SliderHeading(props) {
  const heading=props?.data;
  return (
    <div className={styles["makeFlex"] + " align-items-center justify-content-between"}>
    <div className={styles["flex-column"]}>
      <h2 className="mb-0">
       {heading?.highlightText?.value}
      </h2>
      <p className="mb-0">{heading?.subText?.value}</p>
    </div>
  </div> 
  )
}

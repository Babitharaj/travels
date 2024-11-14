import React from 'react'
import styles from "./transferComp.module.scss"

export default function TransferComp(props) {
  
  return (
    <div
    className={styles["dayplan-section"]}
    
  >
    <div className={styles["highlight"]}>
      <div className={styles["transfer-header"]}>
        <p className={styles["transfer-title"]+ " mb-0"}>
       {props?.blockFour?.transferHead?.leadingText?.value}
        </p>
        <div className={styles["transfer-btns"]}>
          <span id="remove">{props?.blockFour?.transferHead?.buttonOne?.value}</span>
          <span id="change">{props?.blockFour?.transferHead?.buttonTwo?.value}</span>
        </div>
      </div>
      <div className={styles["transfer-body"]}>
        <figure>
         
            <div
              className={styles["imageLoaderContainer"]}
             
            >
              <img
                className="borderRadius4 vrtTop active"
              
                src={props?.blockFour?.leftCont?.leftImage?.value}
              />
            </div>
         
        </figure>
        <div className={styles["transfer-details"]}>
          <div className={styles["transfer-details-title"]}>
            <p className=" my-0">
              <span className={styles["blackText"]}>
              {props?.blockFour?.rightCont?.leadingText?.value}
              </span>
            </p>
            <p className={styles["subText"]+ " my-0"}>{props?.blockFour?.rightCont?.subText?.value}</p>
          </div>
          <p className={styles["grey-text"]}>
            <span className={styles["transfer-label"] + " d-lg-block"}>{props?.blockFour?.rightCont?.labelText?.value}</span>
            <span className={styles["transfer-value"]}>
            {props?.blockFour?.rightCont?.labelValue?.value}
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

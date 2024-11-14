import React from "react";
import styles from "./activityListing.module.scss"

export default function ActivityListing(props) {
  const blockSeven=props?.blockSeven
  return (
    <>
      <div className={styles["dayplan-section"]}>
        <div className={styles["activity"]}>
          <div className={styles["activity-header"]}>
            <p className={styles["activity-title"]+" mb-0"}>
              {blockSeven?.activityHead?.leadingText.value}
            </p>
          </div>
          <div className={styles["activity-body"]}>
            
            <div className={styles["image-wrapper"]}>
              {/* <p className={styles["rating"]}>
                5<small>/5</small>
              </p> */}
              <div className={styles["imageCont"]}>
                <div
                  className={styles["imageItem"]} 
                >
                  <img
                    className=""
                    src={props?.blockSeven?.activityLeft?.image?.value}/>
                </div>
                </div>
            </div>
            <div className={styles["activity-details"]}>
              <div className={styles["details-headText"]}>
           
                <p className={styles["details-title"]+" mb-0"}>
                {props?.blockSeven?.rightCont?.leadingText?.value}
                </p>
                <p className={styles["subText"]+" mb-0"}>{props?.blockSeven?.rightCont?.subText?.value}</p>
              </div>
              <p className={styles["description"]}>
                <span className={styles["text-desc"]}>
                {props?.blockSeven?.rightCont?.description?.value}
                </span>
                {/* <a>
                  <span>
                    Read More...
                  </span>
                </a> */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

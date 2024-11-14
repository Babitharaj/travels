import React from "react";
import { TbCalendarEvent } from 'react-icons/tb';
import styles from "./hotelListing.module.scss"
import { TiTick } from 'react-icons/ti';
import Link from "next/link";

export default function HotelListing(props) {
  return (
    <>
      <div className={styles["dayplan-section"]}>
        <div className={styles["hotel-wrapper"]}>
          <div className={styles["hotel-highlight"]} >
            <div className={styles["hotel-header"]}>
              <p className={styles["hotel-title"]+ " mb-0"}>
                 {/*  */}
                 {props?.blockSix?.hotelCompHead?.leadingText?.value}
              </p>
              <div className={styles["hotel-btns"]}>
                <span id="change">{props?.blockSix?.hotelCompHead?.buttonText?.value}</span>
              </div>
            </div>
            <div className={styles["hotel-body"]}>
              <figure className={styles["image-wrapper"]+ " me-lg-3"}>
                {/* <p className={styles["hotel-rating"]+ " mb-0"}>
                 <span>4.4<small>/5</small></span>
                </p> */}
                <div className={styles["imageCont"]}>
                  <div className={styles["imageItem"]}>
                    <img  src={props?.blockSix?.leftCont?.leftImage?.value}/>
                  </div>
                </div>
              </figure>
              <div className={styles["hotel-details"]}>
                <div className={styles["smallBtn"]}>
                  <p className={styles["hotel-tag"] + " mb-0"}>{props?.blockSix?.rightCont?.buttonText?.value}</p>
                </div>
                <p className={styles["details-title"]+ " mb-0"}>
                {props?.blockSix?.rightCont?.leadingText?.value}
                  {/* <span className="holidaySprite rating_blank">
                    <span className="holidaySprite rating_fill ratingThree"></span>
                  </span> */}
                </p>
                <p className={styles["text-sm"] + " mb-0"}>{props?.blockSix?.rightCont?.subText?.value}</p>
  
                <p className={styles["text-date"]}>
                  <span><TbCalendarEvent/></span>
                  {props?.blockSix?.rightCont?.labelText?.value}
                </p>
              </div>
            </div>
          </div>
          <div className={styles["room-details"]}>
            <div className={styles["room-title"]}>
              <div className={styles["room-name"]}>
              {props?.blockSix?.bottomCont?.leadingText?.value}
              </div>
              <Link href="#" legacyBehavior><a className={styles["change-room"]}>{props?.blockSix?.bottomCont?.buttonText?.value}</a></Link>
            </div>
            <div className={styles["meal-plan"]}>
              <div className={styles["meal-plan-label"]}>{props?.blockSix?.bottomCont?.subTextLabel?.value}</div>
              <div className={styles["meal-plan-text"]}>{props?.blockSix?.bottomCont?.subTextValue?.value}</div>
            </div>
            <div className={styles["room-inclusions"]}>
              <div className={styles["inclusions-label"]}>{props?.blockSix?.bottomCont?.labelText?.value}</div>
              <div className={styles["inclusions-list"]}>
                <div className={styles["inclusion"]}>
                  <span className={styles["tick-mark-container"]}>
                   <TiTick/>
                  </span>
                  {props?.blockSix?.bottomCont?.labelValue?.value}
                </div>
               
              </div>
            </div>
            <Link href="#" legacyBehavior><a className={styles["change-room"] + " py-2 d-md-none"}>{props?.blockSix?.bottomCont?.buttonText?.value}</a></Link>
          </div>
        </div>
      </div>
    </>
  );
}

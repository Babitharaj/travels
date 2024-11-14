import React from "react";
import styles from "./couponComp.module.scss"

export default function CouponComp(props) {
  return (
    <div className={styles["offersWrap"]}>
      <div className={styles["offersSection"]}>
        <p className={styles["couponsHead"]+" mb-0"}>{props?.coupon?.couponSection?.heading?.value}</p>
        <div className={styles["emiOptions"]}>
        {props?.coupon?.couponSection?.emiButtonText?.value ? 
          <span className={styles["emiIcon"]}>
          <span>₹</span>{props?.coupon?.couponSection?.emiButtonText?.value}
          </span>: ""}
          <div className={styles["flexOne"]}>
            <p className={styles["bold-Text"]+" mb-0"}>{props?.coupon?.couponSection?.boldText?.value}</p>
            <p className={styles["greyText"]+" mb-0"}>
            {props?.coupon?.couponSection?.subText?.value} &nbsp;
              <span>
              {props?.coupon?.couponSection?.linkText?.value}
              </span>
              .
            </p>
          </div>
        </div>
        <div className={styles["couponApply"]}>
          <div className={styles["couponsInput"]}>
            {/* <i className="holidaySprite sm"></i> */}
            <input type="text" placeholder= {props?.coupon?.couponSection?.placeholderText?.value}/>
            <span className="ctaCoupon">
            {props?.coupon?.couponSection?.applyButton?.value}
            </span>
            {/* <small className="latoBold font11 couponStatusNotify "></small> */}
          </div>
          <p className={styles["couponSep"]}>
            <span className={styles["couponSepText"]}>OR</span>
          </p>
          <div className={styles["couponsList"]}>
            <label className={styles["couponsOuter"]}>
              <span className={styles["greenTick"]} style={{backgroundImage:`url(${props?.coupon?.offerSection?.selectIcon?.value}`}}></span>
              <div className={styles["offer-detail"]}>
                <div className={styles["offerText-wrap"]}>
                  <div className={styles["text-cont"]}>
                    <p className={styles["couponName"]}>
                    {props?.coupon?.offerSection?.leadingText?.value}
                    </p>
                    <p className={styles["description"]+" mb-0"}>
                    {props?.coupon?.offerSection?.subText?.value}
                    </p>
                  </div>
                  <span>
                  {props?.coupon?.offerSection?.offerBtn?.value}
                  </span>
                </div>
                <p className={styles["couponPrice"]+" mb-0"}>
                  <span>{props?.coupon?.offerSection?.offerText?.value}</span>
                </p>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import styles from "./priceDisplayed.module.scss";
import { TbCalendarEvent } from 'react-icons/tb';

export default function PriceDisplayed(props) {
  return (
    <>
      <div className={styles["pakageDtlWrap"]}>
        <div className={styles["pakageDtlWrapTop"]}>
          <p className={styles["slashedPrice"]+" mb-0"}>{props?.pkgPrice?.topSection?.deletedText?.value}</p>
          <p className={styles["originalPrice"]+" mb-0"}>
            <span id="price_detail" className="font24 latoBlack">
              <span>{props?.pkgPrice?.topSection?.originalRate?.value}</span>
            </span>
            {props?.pkgPrice?.topSection?.relatedText?.value}
          </p>
          <p className={styles["subText"]+" mb-0"}>{props?.pkgPrice?.topSection?.subText?.value}</p>
          <span className={styles["pakageOfftag"]}>{props?.pkgPrice?.topSection?.offerText?.value}</span>
        </div>
        <div className={styles["pakageDtlWrapBottom"]}>
          <div className={styles["pakageDtlRow"]}>
            <div className={styles["makeFlex"]}>
              <span className={styles["DateIcon"]}><TbCalendarEvent/></span>
              <div className={styles["dateText"]}>
                <span className={styles["duration"]}>{props?.pkgPrice?.bottomSection?.duration?.value}</span>
                <span className={styles["linkBtn"]}>
                {props?.pkgPrice?.bottomSection?.modifyBtn?.value}
                </span>
              </div>
            </div>
          </div>
          <div className={styles["pakageDtlCta"]}>
            <span className={styles["primaryBtn"]}>
            {props?.pkgPrice?.bottomSection?.buttonText?.value}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

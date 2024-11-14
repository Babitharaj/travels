import React from "react";
import styles from "./leftContainer.module.scss";
//import LcHeader from '../LC-Header/lcHeader'
import LeftSideBar from "../leftSideBar/leftSideBar";
import DayPlanDetail from "@/components/pd/dayPlanDetail/dayPlanDetail";
import { useState } from "react";
//import SiteVisiting from '@/components/pd/siteVisiting/siteVisiting'
import TransferComp from "@/components/pd/transferComp/transferComp";
import HotelListing from "@/components/pd/hotelListing/hotelListing";
import ActivityListing from "@/components/pd/activityListing/activityListing";
//import Hotel from '@/components/pd/hotelListing/hotel'

export default function LeftContainer(props) {
  var left = props?.left;
  var blockTwo = props?.left[1]?.elements;
  var blockThree = props?.left[2]?.elements;
  //var blockFour =props?.left[3]?.elements;

  // console.log(left);

  const [tab, setTab] = useState("Plan");

  function setState(e) {
    setTab(e);
  }

  return (
    <>
      <div className={styles["left-section"] + " col-lg-9 col-xs-12"}>
        <header className="mt-lg-0">
          <ul className={styles["initerary-nav"] + " mb-3"}>
            <li
              className={tab == "Plan" ? styles.active : ""}
              type="button"
              onClick={() => setState("Plan")}
            >
              <b className="me-2">{blockTwo?.buttonNav?.navOne?.value}</b>
            </li>
            <li
              className={tab == "Hotel" ? styles.active : ""}
              onClick={() => setState("Hotel")}
              type="button"
            >
              <b className="me-2">{blockTwo?.buttonNav?.navTwo?.value}</b>
            </li>
            <li
              className={tab == "Transfer" ? styles.active : ""}
              onClick={() => setState("Transfer")}
              type="button"
            >
              <b className="me-2">{blockTwo?.buttonNav?.navThree?.value}</b>
            </li>
            <li
              className={tab == "Activity" ? styles.active : ""}
              onClick={() => setState("Activity")}
              type="button"
            >
              <b className="me-2">{blockTwo?.buttonNav?.navFour?.value}</b>
            </li>
          </ul>
        </header>
        <div className="row">
          <div className={styles["days"] + " col-lg-2 "}>
            <LeftSideBar sidebar={blockThree} />
          </div>
          <div className="col-lg-8 ps-lg-2 pt-lg-0 col-xs-12">
            <div className={styles["dayplan-details"]}>
              <div className={styles["dayplan-wrapper"]}>
                <div className={styles["dayplan-header"]}>
                  <p className={styles["dayplan-title"] + " mb-0"}>
                    {blockTwo?.planHeaderLeft?.planTitle?.value}
                  </p>
                  <div className={styles["dp-incusions-cont"]}>
                    <div className={styles["inclusions-heading"]}>
                      {blockTwo?.planHeaderLeft?.DayPlanLabel?.value}
                    </div>
                    <div className={styles["dp-incusions"]}>
                      <ul>
                        {blockTwo?.planHeaderRight?.value?.map((data, i) => (
                          <li key={i}>
                            <span
                              className={styles["icon"]}
                              style={{
                                background: `url(${data?.icon?.value})`,
                              }}
                            ></span>
                            <span className={styles["textSpan"]}>
                              {data?.contentText?.value}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                {tab == "Plan" && <DayPlanDetail plan={props?.left} />}
                <div>
                  {tab == "Hotel" && (
                    <HotelListing blockSix={props?.left[5]?.elements} />
                  )}
                </div>
                <div>
                  {tab == "Transfer" && (
                    <TransferComp blockFour={props?.left[3]?.elements} />
                  )}
                </div>
                <div>
                  {tab == "Activity" && (
                    <ActivityListing blockSeven={props?.left[6]?.elements} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ################################################################################# */}
      {/* <LcHeader/>
    <div className={styles["dayplan-container"]}>
    <LeftSideBar/>

    </div> */}
    </>
  );
}

export const incusions = [
  { iconurl: "/assets/images/hotel-icon.png", text: "1 Hotel" },
  { iconurl: "/assets/images/flight-icon.png", text: "1 Transfer" },
  { iconurl: "/assets/images/flight-icon.png", text: "2 Activities" },
];

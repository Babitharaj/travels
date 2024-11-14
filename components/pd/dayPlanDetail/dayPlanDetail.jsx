import React from "react";

import SiteVisiting from "../siteVisiting/siteVisiting";
import TransferComp from "../transferComp/transferComp";
import HotelListing from "../hotelListing/hotelListing";
import ActivityListing from "../activityListing/activityListing";

export default function DayPlanDetail(props){
  var blockFour = props?.plan[3]?.elements;
  var blockFive = props?.plan[4]?.elements;
  var blockSix = props?.plan[5]?.elements;
  var blockSeven = props?.plan[6]?.elements;

//console.log(blockSeven);

  return (
    <>
          <TransferComp blockFour={blockFour}/>
          <SiteVisiting blockFive={blockFive}/>
          <HotelListing blockSix={blockSix}/>
          <ActivityListing blockSeven={blockSeven}/>
    </>
  );
}



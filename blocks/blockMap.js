import React from "react";
//home page
import MainBanner from "./main-banner/mainBanner";
import Experience from "./Experience/experienceSec";
import ResortListing from "./resort-listing/resortListing";
import GridImages from "./gridSection/gridSection";
//import ThreeSixtyView from "./ThreeSixty-video-section/threeSixtyvideoSection";
import MemberSection from "./memberSection/memberSection";
// import RegisterSection from "./registerSection/registerSection";
import MapItem from "@/components/mapItem/mapItem";
import Advertisement from "./AdvertisementSec/advSection";
import SliderThree from "@/components/Sliders/sliderThree/sliderThree";
import StoriesSection from "./storiesSec/storiesSec";
import OfferSection from "./offerSection/offerSection";
import About from "./AboutSection/aboutSection";


//membership
import BannerThree from "./main-banner/bannerThree/bannerThree";
import BenefitListing from "./memberships/benefitsListing/benefitListing";
import MembershipBenefits from "./memberships/membership-Benifits/membershipBenifits";
import DisplaySection from "./memberships/displaySection/displaySection";
import Testimonials from "./memberships/Testimonials/testimonialSec";
import MembershipForm from "./memberships/membershipForm/membershipForm";

//experience

import HobbieSection from "./Experience/hobbieSection/hobbieSection";
import Carousel from "@/components/carousel/carouselComp";

//resorts
import GridThree from "./GridThree/gridThree";
import ResortBanner from "./ResortBanner/resortBanner";
import GridTwo from "./GridTwo/gridTwo";
import GridFour from "./GridFour/gridFour";
import ResortListingSliderSec from "./ResortListngSliderSection/resortListingSliderSection";
//import ScrollModal from "@/components/Modal/modalContent/modalContent";
import GridOne from "./GridOne/gridOne";

//Our-resorts
import ResortHeading from "./ResortHeading/resortHeading";
import PackageProvides from "@/components/our-resorts/packageProvides/packageProvides";
import ResortExpSec from "./resortExpSec/resortExpSec";
import RoomType from "@/components/our-resorts/RoomType/roomType";
import FoodListingSec from "@/components/our-resorts/foodListingSec/foodListingSec";
import OtherBranches from "./otherBranches/otherBranches";
import Question from "@/components/questionSection/questionSection";


//package
import PackageBanner from "./packageBanner/packageBanner";
import PackageBenefits from "./PackageBenefits/packageBenefits";
import PackageSlider from "./packageSlider/packageSlider";
//import ScrollModal from "@/components/Modal/modalContent/modalContent";


const ComponentItems = {
  //home
  "TT00023B01": MainBanner,
  "TT00023B02": Experience,
  "TT00023B03": ResortListing,
  "TT00023B04": ResortListing,
  "TT00023B05": GridImages,
  // "TT00023B06": ThreeSixtyView,
  "TT00023B07": MemberSection,
  "TT00023B26": MembershipForm,
  "TT00023B09": MapItem,
  "TT00023B10": Advertisement,
  "TT00023B11": SliderThree,
  "TT00023B12": StoriesSection,
  "TT00023B13": OfferSection,
  "TT00023B14": About,

  //membership
"TT00023B21": BannerThree,
"TT00023B22": BenefitListing,
"TT00023B23": MembershipBenefits,
"TT00023B24": DisplaySection,
"TT00023B10": Advertisement,
"TT00023B12": StoriesSection,
"TT00023B25": Testimonials,
"TT00023B13": OfferSection,
"TT00023B26": MembershipForm,
"TT00023B27": About,

//experience
"TT00023B31": MainBanner,
"TT00023B32": ResortListing,
"TT00023B33": HobbieSection,
"TT00023B34": ResortListing,
"TT00023B35": Carousel,
"TT00023B26": MembershipForm,
"TT00023B12": StoriesSection,
"TT00023B25": Testimonials,

//resorts

"TT00023B41": ResortBanner,
"TT00023B42": GridThree,
"TT00023B43": GridTwo,
"TT00023B44": GridFour,
"TT00023B45": ResortListingSliderSec,
"TT00023B47": GridOne,
"TT00023B12": StoriesSection,
"TT00023B26": MembershipForm,
"TT00023B48": About,

//ExpDetail

"TT00023B51": BannerThree,
"TT00023B53": About,
"TT00023B52": ResortListingSliderSec,
"TT00023B26": MembershipForm,
"TT00023B12": StoriesSection,
"TT00023B25": Testimonials,


//Our-resorts

"TT00023B61": BannerThree,
"TT00023B62": ResortHeading,
"TT00023B63": PackageProvides,
"TT00023B64": ResortExpSec,
"TT00023B65": RoomType,
"TT00023B35": Carousel,
"TT00023B66": FoodListingSec,
"TT00023B67": OtherBranches,
"TT00023B12": StoriesSection,
"TT00023B68": Question,
"TT00023B26": MembershipForm,
"TT00023B69": About,

//package
"TT00023B71": PackageBanner,
"TT00023B72": PackageBenefits,
"TT00023B73": PackageSlider,
"TT00023B74": PackageSlider,



};



function MapBlock(blockId, data) {
  // component does exist
  if (typeof ComponentItems[blockId] !== "undefined") {
   
    return React.createElement(ComponentItems[blockId], {
      key: data.blockRef,
      uiLayout: data,
    });
  }
}

export {MapBlock };

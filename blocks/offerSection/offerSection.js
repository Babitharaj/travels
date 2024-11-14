import styles from "./offerSection.module.scss"
import Heading from "../../components/Heading/headingComp"
// import Link from "next/link";
import GridBlockOne from "../../components/gridBlocks/gridBlockOne/gridBlockOne"
// import CustomModal from "@/components/Modal/modal/customModal";
// import ModalSmall from "@/components/Modal/modalSmall/modalSmall";
// import { useState } from "react";
// import TimerModal from "@/components/Modal/timerModal/timerModal";

export default function OfferSection(props) {
  
  var offer = props?.uiLayout?.elements;

  //console.log(offer);

  return (
    <section className={styles["grab_offers"]} id="offers">
      <div className="container">
        <div className="row">

          <Heading heading={offer?.sectionTitle.highlightText.value} subheading={offer?.sectionTitle.subText.value}/>
         
        </div>
        
        <div className="row">
          
          <GridBlockOne item={offer?.listingItem.value}/>
        </div>
        
      </div>
    
     
      {/* <div>
      <button data-bs-toggle="modal" data-bs-target="#exampleModal">modal</button>
<TimerModal/>
  
          </div> */}
    </section>
  );
}


// export const offers=[
//   {img:"/assets/images/offer-01.avif", title:"Apple iPhone 14 Series", sub:"Become a member and walk away with the latest Apple iPhone 14 series",},
//   {img:"/assets/images/offer-02.avif", title:"Incredible Samsung Note 20 Ultra", sub:"Become a member and own Samsung Note 20 Ultra",}
// ]


              {/* <div
                className="offer_inner slick-slide slick-active"
                data-slick-index="1"
                aria-hidden="false"
             
                role="option"
                aria-describedby="slick-slide41"
                style="width: 283px;"
              >
                <div className="offer_wrap">
                  <figure>
                    <img
                      className="gm-loaded gm-observing gm-observing-cb"
                  
                      alt="Samsung Note 10lite"
                      title="Samsung Note 10lite"
                      src=""
                    />
                  </figure>
                  <figcaption>
                    <div className="cont">
                      <h4>Incredible Samsung Note 20 Ultra</h4>
                      <p>Become a member and own Samsung Note 20 Ultra</p>
                    </div>
                    <div className="btn">
                      <a
                        href="https://www.clubmahindra.com/#lead_form"
                        className="btn-primary"
                     
                      >
                        Avail Offer
                      </a>
                    </div>
                  </figcaption>
                </div>
              </div> */}
import Heading from "@/components/Heading/headingComp";
import SliderExp from "@/components/Sliders/sliderExp/sliderExp";
import SelectButton from "@/components/selectBtn/selectBtn";
import styles from './resortExpSec.module.scss'
import { useState } from "react";

export default function ResortExpSec(props){


 var explore = props?.uiLayout?.elements;
 //console.log(explore);

const[tab,setTab]=useState("atResort")

    return(

        <section>
            <div className="container">
          <div className="row">
          <Heading heading={explore?.sectionTitle?.highlightText?.value} subheading={explore?.sectionTitle?.subText?.value}/>

          <SelectButton btn={explore?.selectButton} setTab={setTab} tab={tab}/>
        
        </div>
        </div>
  
        {/* {tab == "atResort" && 
        <div className={styles["tab_content"]}>
        <SliderExp  item={explore?.listingItem?.value}/> 
        </div>}  
        {tab == "nearBy" && 
        <div className={styles["tab_content"]}>
        <SliderExp  item={explore?.listingItemTwo?.value}/> 
        </div>}   */}
  
     <div className={styles["tab_content"]}>
       {tab == "atResort" && <SliderExp  item={explore?.listingItem?.value}/> }
       {tab == "nearBy" &&  <SliderExp  item={explore?.listingItemTwo?.value}/> }
      </div>
      </section>
    )
}

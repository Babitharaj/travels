import { useState } from "react"

import styles from "./faqSection.module.scss"
import Heading from "@/components/Heading/headingComp";
export default function Faq(){
const[selected,setSelected]=useState(null);

 const toggle = (i) =>{
  if(selected === i){
   return setSelected(null)
  }
  setSelected(i)

   }
    return(
   
<section className="faq_main_section" id="faq_resort_section">    
        
<div className="container">
        <div className="row">
        <Heading heading="FAQs on Club Mahindra Gir  Gujarat Resort"/>
        </div>
        <div className="row">
          
           <div className={styles["wrapper"]}>

            <div className={styles["accordion"]}>

              {faqData?.map((data,i)=>(
               <div className={styles["item"]} key={i}>

                  <div className={styles["title"]} onClick={() => toggle(i)}>
                    <h2>{data?.qstn}</h2>
                    <span>{selected === i ? '-' : '+'}</span>
                  </div>
                  <div className={selected === i ? `${styles["content-show"]}` : `${styles["content"]}`}>
                  <p>{data?.ans}</p>
                  </div>
               </div>
              ))}


            </div>
           </div>
           
        </div>
     </div> 


     
</section>

     
)
}

export const faqData=[

   {
      qstn:"What are the room amenities at Club Mahindra Gir?",
      ans:"Lounge in your room, watch your favourite movies with the entire family on television and DVD. And, get your much-needed break-time beverage with a tea/coffee maker available in every room.",

   },
   {
      qstn:"Is parking available at Club Mahindra Gir?",
      ans:"Yes, parking is available at Club Mahindra Gir.",

   },
   {
      qstn:"What are the top USPs of Club Mahindra Gir?",
      ans:"Club Mahindra Gir is nestled right next to the Gir Wildlife Sanctuary, the exclusive home to the majestic Asiatic lions. This resort is a one of a kind jungle resort giving visitors a chance to immerse themselves in nature and witness stunning wildlife, all with the comforts and luxuries of a Club Mahindra resort.",

   },
   {
      qstn:"How do I reach Club Mahindra Gir?",
      ans:"It is possible to reach Club Mahindra Gir by rail, road and air. The nearest airport is at Diu, which is 105 kms away. Otherwise, you can travel by rail to Veraval station which is only 45 kms from the resort.",

   },
   {
      qstn:"What is the best time to visit Club Mahindra Gir?",
      ans:"The best time to visit Gir is in the winter months, between November and February. The mild and pleasant weather will give you a chance to make the most of the outdoor activities and since this season is easier on the animals as well, you’ll have a higher chance to spot the wildlife.",

   },
   {
      qstn:"What are the room amenities at Club Mahindra Gir?",
      ans:"Lounge in your room, watch your favourite movies with the entire family on television and DVD. And, get your much-needed break-time beverage with a tea/coffee maker available in every room.",

   },
   {
      qstn:"Is parking available at Club Mahindra Gir?",
      ans:"Yes, parking is available at Club Mahindra Gir.",

   },
   {
      qstn:"What are the top USPs of Club Mahindra Gir?",
      ans:"Club Mahindra Gir is nestled right next to the Gir Wildlife Sanctuary, the exclusive home to the majestic Asiatic lions. This resort is a one of a kind jungle resort giving visitors a chance to immerse themselves in nature and witness stunning wildlife, all with the comforts and luxuries of a Club Mahindra resort.",

   },
   {
      qstn:"How do I reach Club Mahindra Gir?",
      ans:"It is possible to reach Club Mahindra Gir by rail, road and air. The nearest airport is at Diu, which is 105 kms away. Otherwise, you can travel by rail to Veraval station which is only 45 kms from the resort.",

   },
   {
      qstn:"What is the best time to visit Club Mahindra Gir?",
      ans:"The best time to visit Gir is in the winter months, between November and February. The mild and pleasant weather will give you a chance to make the most of the outdoor activities and since this season is easier on the animals as well, you’ll have a higher chance to spot the wildlife.",

   },
]
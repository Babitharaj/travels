import styles from "./hobbieSection.module.scss"
import Heading from "@/components/Heading/headingComp"
import Link from "next/link"

import { useState } from "react";
import HobbieItem from "./hobbieItem";

export default function HobbieSection(props) {

   var hobbies = props?.uiLayout?.elements;

  // console.log(hobbies);

 const style = {
   initial : {
      backgroundImage:"linear-gradient(white,white)"
   },
   active: {
      backgroundImage:`linear-gradient(rgba(39,164,182,.7),rgba(0,0,0,0.2)), url(${hobbies?.sectionButton?.overlayImg?.value})`,
      zIndex: 2,
      color:'#fff'
   }
 }
 const[selected,setSelected]=useState({
   link:"#",
   checked:false
 })




 return(

 <section className={styles["hobbies_Section"]}>

   <div className="container">

   <div className="row">

      <Heading  heading={hobbies?.sectionTitle?.highlightText?.value} subheading={hobbies?.sectionTitle?.subText?.value}/>
      
      <div className="col-12">
        
        <div className={styles["hobbies_select_main"]} >
             {hobbies?.listingItem?.value?.map((item,index)=>(
                          
           <div className={styles["select_hobby"]} key={index}>
                <HobbieItem style={style} item={item} setSelected={setSelected} selected={selected}/>
           </div>
              
              ))} 
        </div>
        {selected?.checked && <div className={styles["show_all_exp"]}>
           <Link href="#" legacyBehavior><a className="btn-primary" id="show_experience">{hobbies?.sectionButton?.buttonText?.value}</a></Link>
        </div>}
     </div>
  </div>
</div>
</section>
    )
}

export const expIcon=[
   {img:"/assets/images/experience/exp-Icon01.png", title:"Local"},
   {img:"/assets/images/experience/exp-Icon02.png", title:"History & Culture"},
   {img:"/assets/images/experience/exp-Icon03.png", title:"Sports"},
   {img:"/assets/images/experience/exp-Icon01.png", title:"Nature"},
   {img:"/assets/images/experience/exp-Icon01.png", title:"Wellness"},
   {img:"/assets/images/experience/exp-Icon03.png", title:"International"},
   {img:"/assets/images/experience/exp-Icon02.png", title:"Art & Craft"},
   {img:"/assets/images/experience/exp-Icon02.png", title:"Adventure"},
   {img:"/assets/images/experience/exp-Icon01.png", title:"Spiritual"},
   {img:"/assets/images/experience/exp-Icon03.png", title:"Romantic"},
   {img:"/assets/images/experience/exp-Icon02.png", title:"Seasonal"},
   {img:"/assets/images/experience/exp-Icon03.png", title:"ChildFriendly"},
]
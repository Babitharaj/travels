import React from 'react'
// import styles from "./foodListingSec.module.scss"
import FoodListingItem from '../foodListItem/foodListItem'
import Heading from '@/components/Heading/headingComp'

export default function FoodListingSec(props) {

  var foodItems = props?.uiLayout?.elements;
  //  console.log(foodItems);
  
   return (
    <section className="most_loved_destination">
       <div className="container">
        <div className="row">
        <Heading heading={foodItems?.sectionTitle?.highlightText?.value}  subheading={foodItems?.sectionTitle?.subText?.value} indicator={foodItems?.sectionTitle?.indicatorText?.value} link={foodItems?.sectionTitle?.refText?.value}/>
             
       </div>
       
       <FoodListingItem item={foodItems?.listingItem?.value}/>
     
      </div>
    </section>
  )
}

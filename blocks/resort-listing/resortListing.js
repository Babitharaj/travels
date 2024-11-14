// import Link from "next/link";
import styles from "./resortListing.module.scss"
import Heading from "@/components/Heading/headingComp";
import GridwithIcon from "@/components/gridwithIcon/gridwithIcon";

export default function ResortListing(props) {

  var resort = props?.uiLayout?.elements;

  //console.log(resort);

  return (
    <section className="most_loved_destination">
       <div className= "container">
        <div className="row">
         
          <Heading heading={resort?.sectionTitle.highlightText.value} subheading={resort?.sectionTitle.subText.value}
             indicator={resort?.sectionTitle.indicatorText.value}/>

        </div>
     
       <GridwithIcon item={resort?.listingItem?.value}/>
      </div>

    </section>
  );
}


export const resortItem=[
    {img:"/assets/images/resorts/resort-01.avif", title:"Club Mahindra Acacia Palms, Madgaon", des:"Goa, Madgaon", likes:"134248 families loved this"},
    {img:"/assets/images/resorts/resort-02.avif", title:"Club Mahindra Varca", des:"Goa, Varca", likes:"385824 families loved this"},
    {img:"/assets/images/resorts/resort-03.avif", title:"Club Mahindra Gir", des:"Goa, Madgaon", likes:"134248 families loved this"},
]
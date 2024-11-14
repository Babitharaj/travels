import ListingSlider from "../../components/Sliders/listingSlider/listingSlider"
import styles from "./resortListingSlider.module.scss"
import Heading from "../../components/Heading/headingComp"

export default function ResortListingSliderSec(props){

    var slider = props?.uiLayout?.elements;

//   console.log(slider);

    return(
        <section className={styles["listing_slider_main"]}>
        <div className="container">

            <div className="row">
            <Heading heading={slider?.sectionTitle?.highlightText?.value}/>
            </div>
            
            <div className="row">  
                <ListingSlider item={slider?.listingItem?.value}/>
            </div>
        
      
        </div>
    </section> 
    )
}
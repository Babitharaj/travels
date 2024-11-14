// import styles from "./gridSection.module.scss"
import Heading from "@/components/Heading/headingComp";
import SliderOne from "@/components/Sliders/sliderOne/sliderOne";

export default function GridImages(props) {

  var grid = props?.uiLayout?.elements;

  // console.log(grid);

  return (
    <section className="listing_slider_main">
      <div className="container">
        <div className="row">
        <Heading heading={grid?.sectionTitle.highlightText.value} subheading={grid?.sectionTitle.subText.value}/>
        </div>
      
      
       {/* <div className="row">
     */}
      
        <SliderOne item={grid?.listingItem.value}/>
    
    
        {/* </div> */}
    
    </div>
     
    </section>
  );
}

import styles from "./gridTwo.module.scss";
import ImageContentComp from "../../components/gridBlocks/ImgContentComp/ImgContentComp"
import Heading from "../../components/Heading/headingComp"

export default function GridTwo(props) {

  var gridTwo = props?.uiLayout?.elements;

  // console.log(gridTwo);

  return (
    <section className={styles["listing_slider_main"]}>
      <div className="container">
        <div className="row">
        <Heading heading={gridTwo?.sectionTitle?.highlightText?.value}/>
        </div>
      
             <ImageContentComp item={gridTwo?.listingItem?.value}/>
       
              
            </div>
          
       
    </section>
  );
}

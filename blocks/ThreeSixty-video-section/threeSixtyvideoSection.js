
import Heading from "@/components/Heading/headingComp";
import styles from "./threeSixtyvideoSection.module.scss";

export default function ThreeSixtyView(props){

  var viewmap = props?.uiLayout?.elements;

  //console.log(viewmap);

    return(
      
<section className={styles["three-sixty-videos-section"]}>
  <div className="container">
  <div className="row">
    <Heading heading={viewmap?.sectionTitle.highlightText.value} subheading={viewmap?.sectionTitle.subText.value}/>
        </div>
    <div className="row no_wrap overflow-x">
    <div className={styles["dis-bg-img"]}>
      <div className={styles["bg-container"]}>
            {/* <img className="poster-img lazy gm-loaded gm-observing gm-observing-cb" src="/assets/images/360-view-01.avif" alt=""/> */}
            <iframe src={viewmap?.locationMap.mapAddress.value} width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
    </div>
  </div>
</section>
        
    )
}
            
                     
            
                     

                        
                     
                     
            
                     
            
                     
            
                     
            
                     
            
                     
            
                     
            
                     
            
                     
            
                     
            
                     
            
                 
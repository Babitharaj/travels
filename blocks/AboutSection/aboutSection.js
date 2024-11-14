
import styles from "./aboutSection.module.scss"
import Description from "@/components/descriptonSection/description";
export default function About(props){

  var aboutSec = props?.uiLayout?.elements;
  //console.log(aboutSec);
    
    return(

        <div className={styles["more"]}>
        <div className="container">
        <div className="row">
         <div className="col-12">
        <strong>{aboutSec?.sectionTitle?.titleText?.value}</strong>
         {/* <ShowMoreButton data={aboutSec?.longContent?.value} maxItems={1}/>  */}
      <Description data={aboutSec?.longContent?.value} maxItems={1}/>
         </div>
           </div>
            </div>
           </div>
    )
    };
   

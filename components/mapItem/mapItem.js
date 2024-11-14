import styles from "./mapItem.module.scss"
import Heading from "../Heading/headingComp"

export default function MapItem(props){

    var mapConst = props?.uiLayout?.elements;
    
    //console.log(mapConst);
    
    return(
        <section className={styles["mapWrap"] + " mb-0"}>
        <div className="container">
        <div className="row">
        <Heading heading={mapConst?.sectionTitle.highlightText.value} subheading={mapConst?.sectionTitle.subText.value}/>
        </div>
        </div>
        
        <div className={styles.mapContainer + " container-fluid"}>

        <iframe src={mapConst?.locationMap.mapAddress.value} className={styles.map}
        
         styles="border:0;" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        </section>
    )
}
// import styles from "./storiesSec.module.scss"
import Heading from "../../components/Heading/headingComp"
import VideoGallery from "../../components/videoGallery/videoGallery"

export default function StoriesSection(props){
    var stories = props?.uiLayout?.elements;

   // console.log(stories);
    
    return(

<section>
<div className="container">
   <div className="row">
   <Heading heading={stories?.sectionTitle.highlightText.value}
   subheading={stories?.sectionTitle.subText.value}
   indicator={stories?.sectionTitle.indicatorText.value}/>
   </div>
      <div className="row">
      <VideoGallery item={stories?.listingItem.value} />
    </div>
</div>

</section>
    )
}

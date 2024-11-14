import styles from "./videoGallery.module.scss"
import {BsPlayCircle} from "react-icons/bs"
import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
export default function VideoGallery(props){

    const memories = props?.item;
    return(
        <div className={styles["lightboxstories"] + " col-12"}> 
          {memories?.map((item,index)=>(
             
                <div className={styles["image_tn"]} key={index}>
                    {/* <a href="">
                    <img className="" alt="" title="" src={item?.listingImage?.value}/>
                    <i className={styles.playbtn}><BsPlayCircle/></i>
                   
                    </a> */}
                    <LightGallery
                       elementClassNames="custom-classname"
                        download={false}
                         speed={500}
                          playsInline = {true}
                         videojs = {true}
                        plugins={[lgVideo]}
                       
                          >

          <a
         data-lg-size="1280-720"
        data-src="https://www.youtube.com/watch?v=lnKOL9JZP9s&list=PLfSrTgh1KR12d4goYoSvzoDO76_9fvUp6"  
        data-poster={item?.listingImage?.value}
       
          >
        <img
            src={item?.listingImage?.value} className="img-responsive" 
            width={300}
            height={100}
             alt=""/>
      
        </a>

                  </LightGallery>

                </div>    
      ))}  
                
 </div>
    )
}
// export const memories=[
//     {img:"/assets/images/stories/stories-01.avif", video:""},
//     {img:"/assets/images/stories/stories-02.avif", video:""},
//     {img:"/assets/images/stories/stories-03.avif", video:""},
//     {img:"/assets/images/stories/stories-04.avif", video:""},

// ]
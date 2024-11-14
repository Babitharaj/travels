import styles from "./mainBanner.module.scss"
import BannerSlider from "../../components/bannerSlider/bannerSlider"
// import {MdArrowBackIos,MdArrowForwardIos} from "react-icons/md"

export default function MainBanner(props){

  var banner = props?.uiLayout?.elements;
  
return(

<section className={styles["banner"]}>

<BannerSlider item={banner?.imageBanner.value}/>
   
</section>

 )
}
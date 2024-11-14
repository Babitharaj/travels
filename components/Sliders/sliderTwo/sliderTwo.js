import Slider from "react-slick";
import styles from "./sliderTwo.module.scss"
import {TfiArrowCircleRight} from "react-icons/tfi"
import Link from "next/link";

const PrevArrow = ({ onClick }) => (
  <i className={styles["prev-arrow"]} onClick={onClick}>
  
  </i>
);

const NextArrow = ({ onClick }) => (
  <i className={styles["next-arrow"]} onClick={onClick}>
  </i>
);
export default function SliderTwo(props){

const slider = props?.item;
    //console.log(data);

    const settings = {
        
           arrow:true,
           infinite: true,
           speed: 500,
           slidesToShow: 3,
           slidesToScroll: 2,
            prevArrow: <PrevArrow />,
            nextArrow: <NextArrow />,
           responsive: [
           {
             breakpoint: 1024,
             settings: {
               slidesToShow: 3,
               slidesToScroll: 1,
               infinite: true,
               
             }
           },
           {
             breakpoint: 767,
             settings: {
               slidesToShow: 1.5,
               slidesToScroll: 1,
               initialSlide: 1,
               arrow:false,
             }
           },
           {
             breakpoint: 332,
             settings: {
               slidesToShow: 1.2,
               slidesToScroll: 1
             }
           }
         ]
       };
    return(
    
     <>
          <Slider {...settings}>

           {slider?.sliderItem.value?.map((data,index)=>(

                  <div key={index}>
                   <div className={styles["slide-content"]} style={{backgroundColor: data?.itemColor?.value}}>
                      <h4>
                        {data?.itemText.value}
                      </h4>
                      <div>
                        <h3></h3>
                        <p></p>
                      </div>
                      <div className={styles["btn"]}>
                        <Link href="#" legacyBehavior ><a className={styles["btn-primary"]} style={{color: data?.itemColor?.value}}>
                         {slider.sliderButton?.buttonText.value}
                       </a>
                       </Link>
                       <i style={{color: data?.itemColor?.value}}><TfiArrowCircleRight/></i>
                        
                      </div>
                   </div>
                  </div>
               
           ))}
        
         </Slider>
  
     </>

    
    )
}


export const Slide=[
    {higlt:"170+ Partner Hotels and Resorts in India and Globally", color:"#e38530"},
    {higlt:"A World of Privileges with Club M Select", color:"#fcbc52"},
    {higlt:"Prearranged Holidays to Festivals and Events", color:"#98bc3f"},
    {higlt:"Curated Experiential Holidays", color:"#e38530"},
    {higlt:"Exceptional Holidays at 4300+ RCI Resorts", color:"#98bc3f"},

]
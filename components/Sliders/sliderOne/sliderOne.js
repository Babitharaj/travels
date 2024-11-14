import Link from "next/link";
import styles from './sliderOne.module.scss'
import Slider from "react-slick";


export default function SliderOne(props){

  const slideData=props?.item;
 //console.log(slideData)
  
  const settings = {
   // dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 3,
      
      responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 365,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };
  return (
 
      <Slider {...settings}>
      {slideData?.map((item,index)=>(
      
      <div key={index} className={styles["slider-item"]}>
          <div className={styles["thumb"]}>
          <figure>
            <img src={item?.listingImage?.value} alt=""/>
            </figure>
            <figcaption>
             <h3>{item?.itemText?.value}</h3>
            </figcaption>
         
          </div>
          </div>
          ))}
  </Slider>



  );
    
   
        
} 
export const slideData=[
    {img:"/assets/images/sliders/ExpSlider-01.avif", title:"Holiday pe Jaana Kahan Hai"},
    {img:"/assets/images/sliders/ExpSlider-02.avif", title:"Exploring the Mountains"},
    {img:"/assets/images/sliders/ExpSlider-03.avif", title:"Travel Experiences Anew"},
    {img:"/assets/images/sliders/ExpSlider-04.avif", title:"A Date Night with Sizzle and Sparkle"},
    {img:"/assets/images/sliders/ExpSlider-01.avif", title:"Holiday pe Jaana Kahan Hai"},
    {img:"/assets/images/sliders/ExpSlider-02.avif", title:"Exploring the Mountains"},
    {img:"/assets/images/sliders/ExpSlider-03.avif", title:"Travel Experiences Anew"},
    {img:"/assets/images/sliders/ExpSlider-04.avif", title:"A Date Night with Sizzle and Sparkle"}
]
import Link from "next/link";
import styles from './sliderExp.module.scss'
import Slider from "react-slick";


export default function SliderExp(props){

  const data=props?.item;
  //const slideData=props?.slideData;
 //console.log(slideData)
 
  
  const settings = {
   // dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4.2,
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
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      }
    ]
  };
  return (

    <Slider {...settings}>

  {data?.map((item,index)=>(
  <div className={styles["listing_slider_secinner"]} key={index} >
            <figure>
               <Link href={item?.itemLink?.value || "#"}><img className="" src={item?.listingImage?.value}/></Link> 
            </figure> 

            <figcaption>
                <h3>{item?.itemText?.value}</h3>
            </figcaption>
          
  </div>
      ))}
    </Slider>

  );
    
   
        
} 
export const slideItem=[
    {img:"/assets/images/sliders/resortExp-02.avif", title:"Aqua Aerobics"},
    {img:"/assets/images/sliders/resortExp-01.avif", title:"Pool party with family"},
    {img:"/assets/images/sliders/ExpSlider-02.avif", title:"Travel Experiences Anew"},
    {img:"/assets/images/sliders/ExpSlider-04.avif", title:"A Date Night with Sizzle and Sparkle"},
    {img:"/assets/images/sliders/resortExp-02.avif", title:"Aqua Aerobics"},
    {img:"/assets/images/sliders/resortExp-01.avif", title:"Pool party with family"},
    {img:"/assets/images/sliders/ExpSlider-02.avif", title:"Travel Experiences Anew"},
    {img:"/assets/images/sliders/ExpSlider-04.avif", title:"A Date Night with Sizzle and Sparkle"},
]
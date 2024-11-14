import React from 'react'
import styles from "./pdBanner.module.scss"
import Slider from 'react-slick';

export default function PdBanner(props) {

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
       // autoplay:true,
        //autoplayspeed:1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        //nextArrow: <RiArrowRightSLine/>,
        //prevArrow: <RiArrowLeftSLine/>,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
              dots: true
            }
          },
          {
            breakpoint: 320,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]

      };
  return (
   <>
   {/* <div className='container-fluid'> */}
   <Slider {...settings}>
    {props?.banner?.map((item,i)=>(
   <div className={styles["imageContainer"]} key={i}>
    <img  src={item?.sliderImage?.value}/>
  </div>
   ))}
   </Slider>
   {/* </div> */}
    
   </>
  )
}

export const sliderImg=[
    {url:"/assets/images/packages/pdbanner-01.webp"},
    {url:"/assets/images/packages/pdbanner-02.jpg"},
    {url:"/assets/images/packages/pdbanner-03.jpg"},
]
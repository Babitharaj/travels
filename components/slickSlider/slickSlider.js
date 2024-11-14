import React, { useState, useEffect } from 'react';
import {FaChevronLeft,FaChevronRight} from "react-icons/fa";
import styles from './slickSlider.module.scss'
import Slider from "react-slick";

function SlickSlider(props) {
  const data= props?.data;
//console.log(data)

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  useEffect(() => {

    setNav1(slider1);
    setNav2(slider2);

  });


  const settingsMain = {
    
    // useTransform: true,
    slidesToShow: 1,
    swipeToSlide: true,
    // cssEase: 'ease-out',
    // fade: true,
    asNavFor: '.slider-nav'
  };

  const settingsThumbs = {
    slidesToShow: 4,
    //slidesToScroll: 1,
    arrows:false,
    asNavFor: '.slider-for',
    dots:false,
    
    focusOnSelect:true
  };

   const  slidesData =[
    {id:"0", src:"/assets/images/our-resorts/gallery01.png"},
    {id:"1", src:"/assets/images/our-resorts/gallery02.png"},
    {id:"2", src:"/assets/images/our-resorts/gallery01.png"},
    {id:"3", src:"/assets/images/our-resorts/gallery02.png"},
   ]

   const thumbnailItem=[
    {id:"0", src:"/assets/images/our-resorts/gallerythumb01.png"},
    {id:"1", src:"/assets/images/our-resorts/gallerythumb02.png"},
    {id:"2", src:"/assets/images/our-resorts/gallerythumb01.png"},
    {id:"3", src:"/assets/images/our-resorts/gallerythumb02.png"},
   ]

  return (

    // <div className="App">

<div className={styles['gallery']}>
<div className={styles['slider']}>
        <Slider
          {...settingsMain}
          asNavFor={nav2}
          ref={slider => (setSlider1(slider))}
        >

        {data?.map((slide,i) =>
              <img style={{height:"300", width:"800"}} src={slide?.mainImages?.value} key={i}/>
       

          )} 



        </Slider>

        </div>
        <div className={styles['flex-row']}>
          <Slider
                 {...settingsThumbs}
                     asNavFor={nav1}
                    ref={slider => (setSlider2(slider))}>
                                       
                  {data?.map((slide,i) =>
        
                     <div className={styles['thumbnail']}  key={i}>
                            <img height={80} width={100} src={slide?.mainImages?.value}/>
                              </div>

                                  )} 
           </Slider> 
           </div>          
  </div>

    // </div>
  );
}

export default SlickSlider;
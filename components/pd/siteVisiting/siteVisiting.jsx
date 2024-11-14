import React from "react";
import styles from "./siteVisiting.module.scss"
import Slider from "react-slick";
export default function SiteVisiting(props) {

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
              initialSlide: 1
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
      <div className={styles["dayplan-section"]}>
        <div className={styles["sight-seeing"]}>
          <div className={styles["sight-seeing-header"]}></div>
          <div className={styles["sight-seeing-body"]+ " flex-wrap"}>
            <div className={styles["image-wrapper"] }>
            <Slider {...settings}>
             
             {props?.blockFive?.placeVisitLeft?.value?.map((item,i)=>(
                <div className={styles["imageLoader"]} key={i}
                          
                          >
                   <img className="img-fluid" width={243}
                              height={155}
                              src={item?.sliderImage?.value}
                            />
                </div>
                ))}
             </Slider>
             </div>
            <div className={styles["sight-seeing-details"]}>
              <div className={styles["name-highlight"]}>
                <p className={styles["name-title"]+ " mb-0"}>
                {props?.blockFive?.rightCont?.leadingText?.value}
                </p>
                <p className={styles["sub-Text"]+ " mb-0"}>{props?.blockFive?.rightCont?.subText?.value}</p>
              </div>
              <ul className={styles["sight-list"]+ " ps-0"}>
                {props?.blockFive?.sightList?.value?.map((item,i)=>(

              
                <li key={i}>
                  <span>{item?.sightName?.value}</span>
                </li>
                  
                 ))}
              </ul>
              <div className={styles["small-Text"]}>
                <div className={styles["flexOne"]}>
                  <div className={styles["leftCont"]}>
                    <p className={styles["firstText"]}>{props?.blockFive?.rightCont?.labelOne?.value}</p>
                    <p className={styles["secondText"] + " mb-lg-0"}>{props?.blockFive?.rightCont?.valueOne?.value}</p>
                  </div>
                  <div>
                    <p className={styles["firstText"]}>
                    {props?.blockFive?.rightCont?.labelTwo?.value}
                    </p>
                    <p className={styles["secondText"] + " mb-lg-0"}>{props?.blockFive?.rightCont?.valueTwo?.value}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const places=[
    {name:"Valara Waterfalls"},
    {name:"Tata Tea Museum"},
    

]

export const siteImages=[
    {img:"/assets/images/packages/siteImg-01.jpg"},
    {img:"/assets/images/packages/siteMap-01.png"}
]
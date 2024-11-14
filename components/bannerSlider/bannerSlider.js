
import Link from "next/link";
import styles from "./bannerSlider.module.scss";
import React, { Component } from "react";
// import {RiArrowLeftSLine,RiArrowRightSLine} from "react-icons/ri"
import Slider from "react-slick";
// import ModalSmall from "../Modal/modalSmall/modalSmall";


const PrevArrow = ({ onClick }) => (
  <i className={styles["prev-arrow"]} onClick={onClick}>
  </i>
);

const NextArrow = ({ onClick }) => (
  <i className={styles["next-arrow"]} onClick={onClick}>
  </i>
);

function Slide(props) {
 
 const item = props?.item;

 //console.log(item)

    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
       // autoplay:true,
        //autoplayspeed:1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]

      };
      
  return (
    <>

    {/* <div className={styles.paadding} > */}

        {/* <div className="container"> */}

            {/* <div className="row text-left p-2 pb-3"> */}

                 {/* <h2>Related Products</h2>  */}

            {/* </div> */}
           
        
        <Slider {...settings}>
      
            {item?.map((user,index)=>(
                   
                  <div className={styles["card-inner"]}  key={index}>
                         <figure>
                           <img src={user.sliderImage.value} className="img-fluid" alt="" />
                         </figure>
                          
                         <div className="container">
                            <figcaption>
                                  <h1>{user?.heading?.value}</h1>
                                  <p>{user?.subHeading?.value}</p>
                                  {/* <div className={styles["temprature"]} id="">
                                        <span>22.7 ℃</span>
                                   </div> */}
                                  {/* {user.btn?(
                                    <div className={styles["banner-btn"]}><a href="">{user.btn}</a></div>
                                   ):("")} */}

                                  <div className={styles["video_gal_share_sec"]}>
                                  {user?.buttonText?.value ? 
                                       <Link href={user?.buttonOneLink?.value || "#"} legacyBehavior><a style={{ color: '#ffffff', padding: '10px', display: 'inline-block', width: '200px', textAlign: 'center'}}>
                                       {user?.buttonText?.value}
                                        </a></Link> 
                                        : ""}
                                        {/* <div className={styles["secinner"]}>
                                          <div className={styles["icon"] + " ms-0"} >
                                               <img src="/assets/images/gallery-icon.png"/>
                                                  <span>Gallery</span>
                                            </div>
                                         </div>

                                        <div className={styles["secinner"]}>
                      <div className={styles["icon"] + " ms-0"} >
                        <img src="/assets/images/share-icon.png" />
                        <span data-bs-toggle="modal" data-bs-target="#exampleModal"
                        >
                          Share
                        </span>
                       
                      </div>
                  </div> */}
                                   </div>
                          </figcaption>
                      </div>
                       
                    </div> 
                        
                    ))}  
          
        
          </Slider>
    
    

    
    {/* </div> */}
    </>
  )}
    export default Slide;

    export const image=[
        {url:"/assets/images/banner-06.avif", higlt:"", sub:"", btn:""},
        {url:"/assets/images/banner-02.webp", higlt:"We Cover India, You Discover India", sub:"Club Mahindra Resorts", btn:"Become A Member"},
        {url:"/assets/images/banner-03.avif", higlt:"", sub:"", btn:""},
        {url:"/assets/images/banner-01.webp", higlt:"More than a Vacation, a Discovery", sub:"Club Mahindra Udaipur, Rajasthan", btn:"Become A Member"},
      
        

    ]
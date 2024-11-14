import Slider from "react-slick";
import React, { useEffect, useState } from "react";

import styles from "./bannerThree.module.scss";
import ModalSmall from "@/components/Modal/modalSmall/modalSmall";

import BootstrapModal from "@/components/Modal/bootstrapModal/bootstrapModal";
// import { FaShareAlt } from 'react-icons/fa';
// import { GrGallery } from 'react-icons/gr';
import ModalStructure from "@/components/Modal/ModalStructure/modalStructure";


const PrevArrow = ({ onClick }) => (
  <i className={styles["prev-arrow"]} onClick={onClick}>
 
  </i>
);

const NextArrow = ({ onClick }) => (
  <i className={styles["next-arrow"]} onClick={onClick}>
    
  </i>
);

export default function BannerThree(props) {

  var bannerThree = props?.uiLayout?.elements;

  //console.log(bannerThree);

 
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
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: false,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className={styles["banner"]}>
      <div className={styles["overlay"]}></div>

      <Slider {...settings}>
        {bannerThree?.imageBanner?.value?.map((item, index) => (
          
            <div
              className={styles["item"]}
              key={index}
            >
              <figure>
                <img alt="" className="img-fluid" src={item?.sliderImage?.value} />
              </figure>

              <div className="container">
                <figcaption>
                  <h1>{item?.heading?.value}</h1>
                   <p>{item?.subHeading?.value}</p>

                  <div className={styles["video_gal_share_sec"]}>
                    <div className={styles["secinner"]}>
                    {bannerThree?.contents?.galleryIcon?.value ? <div
                        
                        className={styles["icon"]}
                        data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                      >
                        <img src={bannerThree?.contents?.galleryIcon?.value} data-bs-toggle="modal" data-bs-target="#staticBackdrop"/>
                        <span data-bs-toggle="modal" data-bs-target="#staticBackdrop">Gallery</span>
                       
                      </div>: ""}
                    </div>

                    <div className={styles["secinner"]}>
                      <div className={styles["icon"]}  data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <img src={bannerThree?.contents?.shareIcon?.value} />
                        <span
                        data-bs-toggle="modal" data-bs-target="#exampleModal"
                        >
                          Share
                        </span>
                       
                      </div>
                    </div>
                  </div>
                </figcaption>
              </div>
              <div className={styles["right-content"] +" d-lg-block"}>
                <ModalSmall width={'350px'} item={bannerThree?.formContent}/>
              </div>
            </div> 
        ))}
      </Slider>
      <div className={"col-sm-12 d-lg-none"}>
          <ModalSmall  item={bannerThree?.formContent}/>
        </div>
      <BootstrapModal share={bannerThree?.shareModal?.value}/>
      <ModalStructure gallery={bannerThree?.galleryImages?.value} />
     
    
    </section>
  );
}

export const banner = [
  {
    img: "/assets/images/our-resorts/bann-01.avif",
    head: "Club Mahindra Gir Resort in Junagadh, Gujarat",
  },
  {
    img: "/assets/images/our-resorts/bann-02.avif",
    head: "Club Mahindra Gir Resort in Junagadh, Gujarat",
  },
  {
    img: "/assets/images/banner-06.avif",
    head: "Club Mahindra Gir Resort in Junagadh, Gujarat",
  },
  {
    img: "/assets/images/banner-02.webp",
    head: "Club Mahindra Gir Resort in Junagadh, Gujarat",
  },
];

export const modal = [
  {
    name: "Facebook",
    icon: "/assets/images/footer/fb-icon.avif",
  },
  {
    name: "Linkedin",
    icon: "/assets/images/footer/icon-ln.png",
  },
  {
    name: "Twitter",
    icon: "/assets/images/footer/twitter-icon.avif",
  },
  {
    name: "Gmail",
    icon: "/assets/images/footer/email-icon.png",
  },
  {
    name: "Whatsapp",
    icon: "/assets/images/footer/icon-whatsapp.png",
  },
];

import React from 'react'
import styles from "./pkgSmallBanner.module.scss"
import Slider from 'react-slick'

export default function PkgSmallBanner(props) {
  const data=props?.item;
  return (

    <div className={styles["banner-flex"]}>
       
    <div className={styles["adtech-desktop"]}>

        <div className={styles["item-wrap"]}>
           
          <img src={data?.smallBanner?.smallImage?.value} alt="" style={{width: '100%', height: '100%', borderRadius: '1px'}}/>
         
        </div>

        </div>     
 </div>

  )
}

export const small=[
{image:"assets/images/packages/pkgBannerSmall.jpg"},
// {image:"assets/images/packages/pkgBannerSmall02.jpg"},
// {image:"assets/images/packages/pkgBannerSmall03.jpg"},
]
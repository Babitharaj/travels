// import React, { useEffect, useState } from 'react'
import styles from "./gridThreeComp.module.scss"
// import axios from 'axios';

export default function GridThreeComp(props){
 
 


    return(
        <>
        <div className={styles["row-wrap"] +" row"}>
        {data?.map((item,index)=>(
        <div className={styles["listing_slider_Sec"]+" pe-0"} key={index}>
        <div className={styles["listing_slider_secinner"]}>
                  <figure>
                      <img  src={item?.listingImage?.value}/>
                  </figure> 

                  <figcaption>
                      <h3>{item?.itemText?.value}</h3>
                      <p>{item?.subText?.value}</p>
                 </figcaption>
                 
        </div>
          </div>
          ))}
        </div> 
          
        </>
    )
}

export const slideItem=[
    {img:"/assets/images/resorts/gridThree-01.avif", title:"Symphony Palms, Havelock Island", sub:"Port Blair, Andaman and Nicobar Islands "},
    {img:"/assets/images/resorts/gridThree-02.avif", title:"Symphony Summer Sands, Neil Island", sub:"Port Blair, Andaman and Nicobar Islands"},
    {img:"/assets/images/resorts/gridThree-03.avif", title:"Symphony Samudra", sub:"Port Blair, Andaman and Nicobar Islands"},
] 
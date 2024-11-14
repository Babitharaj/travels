import Slider from "react-slick";
import styles from "./gridBlockOne.module.scss"
import Link from "next/link";

export default function GridBlockOne(props){

  const offer=props?.item;
  const settings = {
    // dots: true,
       infinite: true,
       speed: 500,
       slidesToShow: 2,
       
       
       responsive: [
       {
         breakpoint: 1024,
         settings: {
           slidesToShow: 2,
          //  slidesToScroll: 2,
           infinite: true,
           
         }
       },
       {
         breakpoint: 767,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 1,
           initialSlide: 2
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

    return(

      <>
      <Slider {...settings} className={styles["common-slider"]}>
            {offer?.map((items,index)=>(

            <div
              className={styles["offer"] +" d-flex flex-wrap"}
              key={index}
             
            >
              <div className={[styles["offer_wrap"], index == 0 && 'ms-md-auto'].filter(Boolean).join(" ")}>
                <figure>
                  <img
                    className=""
                    src={items?.listingImage?.value}
                  />
                </figure>
                <figcaption>
                  <div className={styles["cont"]}>
                    <span>{items?.itemText?.value}</span>
                    <p>
                    {items?.subText?.value}
                    </p>
                  </div>
                  <div className={styles["btn"]}>
                    <Link href="#" legacyBehavior>
                    <a
                      className="btn-primary"
                    >
                      Avail Offer
                    </a>
                    </Link>
                  </div>
                </figcaption>
              </div>
            </div>

            ))}
         </Slider>

</>  
    )
}

export const offers=[
    {img:"/assets/images/offer-01.avif", title:"Apple iPhone 14 Series", sub:"Become a member and walk away with the latest Apple iPhone 14 series",},
    {img:"/assets/images/offer-02.avif", title:"Incredible Samsung Note 20 Ultra", sub:"Become a member and own Samsung Note 20 Ultra",}
  ]
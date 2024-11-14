import SliderHeading from "@/components/packageComps/SliderHeading/sliderHeading";
import styles from "./packageSlider.module.scss"
import Slider from "react-slick";
import Link from "next/link";

export default function PackageSlider(props) {

  var pkgSlider = props?.uiLayout?.elements;
    console.log(pkgSlider);

  
    const settings = {
        // dots: true,
           infinite: true,
           speed: 500,
           slidesToShow: 7.2,
           slidesToScroll: 2,
           
           responsive: [
          
           {
            breakpoint: 1400,
            settings: {
              slidesToShow: 6.5,
              slidesToScroll: 2,
              infinite: true,
              
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 2,
              infinite: true,
              
            }
          },
           {
             breakpoint: 767,
             settings: {
               slidesToShow: 2.3,
               slidesToScroll: 2,
               initialSlide: 2
             }
           },
           {
             breakpoint: 320,
             settings: {
               slidesToShow: 1.8,
               slidesToScroll: 1
             }
           }
         ]
       };
  return (
    <section>
    <div className="container">
    <div className={styles["pkg-slider"]}>
      <SliderHeading data={pkgSlider?.sectionTitle}/>

      <div className={styles["commonSlider__info"]}>
        <div className={styles["landingCardSlider"]}>
     <Slider {...settings}>

         {pkgSlider?.listingItem?.value?.map((item,i)=>(
         
        <div className={styles["slider-item"]}>
            <div className={styles["itemCard"]+ " align-items-center"} key={i}>
             
              <figure>
                <Link href={item?.refText?.value || "#"}><img src={item?.itemImage?.value} alt="" className="img-fluid"/></Link> 
              </figure>
             
              <figcaption>
                <p className={styles["Text-main"] + " mb-0"}>
                {item?.itemText?.value}
                </p>
                {item?.costText?.value ? <p className={styles["sub-text"]+ " mb-0"}>
                {item?.costText?.value}
                </p> : "" }
                </figcaption>
              
            </div>
         </div> 
          ))}
     </Slider>
        </div>
      </div>
    </div>
    </div>
    </section>
  );
}


export const PkgSlider=[
    {img:"/assets/images/packages/pkgSlider01.webp", name:"Himachal", pkg:"Starting ₹9,800 atPer person"},
    {img:"/assets/images/packages/pkgSlider02.webp", name:"Goa", pkg:"Starting ₹4,100 atPer person"},
    {img:"/assets/images/packages/pkgSlider03.webp", name:"Kashmir", pkg:"Starting ₹9,300 atPer person"},
    {img:"/assets/images/packages/pkgSlider04.webp", name:"Kerala ", pkg:"Starting ₹8,200 atPer person"},
    {img:"/assets/images/packages/pkgSlider05.webp", name:"Andaman Sale is Live", pkg:"Starting ₹12,100 atPer person"},
    {img:"/assets/images/packages/pkgSlider06.webp", name:"Ladakh", pkg:"Starting ₹19,300 atPer person"},
    {img:"/assets/images/packages/pkgSlider07.webp", name:"Thailand ", pkg:"Starting ₹30,900 atPer person"},
    {img:"/assets/images/packages/pkgSlider02.webp", name:"Coorg/ Ooty", pkg:"Starting ₹8,600 atPer person"},
    {img:"/assets/images/packages/pkgSlider05.webp", name:"North-East ", pkg:"Starting ₹9,700 atPer person"},
    {img:"/assets/images/packages/pkgSlider01.webp", name:"Maldives ", pkg:"Starting ₹₹36,500 atPer person"},
]
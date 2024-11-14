import styles from "./listingSlider.module.scss"
import Slider from "react-slick";

const PrevArrow = ({ onClick }) => (
  <i className={styles["prev-arrow"]} onClick={onClick}>
 
  </i>
);

const NextArrow = ({ onClick }) => (
  <i className={styles["next-arrow"]} onClick={onClick}>
    
  </i>
);

export default function ListingSlider(props){
  const data=props?.item;

    const settings = {
          arrow:true,
           infinite: true,
           speed: 500,
           slidesToShow: 4,
           slidesToScroll: 3,
           prevArrow: <PrevArrow />,
           nextArrow: <NextArrow />,
           
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
             breakpoint: 767,
             settings: {
               slidesToShow: 2.2,
               slidesToScroll: 2,
               initialSlide: 2
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

    return(
       
            // <div className="slick-track" style={{opacity:'1', width:'1140px', transform:'translate3d(0px, 0px, 0px)'}}>
                <Slider {...settings}>

                {data?.map((item,index)=>(
               <div className={styles["listing_slider_Sec"]}  role="option" key={index}  style={{width: '285px'}}>
              <div className={styles["listing_slider_secinner"]}>
                        <figure>
                            <img className="" src={item?.listingImage?.value}/>
                        </figure> 

                        <figcaption>
                            <h3>{item?.itemText?.value}</h3>
                            <p className="location">{item?.subText?.value}</p>
                        </figcaption>
                        {/* <a onclick="javascript:ClubMahindraGAResort('resort_clicked',this)" title="Club Mahindra Kensville Golf Resort, Ahmedabad" href="https://www.clubmahindra.com/our-resorts/kensville-golf-club-resort-in-ahmedabad"></a> */}
              </div>
                </div>
                  ))}
                </Slider>
            
                // </div>
                                
            
           
    )
}


export const slideItem=[
    {img:"/assets/images/resorts/listing-slider-01.avif", title:"Club Mahindra Kensville Golf Resort, Ahmedabad", sub:"Ahmedabad, Gujarat "},
    {img:"/assets/images/resorts/listing-slider-02.avif", title:"Club Mahindra Gir", sub:"Junagadh, Gujarat"},
    {img:"/assets/images/resorts/listing-slider-03.avif", title:"Club Mahindra Dwarka", sub:"Dwarka, Gujarat"},
    {img:"/assets/images/resorts/listing-slider-04.avif", title:"Boulevard 9", sub:"Nadiad, Gujarat"},
    {img:"/assets/images/resorts/listing-slider-01.avif", title:"Club Mahindra Kensville Golf Resort, Ahmedabad", sub:"Ahmedabad, Gujarat "},
    {img:"/assets/images/resorts/listing-slider-02.avif", title:"Club Mahindra Gir", sub:"Junagadh, Gujarat"},
    {img:"/assets/images/resorts/listing-slider-03.avif", title:"Club Mahindra Dwarka", sub:"Dwarka, Gujarat"},
    {img:"/assets/images/resorts/listing-slider-04.avif", title:"Boulevard 9", sub:"Nadiad, Gujarat"},
]
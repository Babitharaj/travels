import styles from "./carouselComp.module.scss"
import Slider from 'react-slick'
// import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const PrevArrow = ({ onClick }) => (
  <i className={styles["prev-arrow"]} onClick={onClick}>
  
  </i>
);

const NextArrow = ({ onClick }) => (
  <i className={styles["next-arrow"]} onClick={onClick}>
  </i>
);

export default function Carousel(props) {

  var carousel = props?.uiLayout?.elements;

 // console.log(carousel);

  const settings = {
    
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
          
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
   
      <section className={styles["happy_hub_slider"]}>
            <Slider {...settings}>
               {carousel?.imageBanner?.value?.map((data,index)=>(
             
              <div
                className={styles["item"]}
                key={index}
              >
                <figure>
                  <img className="" alt="" src={data?.sliderImage?.value}/>
                </figure>
              </div>
              ))}
              </Slider>
        <div className={styles["tabs"]}>
          <div className={styles["tab-container"]+ " container"}>
            <div className={styles["happy_hub_content"]}>
              <img
                className="img-fluid"
                alt="happyhubcontent"
                title="happyhubcontent"
                src={carousel?.hubImg?.logoImage?.value}
              />
            </div>
            <div className={styles["resort-tabs-wrapper"]}>

           {carousel?.btnIndicator?.value?.map((item,i)=>(
              <div className={styles["slider-dots-action"]} key={i}>

                <label>{item?.indicatorText?.value}</label>
                {/* <ul>
                  <li>
                    <a href="#" className="">
                      &nbsp;
                    </a>
                  </li>
                </ul> */}
              </div>
              ))}
      
            </div>
          </div>
        </div>
      </section>
    
  );
}
export const sliderData=[
   {img:"/assets/images/sliders/hub-01.avif"},
   {img:"/assets/images/sliders/hub-02.avif"},
   {img:"/assets/images/sliders/hub-01.avif"},
]

export const tab=[

  {name:"Indoor",links:""},
  {name:"Outdoor",links:""},
  {name:"Workshops",links:""},
]
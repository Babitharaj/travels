import Slider from "react-slick";
import styles from "./packageBanner.module.scss"

const PrevArrow = ({ onClick }) => (
  <i className={styles["prev-arrow"]} onClick={onClick}>
  
  </i>
);

const NextArrow = ({ onClick }) => (
  <i className={styles["next-arrow"]} onClick={onClick}>
  </i>
);

export default function PackageBanner(props) {

  var pkgBanner = props?.uiLayout?.elements;
   // console.log(pkgBanner);

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    //  autoplay:true,
    // autoplayspeed:500,
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
         
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: false,
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
  <section className="" style={{marginTop:"10%"}}>
    <div className="container mb-0">
      <div className={styles["herobanner"]}>
      <Slider {...settings}> 

      {pkgBanner?.imageBanner?.value?.map((data,i)=>(

            <div className={styles["newAdtech"]} key={i}>
            <figure>
              <img src={data?.sliderImage?.value} className="card-img  img-fluid" alt="" />
            </figure>

           </div> 
      
      ))} 
       
      </Slider>      
    </div>
    </div>
  </section> 
  );
}

export const hero=[
  {image:"assets/images/packages/hero01.jpg"},
  {image:"assets/images/packages/hero02.webp"},
  {image:"assets/images/packages/hero03.webp"}
]
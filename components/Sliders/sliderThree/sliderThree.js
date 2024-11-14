import styles from "./sliderThree.module.scss";

import Slider from "react-slick";

const PrevArrow = ({ onClick }) => (
  <i className={styles["prev-arrow"]} onClick={onClick}>
 
  </i>
);

const NextArrow = ({ onClick }) => (
  <i className={styles["next-arrow"]} onClick={onClick}>
    
  </i>
);

export default function SliderThree(props) {

  var collab = props?.uiLayout?.elements;

  //console.log(collab);

   
    const settings = {
           arrow:true,
           infinite: true,
           speed: 500,
           slidesToShow: 4,
           slidesToScroll: 2,
           prevArrow: <PrevArrow />,
           nextArrow: <NextArrow />,
           responsive: [
           {
             breakpoint: 1024,
             settings: {
               slidesToShow: 2,
               slidesToScroll: 2,
               infinite: true,
               
             }
           },
           {
             breakpoint: 767,
             settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
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
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-12">     
          
                    <Slider {...settings} className={styles["prospectAwardSlick"]}>
                    {collab?.sliderContent?.value?.map((item,index)=>(
                    <div className={styles["prospectAwardSlickBox"]} key={index}>
                      <div className={styles["prosAwardSlickInner"]}>
                        <img
                          src={item?.icon?.value}
                          className="img-fluid"
                        />
                        <h4>
                          {item?.highlightText?.value}<span>2023</span>
                        </h4>
                      </div>
                    </div>
                  ))}

                   </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}

export const choiceData=[
    {title:"Great Place to Work Top 100", img:"/assets/images/awards/awards-02.webp"},
    {title:"Top 25 Hotels for Families - Club Mahindra Mashobra", img:"/assets/images/awards/award-01.avif"},
    {title:"Top 25 Hotels for Families - Club Mahindra Emerald Palms", img:"/assets/images/awards/award-01.avif"},
    {title:"Top 25 Hotels for Families: Club Mahindra Kanatal", img:"/assets/images/awards/award-01.avif"},
    {title:"Top 25 Hotels for Families - Club Mahindra Mashobra", img:"/assets/images/awards/award-01.avif"},
    {title:"Top 25 Hotels for Families - Club Mahindra Emerald Palms", img:"/assets/images/awards/award-01.avif"},
]
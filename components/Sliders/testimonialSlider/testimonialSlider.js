import styles from "./testimonialSlider.module.scss"
import Slider from "react-slick";

const PrevArrow = ({ onClick }) => (
  <i className={styles["prev-arrow"]} onClick={onClick}>
  
  </i>
);

const NextArrow = ({ onClick }) => (
  <i className={styles["next-arrow"]} onClick={onClick}>
  </i>
);

export default function TestimonialSlider(props){

  const items = props?.items;

    const settings = {
           arrow:true,
           infinite: true,
           speed: 500,
           slidesToShow: 3,
           slidesToScroll: 2,
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
               slidesToShow: 1.5,
               slidesToScroll: 1,
               initialSlide: 1
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

        <Slider {...settings}>
          
        {items?.listingItem?.value?.map((item,index)=>(
          // <div className={styles["testimonial_slider"]}>
       <div className={styles["facebook-slick"]} key={index}>
        <div className={styles["content_Sec_inner"]}>
          <div className={styles["content_Sec"]}>
            <figure>
              <img
                className=""
                alt="testimonial1"
                title="testimonial1"
                src={item?.listingImage?.value}
              />
            </figure>
            <div className={styles["cont"]}>
              <p className="mb-0">
              {item?.descriptionText?.value}
              </p>
            </div>
          </div>
          <div className={styles["info"]}>
            <div className={styles["profile_wrap"]}>
              <figure>
                <img
                  src={items?.Profile?.profileIcon?.value}
                  alt="testimonial1"
                  title="testimonial1"
                  className=""
                />
              </figure>
              <div className={styles["profile"]}>
                <h4>{item?.profileName?.value}</h4>
                <p className="mb-0">{item?.socialMedia?.value}</p>
              </div>
            </div>
            <div className={styles["icon"]} style={{backgroundImage:`url(${items?.Profile?.socialMediaIcon?.value})`}}></div>
          </div>
        </div>
        </div>
        // </div>
        ))}
        
   </Slider>

    )
}

export const testimonial=[
    {img:"/assets/images/membership/testimonial-01.png", person:"Kiran Oberoi", cmnt:"It was like our own personal space to relax in the lap of nature at Binsar Valley."},
    {img:"/assets/images/membership/testimonial-02.png", person:"Arshi Jain", cmnt:"I felt like a royal during my Rajasthan holiday with Club Mahindra, from experiencing a royal welcome to a royal dinner setting created for us."},
    {img:"/assets/images/membership/testimonial-03.png", person:"Bhaskar", cmnt:"With Club Mahindra, we pay almost the same rate for a holiday in India or abroad and no worries about changing exchange rates. As we plan in advance, we also get good airfare deals."},
    {img:"/assets/images/membership/testimonial-04.png", person:"Venkatesh", cmnt:"Club Mahindra has actually brought us closer to our children as we now take holidays together regularly and are able to spend quality time together."},
    {img:"/assets/images/membership/testimonial-06.png", person:"Arshi Jain", cmnt:"It was like our own personal space to relax in the lap of nature at Binsar Valley."},
    {img:"/assets/images/membership/testimonial-02.png", person:"Kiran Oberoi", cmnt:"I felt like a royal during my Rajasthan holiday with Club Mahindra, from experiencing a royal welcome to a royal dinner setting created for us."},
    {img:"/assets/images/membership/testimonial-03.png", person:"Arshi Jain", cmnt:"With Club Mahindra, we pay almost the same rate for a holiday in India or abroad and no worries about changing exchange rates. As we plan in advance, we also get good airfare deals."}
]
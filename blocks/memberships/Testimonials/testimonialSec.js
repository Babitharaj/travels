import styles from "./testimonialSec.module.scss";
import TestimonialSlider from "../../../components/Sliders/testimonialSlider/testimonialSlider"

export default function Testimonials(props) {
  var testi = props?.uiLayout?.elements;

   //console.log(testi);
  return (
    <section className={styles["testimonials"]}>
      <div className={styles["container"] + " container"}>
        
         <TestimonialSlider items={testi}/>
        
      </div>
    </section>
  );
}

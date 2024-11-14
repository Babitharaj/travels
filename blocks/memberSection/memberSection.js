import styles from "./memberSection.module.scss";
import Heading from "@/components/Heading/headingComp";
import SliderTwo from "@/components/Sliders/sliderTwo/sliderTwo";

export default function MemberSection(props) {

  var member = props?.uiLayout?.elements;

  //console.log(member);
  return (
  
  <section className="most_loved_destination member_benifits">
      <div className="container">
        <div className="row">
          <Heading
            heading={member?.sectionTitle.highlightText.value}
            subheading={member?.sectionTitle.subText.value}
          />
        </div>
        <div className={styles["members_benifits_sec"]}>

          <SliderTwo item={member} />
        </div>
      </div>
   </section>
  );
}



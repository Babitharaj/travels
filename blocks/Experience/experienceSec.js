import Heading from "../../components/Heading/headingComp"
import styles from "./experienceSec.module.scss"
import Link from "next/link";

export default function Experience(props) {

  var experience = props?.uiLayout?.elements;
  //console.log(experience);

  return (
    <section className={styles["experience"]}>
      <div className=" container">
        <div className="row">
          <Heading text={experience} heading={experience?.sectionTitle?.highlightText?.value} subheading={experience?.sectionTitle.subText.value}/>
        </div>

        <div className="row">

        {experience?.listingItem?.value?.map((item,index)=>(

          <div className={styles["expItem"] + " col-6"} key={index}>
            <div className={styles["exp_inner"]}>
              <figure>
                <img
                  className="img-fluid"
                  alt="signature experience"
                  title="signature experience"
                  src={item?.listingImage?.value}
                />
              </figure>
              <figcaption>
                <h3>{item?.itemText.value}</h3>
              </figcaption>
        
            </div>
          </div>
           ))}
        
        </div>
     <div className="row justify-content-center">
        <div className={styles["join_club_sec"]}>
          <Link href={experience?.sectionButton?.buttonLink.value ||"#"} legacyBehavior >
          <a className="btn-primary">
           {experience?.sectionButton?.buttonText.value}
          </a>
          </Link>
         </div>
        </div>
      </div>
    </section>
  );
}


export const expItem =[
    {img:"/assets/images/experience/Experience-01.avif",title:"Signature Experiences"},
    {img:"/assets/images/experience/Experience-02.avif",title:"Children Love These"},
    {img:"/assets/images/experience/Experience-03.avif",title:"Dining Experiences"},
    {img:"/assets/images/experience/Experience-04.avif",title:"Stay Experiences"},
]
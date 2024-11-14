
// import Heading from "../../../components/Heading/headingComp"
import styles from "./membershipForm.module.scss"
import FormSection from "../../../components/formComp/formComp"

export default function MembershipForm(props) {

  var Mform = props?.uiLayout?.elements;

  //console.log(Mform);

  return (
    <section id="join-Club" className={styles["resort_detail_form"]} style={{backgroundImage:`url(${Mform?.leadSectionBg?.backgroundImage?.value})`}}>
      <div className="container-lg">
        <div className="row">
        <div className="col-12">
             <span className={styles["title"]+ " mb-2 "}>{Mform?.Form?.FormTitle?.value}</span>
          </div>
        {/* <Heading heading="Invest in a lifetime of wonderful holiday memories"/> */}
        </div>
        <div className="row mx-md-0">
         <FormSection data={Mform?.Form}/>
          <div className={styles["award_img"]}>
            <figure>
              <img
                title="award"
                src={Mform?.leadSectionBg?.awardImg?.value}
              />
            </figure>
            <figcaption>
              <h3>{Mform?.leadSectionBg?.awardNumber?.value}</h3>
              <h4>
              {Mform?.leadSectionBg?.awardText?.value}
              </h4>
            </figcaption>
          </div>
        </div>
      </div>
    </section>
  );
}

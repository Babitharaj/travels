import styles from "./membershipBenefits.module.scss"
import Link from "next/link";

export default function MembershipBenefits(props) {
  
  var memberbenf = props?.uiLayout?.elements;

  // console.log(memberbenf);

  return (
    <section className={styles["club_mahindra_member"]}>
      <figure>
        <img src={memberbenf?.bgimageBanner?.bgImage?.value} alt="membership" title="membership" className="" />
      </figure>
      <div className={styles["container"] + " container"}>
        <div className={styles["row"] + " row"}>
          <div className={styles["col-left"] + " col-md-6"}>
          {/* <span><img src="/assets/images/membership/benifit-left-img.png"/></span> */}
            <h3 className="mb-0">{memberbenf?.leftContent?.textOne?.value}</h3>

            <h4>{memberbenf?.leftContent?.textTwo?.value}</h4>
           <Link href="#" legacyBehavior><a className="more" >
            {memberbenf?.leftContent?.textThree?.value}
            </a></Link> 
             </div>
          <div className={styles["col-right"]+ " col-md-6"}>
            <div className={styles["club_mahindra_member_inner"]}>
              <h3 className="mb-0">{memberbenf?.rightContent?.leadText?.value}</h3>
              <div className={styles["benifits"]}>
                <p className="mb-0">
                {memberbenf?.rightContent?.subText?.value}
                </p>
              </div>

              <p className={styles["doubts"]}>{memberbenf?.rightContent?.textThree?.value}</p>
            </div>
            <div
             
              className={styles["holiday_exp"]}
            >
             <Link href="#" legacyBehavior>
              <a>
             {memberbenf?.rightContent?.buttonText?.value}
              </a></Link>    
                </div>
          </div>
        </div>
      </div>
    </section>
  );
}

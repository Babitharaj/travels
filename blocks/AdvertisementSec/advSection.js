import Link from "next/link";
import styles from "./advSection.module.scss"
export default function Advertisement(props) {

  var adv = props?.uiLayout?.elements;
    
  //console.log(adv);

  return (
    <section className={styles["popular_resort_chain"]}>
      <div className="container">
        <div className="row align-items-center d-flex flex-wrap">
          <div className={styles["adv"]+ " col-12"}>
            <div className={styles["resort_chain"]}>
              <div className={styles["icon"]}>
                <img className="" src={adv?.imgText?.imageIcon?.value} alt=""/>
                <br />
              </div>

              <h3>{adv?.imgText?.contentText?.value}</h3>
              {/* <div className="time_travel_award">
                <div className="award_icon">
                  <br />
                </div>

                <h4>Times Travel Award 2019</h4>
              </div> */}
            </div>
          </div>
          <div className={styles["adv"]+ " col-12"}>
            <div className={styles["resort_exp_count"]}>
              {adv?.multipleContent?.value?.map((data,index)=>(

              <div className={styles["resort_exp_count_inner"]} key={index}>
                <div className={styles["icon"]}>
                  <img src={data?.icon?.value} alt=""/>
                </div>
                <br />
                <div className="txt">
                  <Link href={data?.textLink?.value||"#"} legacyBehavior>
                    <a>
                    <h3 style={{color: data?.subTextColor?.value}} className="mb-0">{data?.highlightText?.value}</h3>

                    <h4 className="mb-0">{data?.highlightSubText?.value}</h4>
                    </a>
                    </Link>
                </div>
              </div>
                ))}
                
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export const adver=[
  {img:"/assets/images/adver/adv4.png", sts:"100+", name:"RESORTS", color:"#e38530", lnk:"/resorts"},
  {img:"/assets/images/adver/adv2.png", sts:"2000+", name:"EXPERIENCES", color:"#13a0cb", lnk:"/experiences"},
]  

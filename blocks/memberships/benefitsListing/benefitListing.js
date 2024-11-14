import Link from "next/link";
import styles from "./benefitListing.module.scss"
import Heading from "../../../components/Heading/headingComp"
import {MdKeyboardArrowRight} from 'react-icons/md'
export default function BenefitListing(props){

  var benefitList = props?.uiLayout?.elements;

  // console.log(benefitList);
    return(

    
    <section>
      <div className="container">
        <div className="row">
        <Heading heading={benefitList?.sectionTitle?.highlightText?.value} subheading={benefitList?.sectionTitle?.subText?.value}/>  
          <div className="col-12">
            <div className={styles["member_bebifits"]}>

              {benefitList?.listingItem?.value?.map((item,index)=>(

              <div className={styles["member_benifit_sec"]} key={index}>
               
                    <div className={`${styles["benifits_inner"]} ${styles["inner"]}`}>
                      <figure>
                        <img className="" title="resort-benefits" alt="" src={item?.listingImage?.value}/>
                      </figure>
                      <figcaption>
                        <h4>{item?.itemText?.value}</h4>
                        <div className={styles["cont"]}>
                          <div className={styles["resorts_wrap"]}>
                            <span></span>
                          </div>
                        </div>
                      </figcaption>
                    </div>
                 
              </div>
              ))}  
              {/* <div className="member_benifit_sec">
                <Link href="" legacyBehavior>
                <a>
                  <div className="benifits_inner">
                    <figure>
                      <img className="" title="" alt="" src="" />
                    </figure>
                    <figcaption>
                      <h4>2000+ Unique Experiences</h4>
                      <div className="cont resorts">
                        <div className="cont resorts_wrap">
                          <span></span>
                        </div>
                      </div>
                    </figcaption>
                  </div>
                </a></Link>
              </div>
              <div className="member_benifit_sec">
                <Link href="" legacyBehavior>
                  <a>
                    <div className="benifits_inner">
                      <figure>
                        <img className="" title="" alt="" src="" />
                      </figure>
                      <figcaption>
                        <h4>Premium Spacious Rooms</h4>
                        <div className="cont resorts">
                          <div className="cont resorts_wrap">
                            <span></span>
                          </div>
                        </div>
                      </figcaption>
                    </div>
                  </a>
                </Link>
              </div>
              <div className="member_benifit_sec">
                <Link href="" legacyBehavior>
                  <a>
                    <div className="benifits_inner">
                      <figure>
                        <img className="" title="" alt="" src="" />
                      </figure>
                      <figcaption>
                        <h4>Club M Select</h4>
                        <div className="cont resorts">
                          <div className="cont resorts_wrap">
                            <span></span>
                          </div>
                        </div>
                      </figcaption>
                    </div>
                  </a>
                </Link>
              </div>
              <div className="member_benifit_sec">
                <Link href="" legacyBehavior>
                  <a>
                    <div className="benifits_inner">
                      <figure>
                        <img
                          className="lazy gm-loaded gm-observing gm-observing-cb"
                          title=""
                          alt=""
                          src=""
                        />
                      </figure>
                      <figcaption>
                        <h4>Global Presence</h4>
                        <div className="cont resorts">
                          <div className="cont resorts_wrap">
                            <span></span>
                          </div>
                        </div>
                      </figcaption>
                    </div>
                  </a>
                </Link>
              </div>
              <div className="member_benifit_sec">
                <Link href="" legacyBehavior>
                  <a>
                    <div className="benifits_inner">
                      <figure>
                        <img className="" title="" alt="" src="" />
                      </figure>
                      <figcaption>
                        <h4>#HappyHub</h4>
                        <div className="cont resorts">
                          <div className="cont resorts_wrap">
                            <span></span>
                          </div>
                        </div>
                      </figcaption>
                    </div>
                  </a>
                </Link>
              </div> */}
            </div>
            {/* <Link href="#" legacyBehavior>
              <a className={styles["know_more"]}>Know more<span><MdKeyboardArrowRight/></span></a>
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
}
   

export const ListData=[
    {img:"assets/images/membership/benefit-01.jpg",title:"Access 100+ Resorts Worldwide", link:""},
    {img:"assets/images/membership/benefit-02.png",title:"2000+ Unique Experiences", link:""},
    {img:"assets/images/membership/benefit-03.png",title:"Premium Spacious Rooms", link:""},
    {img:"assets/images/membership/benefit-04.png",title:"Club M Select", link:""},
    {img:"assets/images/membership/benefit-05.png",title:"Global Presence", link:""},
    {img:"assets/images/membership/benefit-06.png",title:"#HappyHub", link:""}
]
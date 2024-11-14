import React from "react";
import styles from "./packageBenefits.module.scss"
import PkgSmallBanner from "@/components/packageComps/pkgSmallBanner/pkgSmallBanner";

export default function PackageBenefits(props) {
  
  var pkgBenefit = props?.uiLayout?.elements;
     //console.log(pkgBenefit);

  return (
    <section>
    <div className="container">
      <div className={styles["whyBook"]}>
        <div className={styles["makeFlex"]}>
          <div className={styles["cardWidth"] + " px-3"}>
            <h4 className="mb-0">{pkgBenefit?.sectionTitle?.highlightText?.value}</h4>
            <p>{pkgBenefit?.sectionTitle?.subText?.value}</p>
          </div>
          <div className={styles["flexItems"]+ " align-items-center justify-content-between"}>
           {pkgBenefit?.listingItem?.value?.map((data,i)=>(

            <div className={styles["cardWidth"]} key={i}>
              <img src={data?.itemImage?.value} alt="" />
            </div>
        ))}
          </div>
        </div>
      </div>

     <PkgSmallBanner item={pkgBenefit}/>
     
      </div>
    </section>
  );
}

export const Booking=[
    {img:"/assets/images/packages/whyBook01.webp"},
    {img:"/assets/images/packages/whyBook02.webp"},
    {img:"/assets/images/packages/whyBook03.webp"},
    {img:"/assets/images/packages/whyBook04.webp"}
]
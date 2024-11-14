import Link from "next/link";

import styles from "./displaySection.module.scss"
export default function DisplaySection(props){

   var display = props?.uiLayout?.elements;

   // console.log(display);
    return(
        <section className={styles["help_me_choose"]} style={{backgroundImage: `url(${display?.bgimageBanner?.bgImage?.value})`}}>
         <div className="container">
            <div className="row">
               <div className="d-none d-lg-block col-lg-6"></div>
               <div className={styles["bg"] + " col-lg-6 d-lg-none "} style={{backgroundImage: `url(${display?.bgimageBanner?.bgImage?.value}) !important`}}>

               </div>
               <div className={styles["cont"] + " col-lg-6 "}>
                  <div className={styles["cont_inner"]}>
                     <h4 className="mb-0">{display?.rightContent?.leadText?.value}</h4> 
                         <p>{display?.rightContent?.subText?.value}</p>                    
                     <Link legacyBehavior  href="#"><a target="_blank" className="btn-primary">{display?.rightContent?.buttonText?.value}</a></Link>
                  </div>
               </div>
            </div>
         </div>
</section>
    )
}
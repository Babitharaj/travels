import React from 'react'
import styles from "./offcanvasDemo.module.scss"
import Link from 'next/link'

export default function OffcanvasDemo(props) {
 
  var data=props?.offcanv;

  var One= data?.TT00023B100?.elements;
  var two= data?.TT00023B101?.elements;
  var three= data?.TT00023B102?.elements;
  var four= data?.TT00023B103?.elements;
  var five= data?.TT00023B104?.elements;
  //console.log(five)

  return (
    <div className="offcanvas offcanvas-end"  id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    <div className={styles["offcanvas-header"]+" offcanvas-header"}>
    <h5 id="offcanvasRightLabel"></h5>
    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
  <div className={styles["menu_inner"]}>
       <div className={styles["member_portal"]}>
         <h4>{One?.offcanvasHeader?.offcanvasTitle?.value}</h4>
         <Link legacyBehavior href={One?.offcanvasHeader?.buttonLink?.value || "#"}><a  className="btn-primary">{One?.offcanvasHeader?.offcanvasButton?.value}</a></Link>
        </div>
  {/* accordion */}
  <div>
  <div className={" accordion accordion-flush d-lg-none"} id="faqlist-1">         
<div className="accordion-item">
<h2 className={styles["accordion-header"]+ " accordion-header"} id="panelsStayOpen-headingOne">
  <button  href={two?.MainOne?.menu1Link?.value || "#"} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-1" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
  {two?.MainOne?.mainMenuHeadingOne?.value}
  </button>
</h2>
<div id="faq-content-1" className="accordion-collapse collapse" data-bs-parent="#faqlist-1">
  <div className={"accordion-body " + styles["acc-body"]}>

<div className={styles["mega_menu"]}>
  {/* <div className="col-12 ps-0">
  <Link legacyBehavior href={One?.offcanvasHeader?.buttonLink?.value || "#"}><a href="#" className={styles["linkText"]}>View all 100+ Resorts</a></Link>
  </div> */}
<div className="col-12 ps-0">
    <div className={styles["mega_menu_inner"]}>
    <p className={styles["resort_heading"]}>{two?.MainOne?.mainSubMenuHeadingOne?.value}</p> 
    <ul className='ps-0 mb-0'>
    {two?.MainOneSubTwo?.value?.map((item, i) => (
             <li key={i}>
             <Link
               href={item?.textLink?.value || "#"}
               legacyBehavior
             >
               <a
                 title={
                  two?.MainOne?.mainMenuHeadingOne
                     ?.value
                 }
               >
                 {item?.subMenuHeading?.value}
               </a>
             </Link>
           </li>
         ))}
      </ul>
    </div>
</div>
<div className="col-12 ps-0"> 
    <div className={styles["mega_menu_inner"]}>
        <p className={styles["resort_heading"]}>{two?.MainOne?.mainSubMenuHeadingTwo?.value}</p> 
          <ul className='ps-0 mb-0'>
          {two?.MainOneSubThree?.value?.map((item, i) => (
             <li key={i}>
             <Link
               href={item?.textLink?.value || "#"}
               legacyBehavior
             >
               <a
                 title={
                  two?.MainOne?.mainMenuHeadingOne
                     ?.value
                 }
               >
                 {item?.subMenuHeading?.value}
               </a>
             </Link>
           </li>
         ))}                                
        </ul>
    </div>
</div>
</div>
   
  </div>
</div>
</div>
         
       </div>
      <div className={" accordion accordion-flush d-lg-none"} id="faqlist-2">         
<div className="accordion-item">
<h2 className={styles["accordion-header"]+ " accordion-header"} id="panelsStayOpen-headingOne">
  <button href={three?.MainTwo?.menu2Link?.value || "#"} className="accordion-button" type="button"  data-bs-toggle="collapse" data-bs-target="#faq-content-2" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
  {three?.MainTwo?.mainMenuHeadingTwo?.value}
  </button>
</h2>
{/* <div id="faq-content-2" className="accordion-collapse collapse" data-bs-parent="#faqlist-2">
  <div className={"accordion-body " + styles["acc-body"]}>

<div className={styles["mega_menu"]}>
  <div className="col-12 ps-0">
    <a href="" className={styles["linkText"]}>View all 100+ Resorts</a>
  </div>
<div className="col-12 ps-0">
    <div className={styles["mega_menu_inner"]}>
    <p className={styles["resort_heading"]}>Resorts In India</p> 
    <ul className='ps-0 mb-0'>
      
      <li><a title="Resorts"  href="">EAST (7)</a></li>
      <li><a title="Resorts"  href="">EUROPE (14)</a></li>
      </ul>
    </div>
</div>
<div className="col-12 ps-0"> 
    <div className={styles["mega_menu_inner"]}>
        <p className={styles["resort_heading"]}>International Resorts</p> 
          <ul className='ps-0 mb-0'>
            <li><a title="Resorts"  href="">ASIA (17)</a></li>
            <li><a title="Resorts"  href="">EUROPE (14)</a></li>
                 
            <li><a title="Resorts"  href="">Middle East (1)</a></li>                                   
        </ul>
    </div>
</div>
</div>
   
  </div>
</div> */}
</div>
         
       </div>
       <div className={" accordion accordion-flush d-lg-none"} id="faqlist-3">         
<div className="accordion-item">
<h2 className={styles["accordion-header"]+ " accordion-header"} id="panelsStayOpen-headingOne">
  <button href={four?.MainThree?.menu3Link?.value || "#"} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-3" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
  {four?.MainThree?.mainMenuHeadingThree?.value}
  </button>
</h2>
<div id="faq-content-3" className="accordion-collapse collapse" data-bs-parent="#faqlist">
  <div className={"accordion-body " + styles["acc-body"]}>

<div className={styles["mega_menu"]}>
  {/* <div className="col-12 ps-0">
    <a href="" className={styles["linkText"]}>View all 100+ Resorts</a>
  </div> */}
<div className="col-12 ps-0">
    <div className={styles["mega_menu_inner"]}>
    <p className={styles["resort_heading"]}>{four?.MainThree?.mainSubMenuHeadingOne?.value}</p> 
    <ul className='ps-0 mb-0'>
    {four?.MainThreeSubTwo?.value?.map((item, i) => (
             <li key={i}>
             <Link
               href={item?.textLink?.value || "#"}
               legacyBehavior
             >
               <a
                 title={
                  two?.MainOne?.mainMenuHeadingOne
                     ?.value
                 }
               >
                 {item?.subMenuHeading?.value}
               </a>
             </Link>
           </li>
         ))}
      </ul>
    </div>
</div>
<div className="col-12 ps-0"> 
    <div className={styles["mega_menu_inner"]}>
        <p className={styles["resort_heading"]}>{four?.MainThree?.mainSubMenuHeadingTwo?.value}</p> 
          <ul className='ps-0 mb-0'>
          {four?.MainThreeSubThree?.value?.map((item, i) => (
             <li key={i}>
             <Link
               href={item?.textLink?.value || "#"}
               legacyBehavior
             >
               <a
                 title={
                  two?.MainOne?.mainMenuHeadingOne
                     ?.value
                 }
               >
                 {item?.subMenuHeading?.value}
               </a>
             </Link>
           </li>
         ))}                      
        </ul>
    </div>
</div>
</div>
   
  </div>
</div>
</div>
         
       </div>
       <div className={" accordion accordion-flush d-lg-none"} id="faqlist-4">         
<div className="accordion-item">
<h2 className={styles["accordion-header"]+ " accordion-header"} id="panelsStayOpen-headingOne">
  <button href={five?.MainFour?.menu4Link?.value || "#"} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-4" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
  {five?.MainFour?.mainMenuHeadingFour?.value}
  </button>
</h2>
<div id="faq-content-4" className="accordion-collapse collapse" data-bs-parent="#faqlist">
  <div className={"accordion-body " + styles["acc-body"]}>

<div className={styles["mega_menu"]}>
  {/* <div className="col-12 ps-0">
    <a href="" className={styles["linkText"]}>View all 100+ Resorts</a>
  </div> */}
<div className="col-12 ps-0">
    <div className={styles["mega_menu_inner"]}>
    <p className={styles["resort_heading"]}>{five?.MainFour?.mainSubMenuHeadingOne?.value}</p> 
    <ul className='ps-0 mb-0'>
    {five?.MainFourSubTwo?.value?.map((item, i) => (
             <li key={i}>
             <Link
               href={item?.textLink?.value || "#"}
               legacyBehavior
             >
               <a
                 title={
                  two?.MainOne?.mainMenuHeadingOne
                     ?.value
                 }
               >
                 {item?.subMenuHeading?.value}
               </a>
             </Link>
           </li>
         ))}
      </ul>
    </div>
</div>
<div className="col-12 ps-0"> 
    <div className={styles["mega_menu_inner"]}>
        <p className={styles["resort_heading"]}>{five?.MainFour?.mainSubMenuHeadingTwo?.value}</p> 
          <ul className='ps-0 mb-0'>
          {five?.MainFourSubThree?.value?.map((item, i) => (
             <li key={i}>
             <Link
               href={item?.textLink?.value || "#"}
               legacyBehavior
             >
               <a
                 title={
                  two?.MainOne?.mainMenuHeadingOne
                     ?.value
                 }
               >
                 {item?.subMenuHeading?.value}
               </a>
             </Link>
           </li>
         ))}                                
        </ul>
    </div>
</div>
</div>
   
  </div>
</div>
</div>
         
       </div>
     </div>

    </div>
  </div>
</div>
  )
}


//  {
//   "displayName": "offcanvas Link Text",
//   "fieldName": "offcLinkText",
//   "fieldValue": "Resorts",
//   "contentId": "",
//   "inputType": "TEXT",
//   "contentType": "TEXT",
//   "allowedContent": "",
//   "allowedContents": [],
//   "styleConfig": [],
//   "animationConfig": [],
//   "styleValue": [],
//   "animationValue": [],
//   "description": "Sub Text"
// },
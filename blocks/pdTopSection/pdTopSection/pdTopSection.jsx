import React, { useRef, useEffect } from 'react';
import PkgHeading from "@/components/Heading/pkgHeading";

import styles from "./pdTopSection.module.scss"
import PdBanner from "@/components/pd/pdBanner/pdBanner";
//import NextImage from "@/components/image/image";
import ThumbnailGallery from "@/components/lightBox/lightBox";

export default function PdTopSection(props) {

    //var pdConst = props?.pkgSec;
   
    var blockOne =props?.pkgSec[0]?.elements;
    //console.log(blockOne);

  return (
    <section style={{marginTop:"70px"}}> 
      <div className={styles["topSection"]}>
        <div className="container">
       
          <PkgHeading heading={blockOne?.sectionTitle}/>

          <div className={styles["top-banner"]+ " row ms-auto"}>
            <div className="col-lg-6 col-xs-12">
              <PdBanner banner={blockOne?.imageBanner?.value}/>
            </div>
            <div className="col-lg-6 col-xs-12">
             <div className=" row">
             <ThumbnailGallery Gallery={blockOne?.gallery?.value}/>
            

            </div>
          </div>
          
        </div>
      </div>
      </div>
    </section>
  );
}


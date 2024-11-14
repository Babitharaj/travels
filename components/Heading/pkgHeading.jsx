import React from 'react'
import styles from "./pkgHeading.module.scss"
export default function PkgHeading(props) {
  return (
    <>
    <div className={styles["pageHeading"]}>
           
           <div className={styles["makeFlex"]}>
             <span className={styles["topHeading"]}>
             {props?.heading?.highlightText?.value}
             </span>
           </div>
          
          
         </div>
    </>
  )
}

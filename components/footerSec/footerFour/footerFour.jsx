import React from 'react'
import styles from "./footerFour.module.scss"

function FooterFour(props) {

  const ffour=props?.ffour;
  //console.log(ffour);
 
  return (
    
    <div className={styles["copy_right"]}>
      <div></div>
    
     <div className={styles["footer_copyright"]}>

         <p>{ffour?.copyRight?.copyrightText?.value}</p>

     </div>

    </div>  

 

  )
}

export default FooterFour;

import Link from "next/link"
import styles from "./headingComp.module.scss"
import {MdKeyboardArrowRight} from 'react-icons/md'

export default function Heading(props){
 

    return(

       <div className={styles["item"] + " col-12"}>
            <div className={styles["headng_btn_wrap"] + " flex-wrap"}>
              <h2 className={styles["heading"]}>{props.heading}</h2>
              {props.indicator ? (
                <Link href="#" legacyBehavior><a>{props.indicator} <span><MdKeyboardArrowRight/></span></a></Link>
              ) : ""

              }
              
            </div>
            {props.subheading ? (
            <p className="margn-t-b">{props.subheading}
             </p>
            ) : ""
          }
           
          </div> 
    )
}
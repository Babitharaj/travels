import Link from "next/link"
import styles from "./selectBtn.module.scss"
export default function SelectButton(props){

  const btn=props?.btn;
  const {setTab,tab} = props
 
    return(

        <div className="col-12">
          <div className={styles["tabbing"]}>
             <ul className="m-0 p-0">
                <li>
                     <a className={tab=="atResort" ? styles.active : ''} onClick={()=>setTab("atResort")}>{btn?.buttonText?.value}</a>
                </li>
                <li>

                  <a className={tab=="nearBy" ? styles.active : ''} onClick={()=>setTab("nearBy")}>{btn?.btnTwo?.value}</a>
                  
                </li>
                  </ul>
          </div>
       </div>
    )
}
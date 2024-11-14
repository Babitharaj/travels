import React from 'react'
import styles from "./leftSideBar.module.scss"
export default function LeftSideBar(props) {
  return (
    
    <div className={styles["dayplan-nav"]}>
        <p className={styles["pointer-list-title"]}>{props?.sidebar?.heading?.headingText?.value}</p>
        <ul className="pointer-list p-0">
        {props?.sidebar?.sidebarContent?.value?.map((item,i)=>(
            <li className="active" key={i}>{item?.contentText?.value}</li>
        ))}
         
        </ul>
    </div>

  )
}

export const sidebar=[
  {name:"01 Aug, Tue"},
  {name:"02 Aug, Wed"},
  {name:"03 Aug, Thu"},
  {name:"04 Aug, Fri"},
  {name:"05 Aug, Sat"},
  {name:"06 Aug, Sun"},
]
import Link from "next/link";
import styles from "./megamenu.module.scss"
import { BiSearch } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { header } from "../../Data/navData"

import React, { useEffect } from 'react'

function Megamenu(props) {

  useEffect(() => {
    let element = document.getElementById("navBar");

  },[])

  return (
    <div>
      <ul className="nav navbar-nav d-flex justify-content-center align-items-center" style={{ gap: "21px" }}>

        {header?.map((item, index) => (
          <li className={styles.flexli + " nav-item my-auto"} key={index}>
            <div className={styles["sort-Option"]}>
                <Link href={item.link ||"#"} legacyBehavior>
                <a className={styles["mybutton-overlap"]}>
                  <div className={styles.navitem + " mb-0 fw-bold"}> {item.name} </div>
                </a></Link>
                <ul className="p-3">

                {item?.children?.length > 0}
                <div className={styles.flex}>
                  {item?.children?.map((element, index) => (
                    <div style={{ gap: "21px" }} key={index}>
                      <Link href="/shop" legacyBehavior>
                        <a className={styles.megacolor}>{element.name} </a>
                        </Link>
                      {element?.children?.length > 0}
                      <div>
                        {element?.children?.map((item, index) => (
                          <div> <Link href="#" className={styles.itemcolor} key={index}> {item.name}</Link></div>
                        )
                        )}
                      </div>

                    </div>
                  ))}
                </div>
              </ul>
            </div>
          </li>
        ))}
      </ul>


        
              
           

    </div>
  )
}
export default Megamenu;
export const navData=[
    {name:"Resorts", link:"/resorts"},
    {name:"Membership", link:"/membership"},
    {name:"Experiences", link:"/experiences"},
    {name:"Blog", link:"/blog"},
    {name:"Member Login", link:"/member-login"},
    
  ]

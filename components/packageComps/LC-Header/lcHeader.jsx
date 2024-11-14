import React from 'react'
import styles from "./lcHeader.module.scss"

export default function LcHeader() {

  return (
    <header className='mt-0'>
    <ul className={styles["initerary-nav"]}>
    <li className="active"><b className="me-2">6</b> Day Plan</li>
    <li className=""><b className="me-2">2</b> Hotels</li>
    <li className=""><b className="me-2">6</b> Transfers</li>
    <li className=""><b className="me-2">5</b> Activities</li>
    </ul>
    </header>
  )
}

import LeftContainer from '@/components/packageComps/leftContainer/leftContainer'
import React from 'react'
// import styles from "./pkgMain.module.scss"
import RightContainer from '@/components/packageComps/rightContainer/rightContainer'


export default function PkgMain(props) {
  // var bottom =props?.pkgSec;
// console.log(props?.pkgSec)
  return (
    <section>
       <div className='container'>
     <div className=" row justify-content-between">
    <LeftContainer left={props?.pkgSec}/>
    
    <RightContainer right={props?.pkgSec} style={{width: '310px'}}/>
   
     </div>
    </div>
   {/* </div>   */}
    </section>
  )
}



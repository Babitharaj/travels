import React from 'react'
import styles from "./rightContainer.module.scss"
import CouponComp from '../Coupons/couponComp'
import PriceDisplayed from '@/components/pd/priceDisplayed/priceDisplayed'
export default function RightContainer(props) {

  // var pkgPrice=props?.right[7]?.elements;
  var coupon=props?.right[8]?.elements;
  console.log(coupon)
  return (
    <div className={"col-lg-3 col-xs-12"}>
        <PriceDisplayed pkgPrice={props?.right[7]?.elements}/>
         <CouponComp coupon={props?.right[8]?.elements}/>
    </div>
  )
}

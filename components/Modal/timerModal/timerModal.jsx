import React, { useEffect, useState } from 'react'
import styles from "./timerModal.module.scss"
import CustomModal from '../modal/customModal';
//import Countdown from "react-countdown";
import CountdownTimer from '../../timer/timer'
import Link from 'next/link';

function TimerModal(props) {
    
    const [isVisible, setIsVisible] = useState(false);
 
    // var width='300px';

   
     useEffect(() => {
      setTimeout(() => {
       setIsVisible(true);
       }, 6000); 
   
     }, []);
   
     function closeModal() {
       setIsVisible(false);
     }
   
  return (
    <>

{isVisible && (
      
    <CustomModal width={"350px"} setState={closeModal}>
     <div className={styles['modal-body']}>
     <div className={styles["content"]}>
       <div className={styles["description"]}>
        <div className={styles["wrap"]}>
        <div style={{fontSize: '16px', fontweight: 'bold', marginTop: '5px', lineHeight: '24px', marginBottom: "6px"}}>{props?.timermodal?.modalContents?.heading?.value}</div>
        <div>
        <img style={{width: "113px"}} src={props?.timermodal?.modalContents?.modalImage?.value} alt="" className='mx-auto d-block'/>
        </div>
        <div style={{fontSize: '25px',  fontweight: 600}}>
        
        
        {/* <div className="countdown">
      <CountdownCircleTimer {...timerProps} renderTime={renderTime} />
    </div> */}
        {/* <Countdown date={Date.now() + 10000}/> */}

        <CountdownTimer minutes={2} seconds={59} />
        </div>

        <Link href={props?.timermodal?.modalContents?.buttonLink?.value || "#"} legacyBehavior><a className={styles['btn']}>{props?.timermodal?.modalContents?.modalButton?.value}</a></Link>
        </div>

       </div>
       </div>
    </div>
      </CustomModal>
      
    )}
</>
  )
}

export default TimerModal


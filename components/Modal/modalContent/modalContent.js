import React, { useState, useEffect } from 'react';
import CustomModal from '../modal/customModal';
import ModalSmall from '../modalSmall/modalSmall';
import styles from "./modalContent.module.scss"

function ScrollModal() {
  const [isVisible, setIsVisible] = useState(false);
 
 // var width='300px';

  useEffect(() => {
   setTimeout(() => {
    setIsVisible(true);
    }, 4000); 

  }, []);

  function closeModal() {
    setIsVisible(false);
  }

  return (
    <>
      {isVisible && (
      
      <CustomModal width={"400px"} setState={closeModal}>
       <div className={styles['modal-body']}>
        <ModalSmall />
      </div>
        </CustomModal>
        
      )}
    </>
  );
}

export default ScrollModal;
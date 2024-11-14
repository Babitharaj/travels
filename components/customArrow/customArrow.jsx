import React from 'react';
import styles from "./customArrow.module.scss"


export default function customArrow() {
    const PrevArrow = ({ onClick }) => (
        <button className="custom-prev-arrow" onClick={onClick}>
          Previous
        </button>
      );
      
      const NextArrow = ({ onClick }) => (
        <button className="custom-next-arrow" onClick={onClick}>
          Next
        </button>
      );
  return (
   <>
   </>
  )
}



import React from 'react'
import styles from "./aminitiesModal.module.scss"
export default function AminitiesModal(props) {
const data=props?.item;
//console.log(data)
  return (
    <>

    <div className="modal fade" id={"staticBackdropOne"+ props?.index} data-bs-backdrop="static" data-bs-keyboard="false"  aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-scrollable">
      <div className="modal-content">
        <div className="modal-header">
          {/* <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1> */}
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
       
        <div className={styles["modal-body"]+ " modal-body"}>
       <div className={styles["room-images"]}>
        <figure>
            <img className="lazy" src={data?.listingImage?.value}/>
        </figure>
        <figcaption>
            <h4><strong>{data?.itemText?.value}</strong></h4>
           <p><strong>{data?.subText?.value}</strong></p>
        </figcaption>
         </div>
         <div className={styles["description"]}>
               
                <h5>{props?.heading}</h5>
                 <ul>
                  
                  <li className="mb-0" dangerouslySetInnerHTML={{ __html: data?.aminitiesText?.value}}></li>
                 
                </ul>
                  
         </div>
        </div>
       

      </div>
    </div>
  </div>
  
</>
  )
}

export const aminities=[
  {list:"Air Conditioning/ Heating"},
  {list:"Dinner Plates/ Utensils"},
  {list:"Ironing Board on Request"},
  {list:"Microwave"},
  {list:"Mini-Fridge"},
  {list:"Safe Locker"},
  {list:"Tea/Coffee Maker"},
  {list:"Telephone"}
  
]
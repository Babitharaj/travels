
import SlickSlider from "@/components/slickSlider/slickSlider";
import styles from "./modalStructure.module.scss"

function ModalStructure (props){
 
    return(

      <>
   <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"  aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl">
    <div className={styles["modal-content"] + " modal-content"}>
      <div className="modal-header">
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className={styles["modal-body"] + " modal-body"}>
      <SlickSlider data={props?.gallery}/>

      </div>
    </div>
  </div>
</div>
      
      
      </>
    )
  }
  export default ModalStructure;